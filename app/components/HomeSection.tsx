import { RealmToken } from 'app/models/Realm'
import React, { FC, useContext } from 'react'
import { Button, FloatingLabel, Form, OverlayTrigger, Popover, Row } from 'react-bootstrap'
import { LabeledForm } from './LabeledForm'
import { MintingCostTable } from './MintingCostTable'
import { MintingRateSelector } from './MintingRateSelector'
import { RealmSelector } from './RealmSelector'
import { ShoeRareritySelector } from './ShoeRareritySelector'
import { CryptPriceTable } from './CryptPriceTable'
import { Context } from 'app/layouts/Layout'
import { MintingRateListCommon, MintingRateListUncommon } from 'app/models/MintingRate'

export const HomeSection: FC = () => {
  const context = useContext(Context)
  const {
    crypts,
    realm,
    setRealm,
    mintingRateCommon,
    setMintingRateCommon,
    mintingRateUncommon,
    setMintingRateUncommon,
    floorPriceString,
    setFloorPriceString,
    floorPrices,
    setFloorPrices,
    shoe1,
    setShoe1,
    shoe2,
    setShoe2,
  } = context

  return (
    <>
      <CryptPriceTable
        crypts={crypts.filter(
          c =>
            c.id === RealmToken[realm].main ||
            c.id === RealmToken[realm].gst ||
            c.id === RealmToken[realm].gmt,
        )}
      />
      <Form>
        <Row className='mb-2'>
          <LabeledForm label='チェーン'>
            <RealmSelector value={realm} onChange={setRealm} />
          </LabeledForm>
          <LabeledForm label='　'>
            <OverlayTrigger
              trigger='click'
              rootClose
              placement={'bottom'}
              overlay={
                <Popover>
                  <Popover.Body>
                    <Row>
                      <LabeledForm label='Common費用' className='mb-2'>
                        <MintingRateSelector
                          realm={realm}
                          crypts={crypts}
                          mintingRateList={MintingRateListCommon}
                          value={mintingRateCommon}
                          onChange={setMintingRateCommon}
                        />
                      </LabeledForm>
                      <LabeledForm label='Uncommon費用' className='mb-2'>
                        <MintingRateSelector
                          realm={realm}
                          crypts={crypts}
                          mintingRateList={MintingRateListUncommon}
                          value={mintingRateUncommon}
                          onChange={setMintingRateUncommon}
                        />
                      </LabeledForm>
                    </Row>
                  </Popover.Body>
                </Popover>
              }
            >
              <Button variant='secondary' size='sm' className='mt-'>
                費用設定
              </Button>
            </OverlayTrigger>
          </LabeledForm>
        </Row>
        <Row className='mb-2'>
          <LabeledForm label='靴1'>
            <ShoeRareritySelector
              id='cr1'
              value={shoe1.rarerity}
              onChange={r =>
                setShoe1(old => ({
                  ...old,
                  rarerity: r,
                }))
              }
            />
          </LabeledForm>
          <LabeledForm label='靴2'>
            <ShoeRareritySelector
              id='cr2'
              value={shoe2.rarerity}
              onChange={r =>
                setShoe2(old => ({
                  ...old,
                  rarerity: r,
                }))
              }
            />
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
        rarerity1={shoe1.rarerity}
        rarerity2={shoe2.rarerity}
        realm={realm}
        crypts={crypts}
        floorPrice={floorPrices[realm] || 0}
      />
    </>
  )
}
