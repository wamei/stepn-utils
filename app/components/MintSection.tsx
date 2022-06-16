import { Context, UnitType } from 'app/layouts/Layout'
import { RealmToken } from 'app/models/Realm'
import {
  MintedSneakerShoeboxRarityMatrix,
  ShoeBoxRarityMatrix,
  SneakerRarity,
  SneakerRarityColor,
} from 'app/models/SneakerRarity'
import { MintedSneakerTypeMatrix } from 'app/models/SneakerType'
import { t } from 'i18next'
import React, { FC, useContext } from 'react'
import {
  ButtonGroup,
  Card,
  Col,
  FloatingLabel,
  Form,
  OverlayTrigger,
  Popover,
  Row,
  ToggleButton,
} from 'react-bootstrap'
import { Trans } from 'react-i18next'
import { CryptPriceTable } from './CryptPriceTable'
import { LabeledForm } from './LabeledForm'
import { calcMintCost } from './MintingCostTable'
import { RealmSelector } from './RealmSelector'
import { SmallDecimal } from './SmallDecimal'
import { SneakerSelector } from './SneakerSelector'
import { UnitSelector } from './UnitSelector'

export const MintSection: FC = () => {
  const context = useContext(Context)
  const {
    crypts,
    realm,
    setRealm,
    mintingRateCommon,
    mintingRateUncommon,
    mintingRateRare,
    floorPriceString,
    setFloorPriceString,
    floorPrices,
    mintingScrollPricesString,
    setMintingScrollPricesString,
    mintingScrollPrices,
    sneaker1,
    setSneaker1,
    sneaker2,
    setSneaker2,
    lvupSneakerNum,
    setLvupSneakerNum,
    unitType,
    setUnitType,
  } = context

  const {
    costGst,
    costGmt,
    costScroll,
    gmtPrice,
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
    mintingRateRare,
    sneaker1.rarity,
    sneaker1.mint,
    sneaker2.rarity,
    sneaker2.mint,
    floorPrices[realm] || 0,
    mintingScrollPrices,
  )

  const gst = crypts.find(v => v.id === RealmToken[realm].gst)
  const gmt = crypts.find(v => v.id === RealmToken[realm].gmt)

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

  const sneakerRarities = Object.entries(
    MintedSneakerShoeboxRarityMatrix[sneaker1.rarity][sneaker2.rarity],
  )
    .map(([rarity, value]) => {
      return {
        [SneakerRarity.Common]: ShoeBoxRarityMatrix[rarity][SneakerRarity.Common] * value,
        [SneakerRarity.Uncommon]: ShoeBoxRarityMatrix[rarity][SneakerRarity.Uncommon] * value,
        [SneakerRarity.Rare]: ShoeBoxRarityMatrix[rarity][SneakerRarity.Rare] * value,
        [SneakerRarity.Epic]: ShoeBoxRarityMatrix[rarity][SneakerRarity.Epic] * value,
        [SneakerRarity.Legendary]: ShoeBoxRarityMatrix[rarity][SneakerRarity.Legendary] * value,
      }
    })
    .reduce(
      (p, c) => {
        return {
          [SneakerRarity.Common]: p[SneakerRarity.Common] + c[SneakerRarity.Common],
          [SneakerRarity.Uncommon]: p[SneakerRarity.Uncommon] + c[SneakerRarity.Uncommon],
          [SneakerRarity.Rare]: p[SneakerRarity.Rare] + c[SneakerRarity.Rare],
          [SneakerRarity.Epic]: p[SneakerRarity.Epic] + c[SneakerRarity.Epic],
          [SneakerRarity.Legendary]: p[SneakerRarity.Legendary] + c[SneakerRarity.Legendary],
        }
      },
      {
        [SneakerRarity.Common]: 0,
        [SneakerRarity.Uncommon]: 0,
        [SneakerRarity.Rare]: 0,
        [SneakerRarity.Epic]: 0,
        [SneakerRarity.Legendary]: 0,
      },
    )

  return (
    <Row>
      <Col xs={12} md={6}>
        <Row className='mb-3 mt-3'>
          <Col className='text-center'>
            <h5>
              <Trans>minting_cost_emulator</Trans>
            </h5>
          </Col>
        </Row>
        <Row className='mb-2'>
          <RealmSelector value={realm} onChange={setRealm} />
        </Row>
        <CryptPriceTable
          className='mb-5'
          crypts={crypts.filter(
            c =>
              c.id === RealmToken[realm].main ||
              c.id === RealmToken[realm].gst ||
              c.id === RealmToken[realm].gmt,
          )}
        />
        <Row className='mb-3 mt-3'>
          <Col className='text-center'>
            <h5>
              <Trans>input</Trans>
            </h5>
          </Col>
        </Row>
        <Row className='mb-2'>
          <Col xs={6}>
            <Card>
              <Card.Body className='pt-1 text-center'>
                <div className='mb-2'>
                  <small className='text-muted'>Sneaker1</small>
                </div>
                <SneakerSelector sneaker={sneaker1} setSneaker={setSneaker1} />
              </Card.Body>
              <FloatingLabel
                as={Card.Footer}
                label={
                  <span className='text-nowrap'>
                    <img
                      className='me-1 align-middle'
                      src={`/stepn-utils/${sneaker1.rarity}-minting-scroll.png`}
                      alt={t('minting_scroll')}
                      width='20'
                      height='20'
                    />
                    {gmt?.symbol}
                  </span>
                }
                className='p-0'
              >
                <Form.Control
                  className='border-0'
                  type='number'
                  value={mintingScrollPricesString[sneaker1.rarity]}
                  onChange={e => {
                    setMintingScrollPricesString(old => ({
                      ...old,
                      [sneaker1.rarity]: e.target.value,
                    }))
                  }}
                />
              </FloatingLabel>
            </Card>
          </Col>
          <Col xs={6}>
            <Card>
              <Card.Body className='pt-1 text-center'>
                <div className='mb-2'>
                  <small className='text-muted'>Sneaker2</small>
                </div>
                <SneakerSelector sneaker={sneaker2} setSneaker={setSneaker2} />
              </Card.Body>
              <FloatingLabel
                as={Card.Footer}
                label={
                  <span className='text-nowrap'>
                    <img
                      className='me-1 align-middle'
                      src={`/stepn-utils/${sneaker2.rarity}-minting-scroll.png`}
                      alt={t('minting_scroll')}
                      width='20'
                      height='20'
                    />
                    {gmt?.symbol}
                  </span>
                }
                className='p-0'
              >
                <Form.Control
                  className='border-0'
                  type='number'
                  value={mintingScrollPricesString[sneaker2.rarity]}
                  onChange={e => {
                    setMintingScrollPricesString(old => ({
                      ...old,
                      [sneaker2.rarity]: e.target.value,
                    }))
                  }}
                />
              </FloatingLabel>
            </Card>
          </Col>
        </Row>
        <FloatingLabel
          label={
            <>
              <Trans>floor_price</Trans>
              {`(${RealmToken[realm]?.unit})`}
            </>
          }
          className='mb-2'
        >
          <Form.Control
            type='number'
            value={floorPriceString}
            onChange={e => {
              setFloorPriceString(e.target.value)
            }}
          />
        </FloatingLabel>
        <Row className='mb-5'>
          <Col>
            <LabeledForm label={<Trans>levelup_cost</Trans>}>
              <ButtonGroup>
                <ToggleButton
                  value={0}
                  id={`radio-lvups-0`}
                  type='radio'
                  variant='light'
                  style={{
                    backgroundColor: lvupSneakerNum === 0 ? SneakerRarityColor.Common : '',
                  }}
                  onChange={e => setLvupSneakerNum(Number(e.currentTarget.value))}
                  size='sm'
                >
                  <Trans>levelup_cost_0</Trans>
                </ToggleButton>
                <ToggleButton
                  value={1}
                  id={`radio-lvups-1`}
                  type='radio'
                  variant='light'
                  style={{
                    backgroundColor: lvupSneakerNum === 1 ? SneakerRarityColor.Common : '',
                  }}
                  onChange={e => setLvupSneakerNum(Number(e.currentTarget.value))}
                  size='sm'
                >
                  <Trans>levelup_cost_1</Trans>
                </ToggleButton>
                <ToggleButton
                  value={2}
                  id={`radio-lvups-2`}
                  type='radio'
                  variant='light'
                  style={{
                    backgroundColor: lvupSneakerNum === 2 ? SneakerRarityColor.Common : '',
                  }}
                  onChange={e => setLvupSneakerNum(Number(e.currentTarget.value))}
                  size='sm'
                >
                  <Trans>levelup_cost_2</Trans>
                </ToggleButton>
              </ButtonGroup>
            </LabeledForm>
          </Col>
          <Col>
            <LabeledForm label={<Trans>currency_unit</Trans>}>
              <UnitSelector realm={realm} value={unitType} onChange={setUnitType} />
            </LabeledForm>
          </Col>
        </Row>
      </Col>
      <Col xs={12} md={6}>
        <Row className='mb-3 mt-3'>
          <Col className='text-center'>
            <h5>
              <Trans>minting_cost</Trans>
            </h5>
          </Col>
        </Row>
        <Row className='mb-2'>
          <Col className='pe-2'>
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
          <Col className='p-0'>
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
          <Col className='ps-2'>
            <FloatingLabel
              label={
                <>
                  <img
                    className='me-1 align-middle'
                    src={`/stepn-utils/Common-minting-scroll.png`}
                    alt={t('minting_scroll')}
                    width='20'
                    height='20'
                  />
                  {gmt?.symbol}
                </>
              }
              className='mb-2'
            >
              <Form.Control readOnly value={costScroll} />
            </FloatingLabel>
          </Col>
        </Row>
        <FloatingLabel
          label={
            <>
              <Trans>minting_cost</Trans>
              {`(${unit})`}
            </>
          }
          className='mb-2'
        >
          <Form.Control readOnly value={convertUnit(unitType, mintPrice).toFixed(3)} />
        </FloatingLabel>
        <FloatingLabel
          label={
            <>
              <Trans>levelup_cost</Trans>
              {`(${unit})`}
            </>
          }
          className='mb-2'
        >
          <Form.Control
            readOnly
            value={convertUnit(unitType, lvupPrice * lvupSneakerNum).toFixed(3)}
          />
        </FloatingLabel>
        <FloatingLabel
          label={
            <>
              <Trans>selling_price_include_fee</Trans>
              {`(${unit})`}
            </>
          }
          className='mb-2'
        >
          <Form.Control readOnly value={unitedLowestPrice.toFixed(3)} />
        </FloatingLabel>
        <FloatingLabel
          label={
            <>
              <Trans>profit_at_floor_price</Trans>
              {`(${unit})`}
            </>
          }
          className='mb-2'
        >
          <Form.Control readOnly value={unitedLowestBenefit.toFixed(3)} />
        </FloatingLabel>
        <Row className='mb-3 mt-5'>
          <Col className='text-center'>
            <h5>
              <Trans>sneaker_type</Trans>
            </h5>
          </Col>
        </Row>
        <Row>
          {Object.entries(MintedSneakerTypeMatrix[sneaker1.type][sneaker2.type]).map(
            ([type, value]) => (
              <Col key={type} xs={3}>
                <Row>
                  <Col className='text-center' style={{ height: '40px' }}>
                    <img src={`/stepn-utils/${type}.svg`} width='70' className='mb-2' />
                  </Col>
                </Row>
                <Row>
                  <Col className='text-center'>{type}</Col>
                </Row>
                <Row>
                  <Col className='text-center'>{(value * 100).toFixed(0)}%</Col>
                </Row>
              </Col>
            ),
          )}
        </Row>
        <Row className='mb-2 mt-2'>
          <Col className='text-center'>
            <h5>
              <Trans>shoebox_rarity</Trans>
            </h5>
          </Col>
        </Row>
        <OverlayTrigger
          trigger='click'
          rootClose
          overlay={
            <Popover>
              <Popover.Body>
                {Object.entries(
                  MintedSneakerShoeboxRarityMatrix[sneaker1.rarity][sneaker2.rarity],
                ).map(([rarity, value]) => (
                  <Row
                    key={rarity}
                    style={{
                      backgroundColor: SneakerRarityColor[rarity],
                    }}
                    className={`${value === 0 ? 'd-none' : ''}`}
                  >
                    <Col>{rarity}</Col>
                    <Col className='text-end'>
                      <SmallDecimal value={(value * 100).toFixed(2)} />%
                    </Col>
                  </Row>
                ))}
              </Popover.Body>
            </Popover>
          }
        >
          <div>
            {Object.entries(MintedSneakerShoeboxRarityMatrix[sneaker1.rarity][sneaker2.rarity]).map(
              ([rarity, value]) => (
                <div
                  key={rarity}
                  style={{
                    backgroundColor: SneakerRarityColor[rarity],
                    width: `${value * 100}%`,
                    ...(value === 0
                      ? {
                          display: 'none',
                        }
                      : {
                          display: 'inline-block',
                        }),
                  }}
                >
                  <div className='text-center overflow-hidden'>{rarity}</div>
                  <div className='text-center overflow-hidden'>
                    <SmallDecimal value={(value * 100).toFixed(2)} />%
                  </div>
                </div>
              ),
            )}
          </div>
        </OverlayTrigger>
        <Row className='mb-2 mt-2'>
          <Col className='text-center'>
            <h5>
              <Trans>sneaker_rarity</Trans>
            </h5>
          </Col>
        </Row>
        <OverlayTrigger
          trigger='click'
          rootClose
          overlay={
            <Popover>
              <Popover.Body>
                {Object.entries(sneakerRarities).map(([rarity, value]) => (
                  <Row
                    key={rarity}
                    style={{
                      backgroundColor: SneakerRarityColor[rarity],
                    }}
                    className={`${value === 0 ? 'd-none' : ''}`}
                  >
                    <Col>{rarity}</Col>
                    <Col className='text-end'>
                      <SmallDecimal value={(value * 100).toFixed(2)} />%
                    </Col>
                  </Row>
                ))}
              </Popover.Body>
            </Popover>
          }
        >
          <div>
            {Object.entries(sneakerRarities).map(([rarity, value]) => (
              <div
                key={rarity}
                style={{
                  backgroundColor: SneakerRarityColor[rarity],
                  width: `${value * 100}%`,
                  ...(value === 0
                    ? {
                        display: 'none',
                      }
                    : {
                        display: 'inline-block',
                      }),
                }}
              >
                <div className='text-center overflow-hidden'>{rarity}</div>
                <div className='text-center overflow-hidden'>
                  <SmallDecimal value={(value * 100).toFixed(2)} />%
                </div>
              </div>
            ))}
          </div>
        </OverlayTrigger>
      </Col>
    </Row>
  )
}
