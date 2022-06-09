import { Context } from 'app/layouts/Layout'
import { Cryptocurrency } from 'app/models/Cryptcurrency'
import { MintingRate } from 'app/models/MintingRate'
import { Realm, RealmToken } from 'app/models/Realm'
import { ShoeRarerity, ShoeRarerityColor } from 'app/models/ShoeRarerity'
import React, { FC, useContext, useState } from 'react'
import { ButtonGroup, Card, Col, FloatingLabel, Form, Row, ToggleButton } from 'react-bootstrap'
import { CryptPriceTable } from './CryptPriceTable'
import { LabeledForm } from './LabeledForm'
import { calcMintCost } from './MintingCostTable'
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

  const {
    costGst,
    costGmt,
    mainPrice,
    mainPriceUsd,
    mintPrice,
    lvupPrice,
    lowestPrice,
    lowestLvupPrice,
    lowest2LvupPrice,
    lowestBenefit,
    lowestLvupBenefit,
    lowest2LvupBenefit,
  } = calcMintCost(
    realm,
    crypts,
    mintingRateCommon,
    mintingRateUncommon,
    shoe1.rarerity,
    shoe1.mint,
    shoe2.rarerity,
    shoe2.mint,
    floorPrices[realm] || 0,
  )

  const gst = crypts.find(v => v.id === RealmToken[realm].gst)
  const gmt = crypts.find(v => v.id === RealmToken[realm].gmt)

  const [lvupSneakerNum, setLvupSneakerNum] = useState(0)
  type UnitType = 'realm' | 'jpy' | 'usd'
  const [unitType, setUnitType] = useState<UnitType>('realm')

  const unit = unitType === 'realm' ? RealmToken[realm].unit : unitType === 'jpy' ? 'JPY' : 'USD'

  const convertUnit = (unitType: UnitType, value: number) => {
    return unitType === 'realm'
      ? value / mainPrice
      : unitType === 'jpy'
      ? value
      : (value / mainPrice) * mainPriceUsd
  }

  const _unitedLowestPrice =
    lvupSneakerNum === 0 ? lowestPrice : lvupSneakerNum === 1 ? lowestLvupPrice : lowest2LvupPrice
  const unitedLowestPrice = convertUnit(unitType, _unitedLowestPrice)
  const _unitedLowestBenefit =
    lvupSneakerNum === 0
      ? lowestBenefit
      : lvupSneakerNum === 1
      ? lowestLvupBenefit
      : lowest2LvupBenefit
  const unitedLowestBenefit = convertUnit(unitType, _unitedLowestBenefit)

  return (
    <>
      <Form>
        <Row className='mb-2'>
          <RealmSelector value={realm} onChange={setRealm} />
        </Row>
        <CryptPriceTable
          crypts={crypts.filter(
            c =>
              c.id === RealmToken[realm].main ||
              c.id === RealmToken[realm].gst ||
              c.id === RealmToken[realm].gmt,
          )}
        />
        <Row className='mb-2'>
          <Col xs={6}>
            <Card>
              <Card.Body className='pt-1 text-center'>
                <div className='mb-2'>
                  <small className='text-muted'>Sneaker1</small>
                </div>
                <ShoeSelector id='mintshoe1' shoe={shoe1} setShoe={setShoe1} />
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6}>
            <Card>
              <Card.Body className='pt-1 text-center'>
                <div className='mb-2'>
                  <small className='text-muted'>Sneaker2</small>
                </div>
                <ShoeSelector id='mintshoe2' shoe={shoe2} setShoe={setShoe2} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <FloatingLabel label={`フロア価格(${RealmToken[realm]?.unit})`} className='mb-3'>
          <Form.Control
            type='number'
            value={floorPriceString}
            onChange={e => {
              setFloorPriceString(e.target.value)
            }}
          />
        </FloatingLabel>
        <Row className='mb-3'>
          <Col>
            <LabeledForm label='レベルアップ費用'>
              <ButtonGroup>
                <ToggleButton
                  value={0}
                  id={`radio-lvups-0`}
                  type='radio'
                  variant='light'
                  style={{
                    backgroundColor: lvupSneakerNum === 0 ? ShoeRarerityColor.Common : '',
                  }}
                  onChange={e => setLvupSneakerNum(Number(e.currentTarget.value))}
                  size='sm'
                >
                  なし
                </ToggleButton>
                <ToggleButton
                  value={1}
                  id={`radio-lvups-1`}
                  type='radio'
                  variant='light'
                  style={{
                    backgroundColor: lvupSneakerNum === 1 ? ShoeRarerityColor.Common : '',
                  }}
                  onChange={e => setLvupSneakerNum(Number(e.currentTarget.value))}
                  size='sm'
                >
                  1足分
                </ToggleButton>
                <ToggleButton
                  value={2}
                  id={`radio-lvups-2`}
                  type='radio'
                  variant='light'
                  style={{
                    backgroundColor: lvupSneakerNum === 2 ? ShoeRarerityColor.Common : '',
                  }}
                  onChange={e => setLvupSneakerNum(Number(e.currentTarget.value))}
                  size='sm'
                >
                  2足分
                </ToggleButton>
              </ButtonGroup>
            </LabeledForm>
          </Col>
          <Col>
            <LabeledForm label='通貨単位'>
              <ButtonGroup>
                <ToggleButton
                  value={'realm'}
                  id={`radio-unit-0`}
                  type='radio'
                  variant='light'
                  style={{
                    backgroundColor: unitType === 'realm' ? ShoeRarerityColor.Common : '',
                  }}
                  onChange={e => setUnitType(e.currentTarget.value as UnitType)}
                  size='sm'
                >
                  {RealmToken[realm].unit}
                </ToggleButton>
                <ToggleButton
                  value={'jpy'}
                  id={`radio-unit-1`}
                  type='radio'
                  variant='light'
                  style={{
                    backgroundColor: unitType === 'jpy' ? ShoeRarerityColor.Common : '',
                  }}
                  onChange={e => setUnitType(e.currentTarget.value as UnitType)}
                  size='sm'
                >
                  JPY
                </ToggleButton>
                <ToggleButton
                  value={'usd'}
                  id={`radio-unit-2`}
                  type='radio'
                  variant='light'
                  style={{
                    backgroundColor: unitType === 'usd' ? ShoeRarerityColor.Common : '',
                  }}
                  onChange={e => setUnitType(e.currentTarget.value as UnitType)}
                  size='sm'
                >
                  USD
                </ToggleButton>
              </ButtonGroup>
            </LabeledForm>
          </Col>
        </Row>
        <Row className='mb-2'>
          <Col>
            <FloatingLabel
              label={
                <>
                  <img
                    className='me-1 align-middle'
                    src={`/stepn-utils/${gst?.id}.png`}
                    alt={gst?.name}
                    width='20'
                    height='20'
                  />
                  {gst?.symbol}
                </>
              }
            >
              <Form.Control readOnly value={costGst} />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              label={
                <>
                  <img
                    className='me-1 align-middle'
                    src={`/stepn-utils/${gmt?.id}.png`}
                    alt={gmt?.name}
                    width='20'
                    height='20'
                  />
                  {gmt?.symbol}
                </>
              }
            >
              <Form.Control readOnly value={costGmt} />
            </FloatingLabel>
          </Col>
        </Row>
        <FloatingLabel label={`ミント費用(${unit})`} className='mb-2'>
          <Form.Control readOnly value={convertUnit(unitType, mintPrice).toFixed(3)} />
        </FloatingLabel>
        <FloatingLabel label={`レベル上げ費用(${unit})`} className='mb-2'>
          <Form.Control
            readOnly
            value={convertUnit(unitType, lvupPrice * lvupSneakerNum).toFixed(3)}
          />
        </FloatingLabel>
        <FloatingLabel label={`最低販売価格(${unit})`} className='mb-2'>
          <Form.Control readOnly value={unitedLowestPrice.toFixed(3)} />
        </FloatingLabel>
        <FloatingLabel label={`利益(${unit})`} className='mb-2'>
          <Form.Control readOnly value={unitedLowestBenefit.toFixed(3)} />
        </FloatingLabel>
      </Form>
    </>
  )
}
