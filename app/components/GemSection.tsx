import { Context, UnitType } from 'app/layouts/Layout'
import { Gem, GemUpgradeParams } from 'app/models/Gem'
import { GemType } from 'app/models/GemType'
import { RealmToken } from 'app/models/Realm'
import { FC, useContext, useEffect, useState } from 'react'
import { Col, Dropdown, FloatingLabel, Form, Row, Table } from 'react-bootstrap'
import { Trans } from 'react-i18next'
import { LabeledForm } from './LabeledForm'
import { RealmSelector } from './RealmSelector'
import { SmallDecimal } from './SmallDecimal'
import { UnitSelector } from './UnitSelector'

export const GemSection: FC = () => {
  const context = useContext(Context)
  const { crypts, realm, setRealm, unitType, setUnitType } = context

  const [gemPriceString, setGemPriceString] = useState('')
  const [gemFloorPriceString, setGemFloorPriceString] = useState('')

  const [gem, setGem] = useState<Gem>({
    level: 1,
    type: GemType.Efficiency,
  })

  const main = crypts.find(v => v.id === RealmToken[realm].main)
  const gst = crypts.find(v => v.id === RealmToken[realm].gst)
  const gmt = crypts.find(v => v.id === RealmToken[realm].gmt)

  const mainPrice = main?.jpy || 0
  const mainPriceUsd = main?.usd || 0
  const gstPrice = gst?.jpy || 0
  const gmtPrice = gmt?.jpy || 0

  const unit = unitType === 'realm' ? RealmToken[realm].unit : unitType === 'jpy' ? 'JPY' : 'USD'

  const convertUnit = (unitType: UnitType, value: number) => {
    return unitType === 'realm'
      ? value / mainPrice
      : unitType === 'jpy'
      ? value
      : (value / mainPrice) * mainPriceUsd
  }

  function calcGemUpgradeCost(gem: Gem, count: number) {
    const params = GemUpgradeParams[gem.level]
    const totalSuccessRate = 1 - (1 - params.successRate) ** count

    return {
      costGst: params.costGst,
      costGmt: params.costGmt,
      successRate: params.successRate,
      totalSuccessRate,
      totalCostGst: params.costGst * count,
      totalCostGmt: params.costGmt * count,
      numberOfGem: params.numberOfGems,
    }
  }

  return (
    <Row>
      <Col xs={12} md={6}>
        <Row className='mb-3 mt-3'>
          <Col className='text-center'>
            <h5>
              <Trans>gem_cost_emulator</Trans>
            </h5>
          </Col>
        </Row>
      </Col>
      <Col xs={12} md={6}>
        <Row className='mb-2'>
          <RealmSelector value={realm} onChange={setRealm} />
        </Row>
        <Row className='mb-2'>
          <Col xs={6}>
            <LabeledForm label={<Trans>gem_level</Trans>}>
              <Dropdown>
                <Dropdown.Toggle variant='light' className='w-100' size='sm'>
                  <Trans>level</Trans> {gem.level}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {Object.values(GemUpgradeParams).map(params => (
                    <Dropdown.Item
                      key={params.level}
                      onClick={() =>
                        setGem(old => ({
                          ...old,
                          level: params.level,
                        }))
                      }
                    >
                      {params.level}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </LabeledForm>
          </Col>
        </Row>
        <Row>
          <Col>
            <FloatingLabel
              label={
                <>
                  <Trans>level</Trans>
                  {gem.level} <Trans>gem_price</Trans>
                  {`(${unit})`}
                </>
              }
              className='mb-2'
            >
              <Form.Control
                value={gemPriceString}
                onChange={e => setGemPriceString(e.target.value)}
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col>
            <FloatingLabel
              label={
                <>
                  <Trans>level</Trans>
                  {gem.level + 1} <Trans>gem_floor_price</Trans>
                  {`(${unit})`}
                </>
              }
              className='mb-2'
            >
              <Form.Control
                value={gemFloorPriceString}
                onChange={e => setGemFloorPriceString(e.target.value)}
              />
            </FloatingLabel>
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
              <Form.Control readOnly value={GemUpgradeParams[gem.level].costGst} />
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
              <Form.Control readOnly value={GemUpgradeParams[gem.level].costGmt} />
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col xs={7}></Col>
          <Col xs={5}>
            <UnitSelector realm={realm} value={unitType} onChange={setUnitType} />
          </Col>
        </Row>
        <Table striped>
          <thead>
            <tr>
              <th>
                <Trans>count</Trans>
              </th>
              <th>
                <Trans>success_rate</Trans>
              </th>
              <th>
                <Trans>cost</Trans>
              </th>
              <th>
                <Trans>profit</Trans>
              </th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(count => {
              const data = calcGemUpgradeCost(gem, count)
              return (
                <tr key={count}>
                  <td>{count}</td>
                  <td>
                    <SmallDecimal
                      value={(Math.floor(data.totalSuccessRate * 100 * 100000) / 100000).toFixed(5)}
                    />
                    %
                  </td>
                  <td>
                    <SmallDecimal
                      value={convertUnit(
                        unitType,
                        Number(gemPriceString) * mainPrice * data.numberOfGem * count +
                          data.totalCostGst * gstPrice +
                          data.totalCostGmt * gmtPrice,
                      ).toFixed(3)}
                    />
                  </td>
                  <td>
                    <SmallDecimal
                      value={convertUnit(
                        unitType,
                        Number(gemFloorPriceString) * mainPrice * 0.94 -
                          (Number(gemPriceString) * mainPrice * data.numberOfGem * count +
                            data.totalCostGst * gstPrice +
                            data.totalCostGmt * gmtPrice),
                      ).toFixed(3)}
                    />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Col>
    </Row>
  )
}
