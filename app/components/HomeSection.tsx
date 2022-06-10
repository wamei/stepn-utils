import { RealmToken } from 'app/models/Realm'
import React, { FC, useContext } from 'react'
import { Button, Col, FloatingLabel, Form, OverlayTrigger, Popover, Row } from 'react-bootstrap'
import { LabeledForm } from './LabeledForm'
import { MintingCostTable } from './MintingCostTable'
import { MintingRateSelector } from './MintingRateSelector'
import { RealmSelector } from './RealmSelector'
import { CryptPriceTable } from './CryptPriceTable'
import { Context } from 'app/layouts/Layout'
import {
  MintingRateListCommon,
  MintingRateListRare,
  MintingRateListUncommon,
} from 'app/models/MintingRate'
import { SneakerRarity } from 'app/models/SneakerRarity'
import { SneakerRaritySelector } from './SneakerRaritySelector'
import { Trans } from 'react-i18next'

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
    mintingRateRare,
    setMintingRateRare,
    floorPriceString,
    setFloorPriceString,
    floorPrices,
    sneaker1,
    setSneaker1,
  } = context

  return (
    <>
      <Row className='align-items-center'>
        <Col xs={12} md={6}>
          <Row className='mb-3 mt-3'>
            <Col className='text-center'>
              <h5>
                <Trans>minting_cost_table</Trans>
              </h5>
            </Col>
          </Row>
          <Row className='mb-2'>
            <RealmSelector value={realm} onChange={setRealm} />
          </Row>
          <CryptPriceTable
            className='mb-4'
            crypts={crypts.filter(
              c =>
                c.id === RealmToken[realm].main ||
                c.id === RealmToken[realm].gst ||
                c.id === RealmToken[realm].gmt,
            )}
          />
        </Col>
        <Col xs={12} md={6}>
          <Row className='mb-3'>
            <Col xs={9}>
              <FloatingLabel
                label={
                  <>
                    <Trans>floor_price</Trans>
                    {`(${RealmToken[realm].unit})`}
                  </>
                }
              >
                <Form.Control
                  type='number'
                  value={floorPriceString}
                  onChange={e => {
                    setFloorPriceString(e.target.value)
                  }}
                />
              </FloatingLabel>
            </Col>
            <Col xs={3}>
              <OverlayTrigger
                trigger='click'
                rootClose
                placement={'bottom'}
                overlay={
                  <Popover>
                    <Popover.Body>
                      <Row>
                        <LabeledForm
                          label={
                            <>
                              Common <Trans>minting_cost</Trans>
                            </>
                          }
                          className='mb-2'
                        >
                          <MintingRateSelector
                            realm={realm}
                            crypts={crypts}
                            mintingRateList={MintingRateListCommon}
                            value={mintingRateCommon}
                            onChange={setMintingRateCommon}
                          />
                        </LabeledForm>
                        <LabeledForm
                          label={
                            <>
                              Uncommon <Trans>minting_cost</Trans>
                            </>
                          }
                          className='mb-2'
                        >
                          <MintingRateSelector
                            realm={realm}
                            crypts={crypts}
                            mintingRateList={MintingRateListUncommon}
                            value={mintingRateUncommon}
                            onChange={setMintingRateUncommon}
                          />
                        </LabeledForm>
                        <LabeledForm
                          label={
                            <>
                              Rare <Trans>minting_cost</Trans>
                            </>
                          }
                          className='mb-2'
                        >
                          <MintingRateSelector
                            realm={realm}
                            crypts={crypts}
                            mintingRateList={MintingRateListRare}
                            value={mintingRateRare}
                            onChange={setMintingRateRare}
                          />
                        </LabeledForm>
                      </Row>
                    </Popover.Body>
                  </Popover>
                }
              >
                <Button variant='outline-secondary' size='sm'>
                  <Trans>settings</Trans>
                </Button>
              </OverlayTrigger>
            </Col>
          </Row>
          <Row className='mb-3'>
            <SneakerRaritySelector
              type='button'
              value={sneaker1.rarity}
              onChange={r =>
                setSneaker1(old => ({
                  ...old,
                  rarity: r as SneakerRarity,
                }))
              }
            />
          </Row>
        </Col>
      </Row>
      {[SneakerRarity.Common, SneakerRarity.Uncommon, SneakerRarity.Rare]
        .sort(a => (a === sneaker1.rarity ? -1 : 1))
        .map(rarity => (
          <MintingCostTable
            key={rarity}
            mintingRateCommon={mintingRateCommon}
            mintingRateUncommon={mintingRateUncommon}
            mintingRateRare={mintingRateRare}
            rarity1={sneaker1.rarity}
            rarity2={rarity}
            realm={realm}
            crypts={crypts}
            floorPrice={floorPrices[realm] || 0}
          />
        ))}
    </>
  )
}
