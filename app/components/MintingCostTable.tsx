import { Cryptocurrency } from 'app/models/Cryptcurrency'
import { MintingRate } from 'app/models/MintingRate'
import { Realm, RealmColor, RealmToken } from 'app/models/Realm'
import { ShoeRarerity, ShoeRarerityColor } from 'app/models/ShoeRarerity'
import React, { FC, useState } from 'react'
import { Button, Col, Modal, Row, Table } from 'react-bootstrap'

type MintingCostTableProps = {
  mintingRate: MintingRate
  rarerity1: ShoeRarerity
  rarerity2: ShoeRarerity
  realm: Realm
  crypts: Cryptocurrency[]
  floorPrice: number
}

const mints = [0, 1, 2, 3, 4, 5, 6]

const calcRarerityForGst = (rarerity: ShoeRarerity) => {
  if (rarerity === ShoeRarerity.Uncommon) {
    return 1000
  }
  return 0
}
const calcRarerityForGmt = (rarerity: ShoeRarerity) => {
  if (rarerity === ShoeRarerity.Uncommon) {
    return 200
  }
  return 0
}

const calc = (
  mintingRate: MintingRate,
  r1: ShoeRarerity,
  m1: number,
  r2: ShoeRarerity,
  m2: number,
) => {
  const base1gst = (mintingRate.gst + calcRarerityForGst(r1)) / 2
  const base2gst = (mintingRate.gst + calcRarerityForGst(r2)) / 2
  const base1gmt = (mintingRate.gmt + calcRarerityForGmt(r1)) / 2
  const base2gmt = (mintingRate.gmt + calcRarerityForGmt(r2)) / 2
  return {
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
  }
}

