import { Context } from 'app/layouts/Layout'
import { Cryptocurrency } from 'app/models/Cryptcurrency'
import { MintingRate } from 'app/models/MintingRate'
import { Realm, RealmToken } from 'app/models/Realm'
import { ShoeRarerity } from 'app/models/ShoeRarerity'
import React, { FC, useContext } from 'react'
import { Card, Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import { RealmSelector } from './RealmSelector'
import { ShoeSelector } from './ShoeSelector'

export const MintSection: FC = () => {
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
      <Form>
        <Row className='mb-2'>
          <RealmSelector value={realm} onChange={setRealm} />
        </Row>
        <Row className='mb-2'>
          <Col xs={6}>
            <Card>
              <Card.Body>
                <ShoeSelector id='mintshoe1' shoe={shoe1} setShoe={setShoe1} />
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6}>
            <Card>
              <Card.Body>
                <ShoeSelector id='mintshoe2' shoe={shoe2} setShoe={setShoe2} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <FloatingLabel
          controlId='floatingInput'
          label={`フロア価格(${RealmToken[realm]?.unit})`}
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
    </>
  )
}
