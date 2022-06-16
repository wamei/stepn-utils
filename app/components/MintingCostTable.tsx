import { Context, MintingScrollPrices, UnitType } from 'app/layouts/Layout'
import { Cryptocurrency } from 'app/models/Cryptcurrency'
import { calcAdditionalGmt, MintingRate } from 'app/models/MintingRate'
import { Realm, RealmColor, RealmToken } from 'app/models/Realm'
import { SneakerRarity, SneakerRarityColor } from 'app/models/SneakerRarity'
import React, { FC, useContext, useState } from 'react'
import { Button, Col, Modal, Row, Table } from 'react-bootstrap'
import { Trans } from 'react-i18next'
import { ReactNode } from 'react-transition-group/node_modules/@types/react'
import { SmallDecimal } from './SmallDecimal'
import { UnitSelector } from './UnitSelector'

type MintingCostTableProps = {
  rarity1: SneakerRarity
  rarity2: SneakerRarity
}

const mints = [0, 1, 2, 3, 4, 5, 6]

export const calcMintCost = (
  realm: Realm,
  crypts: Cryptocurrency[],
  mintingRateCommon: MintingRate,
  mintingRateUncommon: MintingRate,
  mintingRateRare: MintingRate,
  r1: SneakerRarity,
  m1: number,
  r2: SneakerRarity,
  m2: number,
  floorPrice: number,
  mintingScrollPrices: MintingScrollPrices,
) => {
  const mintingRate = {
    [SneakerRarity.Common]: mintingRateCommon,
    [SneakerRarity.Uncommon]: mintingRateUncommon,
    [SneakerRarity.Rare]: mintingRateRare,
    [SneakerRarity.Epic]: mintingRateUncommon,
    [SneakerRarity.Legendary]: mintingRateUncommon,
  }
  const base1gst = mintingRate[r1].gst / 2
  const base2gst = mintingRate[r2].gst / 2
  const base1gmt = mintingRate[r1].gmt / 2
  const base2gmt = mintingRate[r2].gmt / 2

  const gstPriceUsd = crypts.find(c => c.id === RealmToken[realm].gst)?.usd || 0
  const base = {
    gst:
      base1gst +
      (base1gst / 2) * Math.max(0, m1 - 1) +
      base2gst +
      (base2gst / 2) * Math.max(0, m2 - 1),
    gmt:
      base1gmt +
      (base1gmt / 2) * Math.max(0, m1 - 1) +
      base2gmt +
      (base2gmt / 2) * Math.max(0, m2 - 1),
    scroll: mintingScrollPrices[r1] + mintingScrollPrices[r2],
  }
  const additionalGmt = calcAdditionalGmt(base, gstPriceUsd)
  const mintCost = {
    costGst: base.gst,
    costGmt: base.gmt + additionalGmt,
    costScroll: base.scroll,
  }

  const tokenData = RealmToken[realm]
  const gstPrice = crypts.find(v => v.id === tokenData.gst)?.jpy || 0
  const gmtPrice = crypts.find(v => v.id === tokenData.gmt)?.jpy || 0
  const mainPrice = crypts.find(v => v.id === tokenData.main)?.jpy || 0
  const mainPriceUsd = crypts.find(v => v.id === tokenData.main)?.usd || 0

  const ETC_FEE = 0.02
  const SELLING_FEE = 0.06
  const LEVELUP_TO_5_GST = 20
  const LEVELUP_TO_5_GMT = 10

  const mintPrice =
    (mintCost.costGst * gstPrice + (mintCost.costGmt + mintCost.costScroll) * gmtPrice) *
    (1 + ETC_FEE)
  const lvupPrice = gstPrice * LEVELUP_TO_5_GST + gmtPrice * LEVELUP_TO_5_GMT

  const lowestPrice = mintPrice / (1 - SELLING_FEE)
  const lowestLvupPrice = (mintPrice + lvupPrice) / (1 - SELLING_FEE)
  const lowest2LvupPrice = (mintPrice + 2 * lvupPrice) / (1 - SELLING_FEE)

  const lowestBenefit = floorPrice * mainPrice * (1 - SELLING_FEE) - mintPrice
  const lowestLvupBenefit = floorPrice * mainPrice * (1 - SELLING_FEE) - mintPrice - lvupPrice
  const lowest2LvupBenefit = floorPrice * mainPrice * (1 - SELLING_FEE) - mintPrice - 2 * lvupPrice

  return {
    ...mintCost,
    gstPrice,
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
  }
}

