import { Cryptocurrency } from "app/models/Cryptcurrency"
import { MintingRate } from "app/models/MintingRate"
import { Realm, RealmColor, RealmToken } from "app/models/Realm"
import { ShoeRarerity, ShoeRarerityColor } from "app/models/ShoeRarerity"
import React, { FC, useState } from "react"
import { Col, Modal, Row, Table } from "react-bootstrap"
import Image from "next/image"

type MintingCostTableProps = {
  mintingRate: MintingRate
  rarerity1: ShoeRarerity
  rarerity2: ShoeRarerity
  realm: Realm
  crypts: Cryptocurrency[]
  floorPrice: number
}

const mints = [0, 1, 2, 3, 4, 5, 6]

const calcMag = (rarerity: ShoeRarerity) => {
  if (rarerity === ShoeRarerity.Uncommon) {
    return 4
  }
  return 1
}

const calc = (
  mintingRate: MintingRate,
  r1: ShoeRarerity,
  m1: number,
  r2: ShoeRarerity,
  m2: number
) => {
  const base1gst = (mintingRate.gst / 2) * calcMag(r1)
  const base2gst = (mintingRate.gst / 2) * calcMag(r2)
  const base1gmt = (mintingRate.gmt / 2) * calcMag(r1)
  const base2gmt = (mintingRate.gmt / 2) * calcMag(r2)
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
    throw new Promise(() => {})
  }
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const data = calc(mintingRate, r1, m1, r2, m2)
  const tokenData = RealmToken[realm]
  const gstPrice = crypts.find((v) => v.id === tokenData.gst)?.jpy || 0
  const gmtPrice = crypts.find((v) => v.id === tokenData.gmt)?.jpy || 0
  const mainPrice = crypts.find((v) => v.id === tokenData.main)?.jpy || 0
  const mintPrice = (data.gst * gstPrice + data.gmt * gmtPrice) * 1.02
  const lvupPrice = gstPrice * 20 + gmtPrice * 10

  const lowestPrice = mintPrice / 0.94
  const lowestLvupPrice = (mintPrice + lvupPrice) / 0.94

  return (
    <>
      <div
        onClick={handleShow}
        className="p-1"
        style={{
          ...(floorPrice < lowestLvupPrice / mainPrice
            ? {
                backgroundColor: "rgba(255, 0, 0, 0.3)",
              }
            : {}),
        }}
      >
        <small className="text-nowrap">
          <Image
            src={`/stepn-utils/${RealmToken[realm].gst}.png`}
            alt="GST"
            width="10"
            height="10"
          />
          {data.gst}
        </small>
        <br />
        <small className="text-nowrap">
          <Image
            src={`/stepn-utils/${RealmToken[realm].gmt}.png`}
            alt="GMT"
            width="10"
            height="10"
          />
          {data.gmt}
        </small>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{ backgroundColor: RealmColor[realm] }} closeButton>
          <Modal.Title>
            <span className="me-2">
              <Image
                src={`/stepn-utils/${RealmToken[realm].main}.png`}
                alt={realm}
                width="20"
                height="20"
                objectFit="contain"
              />
            </span>
            {r1} {m1} x {r2} {m2}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <strong>
              <span className="me-2">
                <Image
                  src={`/stepn-utils/${RealmToken[realm].gst}.png`}
                  alt="GST"
                  width="15"
                  height="15"
                />
                {data.gst}GST
              </span>
              <Image
                src={`/stepn-utils/${RealmToken[realm].gmt}.png`}
                alt="GMT"
                width="15"
                height="15"
              />
              {data.gmt}GMT
            </strong>
          </div>
          <hr />
          <div>
            ミント費用
            <br />
            <Row>
              <Col>
                {(mintPrice / mainPrice).toFixed(2)}
                {tokenData.unit}
              </Col>
              <Col>¥{mintPrice.toFixed(2)}</Col>
            </Row>
            <strong>
              最低販売価格
              <br />
              <Row>
                <Col>
                  {(lowestPrice / mainPrice).toFixed(2)}
                  {tokenData.unit}
                </Col>
                <Col>¥{lowestPrice.toFixed(2)}</Col>
              </Row>
            </strong>
            <small>
              利益
              <br />
              <Row>
                <Col>
                  {(floorPrice - lowestPrice / mainPrice).toFixed(2)}
                  {tokenData.unit}
                </Col>
                <Col>¥{(floorPrice * mainPrice - lowestPrice).toFixed(2)}</Col>
              </Row>
            </small>
          </div>
          <hr />
          <div>
            Lvup込費用
            <br />
            <Row>
              <Col>
                {((mintPrice + lvupPrice) / mainPrice).toFixed(2)}
                {tokenData.unit}
              </Col>
              <Col>¥{(mintPrice + lvupPrice).toFixed(2)}</Col>
            </Row>
            <strong>
              最低販売価格
              <br />
              <Row>
                <Col>
                  {(lowestLvupPrice / mainPrice).toFixed(2)}
                  {tokenData.unit}
                </Col>
                <Col>¥{lowestLvupPrice.toFixed(2)}</Col>
              </Row>
            </strong>
            <small>
              利益
              <br />
              <Row>
                <Col>
                  {(floorPrice - lowestLvupPrice / mainPrice).toFixed(2)}
                  {tokenData.unit}
                </Col>
                <Col>¥{(floorPrice * mainPrice - lowestLvupPrice).toFixed(2)}</Col>
              </Row>
            </small>
          </div>
          <hr />
          <div>
            <small>
              Lvup費用
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
    <Table striped bordered hover size="sm">
      <tbody>
        <tr>
          <td></td>
          {mints.map((m1) => (
            <td key={m1} style={{ backgroundColor: ShoeRarerityColor[rarerity1] }}>
              {m1}
            </td>
          ))}
        </tr>
        {mints.map((m2) => (
          <tr key={m2}>
            <td style={{ backgroundColor: ShoeRarerityColor[rarerity2] }}>{m2}</td>
            {mints.map((m1) => (
              <td key={m1} className="p-0">
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
  )
}
