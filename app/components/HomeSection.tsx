import { Cryptocurrency } from 'app/models/Cryptcurrency'
import { MintingRate } from 'app/models/MintingRate'
import { Realm, RealmToken } from 'app/models/Realm'
import { ShoeRarerity } from 'app/models/ShoeRarerity'
import { replaceUrl } from 'app/utils'
import { useRouter } from 'blitz'
import React, { FC, useEffect, useState } from 'react'
import { FloatingLabel, Form, Row } from 'react-bootstrap'
import { LabeledForm } from './LabeledForm'
import { MintingCostTable } from './MintingCostTable'
import { MintingRateSelector } from './MintingRateSelector'
import { RealmSelector } from './RealmSelector'
import { ShoeRareritySelector } from './ShoeRareritySelector'
import QueryString from 'query-string'

type HomeSectionProps = {
  crypts: Cryptocurrency[]
  realm: Realm
  setRealm(realm: Realm): void
}

const MintingRateListCommon: MintingRate[] = [
  {
    gst: 360,
    gmt: 40,
  },
]

export const MintingRateListUncommon: MintingRate[] = [
  {
    gst: 1360,
    gmt: 240,
  },
]

export const HomeSection: FC<HomeSectionProps> = ({ crypts, realm, setRealm }) => {
  const router = useRouter()
  const [mintingRateCommon, setMintingRateCommon] = useState<MintingRate>(
    MintingRateListCommon[0] as MintingRate,
  )
  const [mintingRateUncommon, setMintingRateUncommon] = useState<MintingRate>(
    MintingRateListUncommon[0] as MintingRate,
  )
  const [rarerity1, setRarerity1] = useState<ShoeRarerity>(ShoeRarerity.Common)
  const [rarerity2, setRarerity2] = useState<ShoeRarerity>(ShoeRarerity.Common)
  const [floorPriceString, setFloorPriceString] = useState('')
  const [floorPrices, setFloorPrices] = useState<{
    [key: string]: number
  }>({})

  useEffect(() => {
    const query = QueryString.parse(location.search)
    replaceUrl({
      ...query,
      r1: rarerity1,
      r2: rarerity2,
      ...floorPrices,
      gstC: mintingRateCommon.gst,
      gmtC: mintingRateCommon.gmt,
      gstU: mintingRateUncommon.gst,
      gmtU: mintingRateUncommon.gmt,
    })
  }, [replaceUrl, floorPrices, rarerity1, rarerity2, mintingRateCommon, mintingRateUncommon])

  useEffect(() => {
    setFloorPriceString(String(floorPrices[realm]))
  }, [realm])

  useEffect(() => {
    setFloorPrices(old => ({
      ...old,
      [realm]: Number(floorPriceString),
    }))
  }, [floorPriceString])

  useEffect(() => {
    const qRealm = router.query.realm as Realm
    if (router.query[qRealm]) {
      setFloorPriceString(String(router.query[qRealm]))
    }
    if (router.query.r1) {
      setRarerity1(router.query.r1 as ShoeRarerity)
    }
    if (router.query.r2) {
      setRarerity2(router.query.r2 as ShoeRarerity)
    }
    if (router.query.gstC || router.query.gmtC) {
      setMintingRateCommon({
        gst: Number(router.query.gstC),
        gmt: Number(router.query.gmtC),
      })
    }
    if (router.query.gstU || router.query.gmtU) {
      setMintingRateUncommon({
        gst: Number(router.query.gstU),
        gmt: Number(router.query.gmtU),
      })
    }
    Object.values(Realm).forEach(realm => {
      if (router.query[realm]) {
        setFloorPrices(old => ({
          ...old,
          [realm]: Number(router.query[realm]),
        }))
      }
    })
  }, [router.query])

  return (
    <>
      <Form>
        <Row className='mb-2'>
          <LabeledForm label='チェーン'>
            <RealmSelector value={realm} onChange={setRealm} />
          </LabeledForm>
        </Row>
        <Row className='mb-2'>
          <LabeledForm label='Common費用'>
            <MintingRateSelector
              realm={realm}
              crypts={crypts}
              mintingRateList={MintingRateListCommon}
              value={mintingRateCommon}
              onChange={setMintingRateCommon}
            />
          </LabeledForm>
          <LabeledForm label='Uncommon費用'>
            <MintingRateSelector
              realm={realm}
              crypts={crypts}
              mintingRateList={MintingRateListUncommon}
              value={mintingRateUncommon}
              onChange={setMintingRateUncommon}
            />
          </LabeledForm>
        </Row>
        <Row className='mb-2'>
          <LabeledForm label='靴1'>
            <ShoeRareritySelector id='r1' value={rarerity1} onChange={setRarerity1} />
          </LabeledForm>
          <LabeledForm label='靴2'>
            <ShoeRareritySelector id='r2' value={rarerity2} onChange={setRarerity2} />
          </LabeledForm>
        </Row>
        <FloatingLabel
          controlId='floatingInput'
          label={`フロア価格(${RealmToken[realm].unit})`}
          className='mb-3'
        >
          <Form.Control
            type='number'
            value={floorPriceString}
            onChange={e => {
              setFloorPriceString(e.target.value)
            }}
          />
        </FloatingLabel>
      </Form>
      <MintingCostTable
        mintingRateCommon={mintingRateCommon}
        mintingRateUncommon={mintingRateUncommon}
        rarerity1={rarerity1}
        rarerity2={rarerity2}
        realm={realm}
        crypts={crypts}
        floorPrice={floorPrices[realm] || 0}
      />
    </>
  )
}