const Block: FC<{
  r1: SneakerRarity
  m1: number
  r2: SneakerRarity
  m2: number
}> = ({ r1, m1, r2, m2 }) => {
  const context = useContext(Context)
  const {
    crypts,
    realm,
    mintingRateCommon,
    mintingRateUncommon,
    mintingRateRare,
    mintingScrollPrices,
    floorPrices,
    unitType,
    setUnitType,
  } = context

  const floorPrice = floorPrices[realm] || 0
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

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
    mintingRateRare,
    r1,
    m1,
    r2,
    m2,
    floorPrice,
    mintingScrollPrices,
  )
  const tokenData = RealmToken[realm]

  const CostTable: FC<{
    label: ReactNode
    unitType: UnitType
    cost: number
    lowestPrice: number
    benefit: number
    className?: string
  }> = ({ label, unitType, cost, lowestPrice, benefit, className }) => {
    return (
      <div
        style={{
          ...(floorPrice < lowestPrice / mainPrice
            ? {
                backgroundColor: 'rgba(255, 0, 0, 0.1)',
              }
            : {}),
        }}
        className={className}
      >
        <Row>
          <Col xs={8}>{label}</Col>
          {unitType === 'realm' ? (
            <Col className='text-end'>
              <SmallDecimal value={(cost / mainPrice).toFixed(2)} />
              {tokenData.unit}
            </Col>
          ) : unitType === 'jpy' ? (
            <Col className='text-end'>
              ¥<SmallDecimal value={cost.toFixed(2)} />
            </Col>
          ) : (
            <Col className='text-end'>
              $<SmallDecimal value={((cost / mainPrice) * mainPriceUsd).toFixed(2)} />
            </Col>
          )}
        </Row>
        <Row className='fw-bold'>
          <Col xs={8}>
            <Trans>selling_price_include_fee</Trans>
          </Col>
          {unitType === 'realm' ? (
            <Col className='text-end'>
              <SmallDecimal value={(lowestPrice / mainPrice).toFixed(2)} />
              {tokenData.unit}
            </Col>
          ) : unitType === 'jpy' ? (
            <Col className='text-end'>
              ¥<SmallDecimal value={lowestPrice.toFixed(2)} />
            </Col>
          ) : (
            <Col className='text-end'>
              $<SmallDecimal value={((lowestPrice / mainPrice) * mainPriceUsd).toFixed(2)} />
            </Col>
          )}
        </Row>
        <Row>
          <Col xs={8}>
            <small>
              <Trans>profit_at_floor_price</Trans>
            </small>
          </Col>
          {unitType === 'realm' ? (
            <Col className='text-end'>
              <small className={`${benefit < 0 ? 'text-danger' : ''}`}>
                <SmallDecimal value={(benefit / mainPrice).toFixed(2)} />
                {tokenData.unit}
              </small>
            </Col>
          ) : unitType === 'jpy' ? (
            <Col className='text-end'>
              <small className={`${benefit < 0 ? 'text-danger' : ''}`}>
                ¥<SmallDecimal value={benefit.toFixed(2)} />
              </small>
            </Col>
          ) : (
            <Col className='text-end'>
              <small className={`${benefit < 0 ? 'text-danger' : ''}`}>
                $<SmallDecimal value={((benefit / mainPrice) * mainPriceUsd).toFixed(2)} />
              </small>
            </Col>
          )}
        </Row>
      </div>
    )
  }

  return (
    <>
      <div
        style={{
          ...(lowest2LvupBenefit > 0
            ? {}
            : lowestLvupBenefit > 0
            ? {
                backgroundColor: 'rgba(255, 0, 0, 0.1)',
              }
            : lowestBenefit > 0
            ? {
                backgroundColor: 'rgba(255, 0, 0, 0.2)',
              }
            : {
                backgroundColor: 'rgba(255, 0, 0, 0.3)',
              }),
        }}
      >
        <Button
          variant='link'
          onClick={handleShow}
          className='w-100 text-start d-block p-0 text-body text-decoration-none overflow-hidden'
          style={{ maxWidth: '12vw' }}
        >
          <small className='text-nowrap'>
            <img
              className='align-middle'
              src={`/stepn-utils/${RealmToken[realm].gst}.png`}
              alt='GST'
              width='10'
              height='10'
            />
            <span className='align-middle'>{costGst}</span>
          </small>
          <br />
          <small className='text-nowrap'>
            <img
              className='align-middle'
              src={`/stepn-utils/${RealmToken[realm].gmt}.png`}
              alt='GMT'
              width='10'
              height='10'
            />
            <span className='align-middle'>{costGmt}</span>
          </small>
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{ backgroundColor: RealmColor[realm] }} closeButton>
          <Modal.Title>
            <img
              className='me-2 align-middle'
              src={`/stepn-utils/${RealmToken[realm].main}.png`}
              alt={realm}
              width='20'
              height='20'
            />
            <span className='align-middle'>
              <span className='rounded p-1' style={{ backgroundColor: SneakerRarityColor[r1] }}>
                {r1} {m1}
              </span>{' '}
              x{' '}
              <span className='rounded p-1' style={{ backgroundColor: SneakerRarityColor[r2] }}>
                {r2} {m2}
              </span>
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='ps-0 pe-0'>
          <Row className='pb-3 ms-3 me-3 fw-bold text-nowrap'>
            <Col xs={7}>
              <img
                className='align-middle'
                src={`/stepn-utils/${RealmToken[realm].gst}.png`}
                alt='GST'
                width='15'
                height='15'
              />
              <span className='me-2 align-middle'>{costGst}GST</span>
              <img
                className='align-middle'
                src={`/stepn-utils/${RealmToken[realm].gmt}.png`}
                alt='GMT'
                width='15'
                height='15'
              />
              <span className='align-middle'>{costGmt}GMT</span>
            </Col>
            <Col xs={3} className='text-end'>
              <UnitSelector realm={realm} value={unitType} onChange={setUnitType} />
            </Col>
          </Row>
          <CostTable
            className='p-3 border-bottom border-top'
            label={<Trans>minting_cost</Trans>}
            unitType={unitType}
            cost={mintPrice}
            lowestPrice={lowestPrice}
            benefit={lowestBenefit}
          />
          <CostTable
            className='p-3 border-bottom'
            label={<Trans>selling_price_include_1</Trans>}
            unitType={unitType}
            cost={mintPrice + lvupPrice}
            lowestPrice={lowestLvupPrice}
            benefit={lowestLvupBenefit}
          />
          <CostTable
            className='p-3 border-bottom'
            label={<Trans>selling_price_include_2</Trans>}
            unitType={unitType}
            cost={mintPrice + 2 * lvupPrice}
            lowestPrice={lowest2LvupPrice}
            benefit={lowest2LvupBenefit}
          />
          <Row className='p-3 pb-0'>
            <Col xs={8}>
              <small>
                <Trans>levelup_cost</Trans>(<Trans>levelup_cost_1</Trans>)
              </small>
            </Col>
            {unitType === 'realm' ? (
              <Col className='text-end'>
                <small>
                  <SmallDecimal value={(lvupPrice / mainPrice).toFixed(2)} />
                  {tokenData.unit}
                </small>
              </Col>
            ) : unitType === 'jpy' ? (
              <Col className='text-end'>
                <small>
                  ¥<SmallDecimal value={lvupPrice.toFixed(2)} />
                </small>
              </Col>
            ) : (
              <Col className='text-end'>
                <small>
                  $<SmallDecimal value={((lvupPrice / mainPrice) * mainPriceUsd).toFixed(2)} />
                </small>
              </Col>
            )}
          </Row>
        </Modal.Body>
      </Modal>
    </>
  )
}

export const MintingCostTable: FC<MintingCostTableProps> = ({ rarity1, rarity2 }) => {
  return (
    <>
      <div className='text-start'>
        <small>
          <Trans>tap_to_show_details</Trans>
        </small>
      </div>
      <Table bordered size='sm'>
        <tbody>
          <tr>
            <td></td>
            {mints.map(m1 => (
              <td
                key={m1}
                className='pt-0 pb-0'
                style={{ backgroundColor: SneakerRarityColor[rarity1] }}
              >
                <small>{m1}</small>
              </td>
            ))}
          </tr>
          {mints.map(m2 => (
            <tr key={m2}>
              <td className='pe-0' style={{ backgroundColor: SneakerRarityColor[rarity2] }}>
                <small>{m2}</small>
              </td>
              {mints.map(m1 => (
                <td key={m1} className='p-0'>
                  <Block r1={rarity1} m1={m1} r2={rarity2} m2={m2} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
