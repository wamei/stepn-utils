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

export const HomeSection: FC<HomeSectionProps> = ({ crypts, realm, setRealm }) => {
  const router = useRouter()
  const [mintingRate, setMintingRate] = useState<MintingRate>({ gst: 360, gmt: 40 })
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
    })
  }, [replaceUrl, floorPrices, rarerity1, rarerity2])

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
          <LabeledForm label='割合'>
            <MintingRateSelector
              realm={realm}
              crypts={crypts}
              value={mintingRate}
              onChange={setMintingRate}
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
        mintingRate={mintingRate}
        rarerity1={rarerity1}
        rarerity2={rarerity2}
        realm={realm}
        crypts={crypts}
        floorPrice={floorPrices[realm] || 0}
      />
    </>
  )
}