const Block: FC<{
  realm: Realm
  crypts: Cryptocurrency[]
  mintingRate: MintingRate
  r1: ShoeRarerity
  m1: number
  r2: ShoeRarerity
  m2: number
  floorPrice: number
}> = ({ realm, crypts, mintingRate, r1, m1, r2, m2, floorPrice }) => {
  if (!realm) {
    throw new Promise(r => {
      r('realm not found')
    })
  }
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const ETC_FEE = 0.02
  const SELLING_FEE = 0.06
  const LEVELUP_TO_5_GST = 20
  const LEVELUP_TO_5_GMT = 10

  const data = calc(mintingRate, r1, m1, r2, m2)
  const tokenData = RealmToken[realm]
  const gstPrice = crypts.find(v => v.id === tokenData.gst)?.jpy || 0
  const gmtPrice = crypts.find(v => v.id === tokenData.gmt)?.jpy || 0
  const mainPrice = crypts.find(v => v.id === tokenData.main)?.jpy || 0
  const mintPrice = (data.gst * gstPrice + data.gmt * gmtPrice) * (1 + ETC_FEE)
  const lvupPrice = gstPrice * LEVELUP_TO_5_GST + gmtPrice * LEVELUP_TO_5_GMT

  const lowestPrice = mintPrice / (1 - SELLING_FEE)
  const lowestLvupPrice = (mintPrice + lvupPrice) / (1 - SELLING_FEE)
  const lowest2LvupPrice = (mintPrice + 2 * lvupPrice) / (1 - SELLING_FEE)

  const CostTable: FC<{
    label: string
    cost: number
    className?: string
  }> = ({ label, cost, className }) => {
    const lowestPrice = cost / (1 - SELLING_FEE)
    const benefit = floorPrice * mainPrice - lowestPrice
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
          <Col xs={5}>{label}</Col>
          <Col>
            {(cost / mainPrice).toFixed(2)}
            {tokenData.unit}
          </Col>
          <Col>¥{cost.toFixed(2)}</Col>
        </Row>
        <Row className='fw-bold'>
          <Col xs={5}>最低販売価格</Col>
          <Col>
            {(lowestPrice / mainPrice).toFixed(2)}
            {tokenData.unit}
          </Col>
          <Col>¥{lowestPrice.toFixed(2)}</Col>
        </Row>
        <Row>
          <Col xs={5}>
            <small>利益</small>
          </Col>
          <Col>
            <small className={`${benefit < 0 ? 'text-danger' : ''}`}>
              {(benefit / mainPrice).toFixed(2)}
              {tokenData.unit}
            </small>
          </Col>
          <Col>
            <small className={`${benefit < 0 ? 'text-danger' : ''}`}>¥{benefit.toFixed(2)}</small>
          </Col>
        </Row>
      </div>
    )
  }

  return (
    <>
      <div
        style={{
          ...(floorPrice < lowestPrice / mainPrice
            ? {
                backgroundColor: 'rgba(255, 0, 0, 0.3)',
              }
            : floorPrice < lowestLvupPrice / mainPrice
            ? {
                backgroundColor: 'rgba(255, 0, 0, 0.2)',
              }
            : floorPrice < lowest2LvupPrice / mainPrice
            ? {
                backgroundColor: 'rgba(255, 0, 0, 0.1)',
              }
            : {}),
        }}
      >
        <Button
          variant='link'
          onClick={handleShow}
          className='text-start d-block p-0 text-body text-decoration-none'
        >
          <small className='text-nowrap'>
            <img
              className='align-middle'
              src={`/stepn-utils/${RealmToken[realm].gst}.png`}
              alt='GST'
              width='10'
              height='10'
            />
            <span className='align-middle'>{data.gst}</span>
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
            <span className='align-middle'>{data.gmt}</span>
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
              {r1} {m1} x {r2} {m2}
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='ps-0 pe-0'>
          <div className='pb-3 ms-3 me-3 fw-bold'>
            <img
              className='align-middle'
              src={`/stepn-utils/${RealmToken[realm].gst}.png`}
              alt='GST'
              width='15'
              height='15'
            />
            <span className='me-2 align-middle'>{data.gst}GST</span>
            <img
              className='align-middle'
              src={`/stepn-utils/${RealmToken[realm].gmt}.png`}
              alt='GMT'
              width='15'
              height='15'
            />
            <span className='align-middle'>{data.gmt}GMT</span>
          </div>
          <CostTable className='p-3 border-bottom border-top' label='ミント費用' cost={mintPrice} />
          <CostTable
            className='p-3 border-bottom'
            label='1足分Lvup費用込'
            cost={mintPrice + lvupPrice}
          />
          <CostTable
            className='p-3 border-bottom'
            label='2足分Lvup費用込'
            cost={mintPrice + 2 * lvupPrice}
          />
          <div className='ms-3 me-3 mt-3'>
            <small>
              1足分Lvup費用
              <br />
              <Row>
                <Col>
                  {(lvupPrice / mainPrice).toFixed(2)}
                  {tokenData.unit}
                </Col>
                <Col>¥{lvupPrice.toFixed(2)}</Col>
              </Row>
            </small>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export const MintingCostTable: FC<MintingCostTableProps> = ({
  mintingRate,
  rarerity1,
  rarerity2,
  realm,
  crypts,
  floorPrice,
}) => {
  return (
    <>
      <div className='text-start'>
        <small>費用表タップで詳細を確認</small>
      </div>
      <Table bordered size='sm'>
        <tbody>
          <tr>
            <td></td>
            {mints.map(m1 => (
              <td key={m1} style={{ backgroundColor: ShoeRarerityColor[rarerity1] }}>
                {m1}
              </td>
            ))}
          </tr>
          {mints.map(m2 => (
            <tr key={m2}>
              <td style={{ backgroundColor: ShoeRarerityColor[rarerity2] }}>{m2}</td>
              {mints.map(m1 => (
                <td key={m1} className='p-0'>
                  <Block
                    realm={realm}
                    crypts={crypts}
                    mintingRate={mintingRate}
                    r1={rarerity1}
                    m1={m1}
                    r2={rarerity2}
                    m2={m2}
                    floorPrice={floorPrice}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
