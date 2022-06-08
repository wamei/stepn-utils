import { Cryptocurrency } from 'app/models/Cryptcurrency'
import { MintingRate } from 'app/models/MintingRate'
import { Realm, RealmToken } from 'app/models/Realm'
import { useRouter } from 'blitz'
import React, { FC, useEffect, useState } from 'react'
import { ButtonGroup, Col, Dropdown, DropdownButton, Form, Row } from 'react-bootstrap'
import QueryString from 'query-string'
import { replaceUrl } from 'app/utils'

export const MintingRateList: MintingRate[] = [
  {
    gst: 360,
    gmt: 40,
  },
]

type MintingRateSelectorProps = {
  realm: Realm
  crypts: Cryptocurrency[]
  value: MintingRate
  onChange(rate: MintingRate): void
  className?: string
}

export const MintingRateSelector: FC<MintingRateSelectorProps> = ({
  realm,
  crypts,
  value,
  onChange,
  className,
}) => {
  const router = useRouter()
  const [baseGst, setBaseGst] = useState(MintingRateList[0]?.gst || 0)
  const [baseGmt, setBaseGmt] = useState(MintingRateList[0]?.gmt || 0)

  const [isFreeInput, setIsFreeInput] = useState(false)

  const gst = crypts.find(v => v.id === RealmToken[realm].gst)
  const gmt = crypts.find(v => v.id === RealmToken[realm].gmt)

  useEffect(() => {
    /* const gstPrice = crypts.find(v => v.id === RealmToken[realm].gst)?.usd || 5
     * let mintingRate: MintingRate = { gst: 100, gmt: 100 }
     * if (gstPrice < 2) {
     *   mintingRate = { gst: 200, gmt: 0 }
     * } else if (gstPrice >= 2 && gstPrice < 3) {
     *   mintingRate = { gst: 160, gmt: 40 }
     * } else if (gstPrice >= 3 && gstPrice < 4) {
     *   mintingRate = { gst: 120, gmt: 80 }
     * } else if (gstPrice >= 4 && gstPrice < 8) {
     *   mintingRate = { gst: 100, gmt: 100 }
     * } else if (gstPrice >= 8 && gstPrice < 10) {
     *   mintingRate = { gst: 80, gmt: 120 }
     * } else if (gstPrice >= 10) {
     *   mintingRate = { gst: 40, gmt: 160 }
     * }
     * onChange(mintingRate) */
  }, [crypts, onChange])

  useEffect(() => {
    const query = QueryString.parse(location.search)
    replaceUrl({
      ...query,
      baseGst,
      baseGmt,
    })
  }, [replaceUrl, baseGst, baseGmt])

  useEffect(() => {
    onChange({
      gst: baseGst,
      gmt: baseGmt,
    })
  }, [baseGst, baseGmt])

  useEffect(() => {
    if (router.query.baseGst) {
      setBaseGst(Number(router.query.baseGst))
    }
    if (router.query.baseGmt) {
      setBaseGmt(Number(router.query.baseGmt))
    }
  }, [router.query])

  return (
    <DropdownButton
      as={ButtonGroup}
      className={className}
      variant='outline-secondary'
      size='sm'
      title={
        isFreeInput ? (
          <>
            <img
              className='me-1 align-middle'
              src={`/stepn-utils/${RealmToken[realm].gst}.png`}
              alt={gst?.name}
              width='20'
              height='20'
            />
            <Form.Control
              className='me-2 align-middle d-inline-block p-0'
              style={{ width: '50px', height: '20px', minHeight: '20px' }}
              size='sm'
              type='number'
              value={baseGst}
              onClick={e => e.stopPropagation()}
              onChange={e => {
                setBaseGst(Number(e.target.value))
              }}
            />
            <img
              className='me-1 align-middle'
              src={`/stepn-utils/${RealmToken[realm].gmt}.png`}
              alt={gmt?.name}
              width='20'
              height='20'
            />
            <Form.Control
              className='align-middle d-inline-block p-0'
              style={{ width: '50px', height: '20px', minHeight: '20px' }}
              size='sm'
              type='number'
              value={baseGmt}
              onClick={e => e.stopPropagation()}
              onChange={e => {
                setBaseGmt(Number(e.target.value))
              }}
            />
          </>
        ) : (
          <>
            <img
              className='me-1 align-middle'
              src={`/stepn-utils/${RealmToken[realm].gst}.png`}
              alt={gst?.name}
              width='20'
              height='20'
            />
            <span className='me-2 align-middle'>{value.gst}</span>
            <img
              className='me-1 align-middle'
              src={`/stepn-utils/${RealmToken[realm].gmt}.png`}
              alt={gmt?.name}
              width='20'
              height='20'
            />
            <span className='align-middle'>{value.gmt}</span>
          </>
        )
      }
    >
      {MintingRateList.flatMap((mr, i) => {
        const ret = (
          <Dropdown.Item
            key={`${mr.gst}-${mr.gmt}`}
            onClick={() => {
              onChange(mr)
              setBaseGst(mr.gst)
              setBaseGmt(mr.gmt)
              setIsFreeInput(false)
            }}
          >
            <Row>
              <Col xs={6}>
                <img
                  className='me-1 align-middle'
                  src={`/stepn-utils/${RealmToken[realm].gst}.png`}
                  alt={gst?.name}
                  width='15'
                  height='15'
                />
                <span className='align-middle'>
                  <small>{mr.gst}</small>
                </span>
              </Col>
              <Col xs={6}>
                <img
                  className='me-1 align-middle'
                  src={`/stepn-utils/${RealmToken[realm].gmt}.png`}
                  alt={gmt?.name}
                  width='15'
                  height='15'
                />
                <span className='align-middle'>
                  <small>{mr.gmt}</small>
                </span>
              </Col>
            </Row>
          </Dropdown.Item>
        )
        if (i === 0) {
          return ret
        }
        return [<Dropdown.Divider key={`divine-${i}`} />, ret]
      })}
      <Dropdown.Divider />
      <Dropdown.Item
        onClick={() => {
          setIsFreeInput(true)
        }}
      >
        <small>自由入力</small>
        <Row>
          <Col xs={6}>
            <img
              className='me-1 align-middle'
              src={`/stepn-utils/${RealmToken[realm].gst}.png`}
              alt={gst?.name}
              width='15'
              height='15'
            />
            <span className='align-middle'>
              <small>{baseGst}</small>
            </span>
          </Col>
          <Col xs={6}>
            <img
              className='me-1 align-middle'
              src={`/stepn-utils/${RealmToken[realm].gmt}.png`}
              alt={gmt?.name}
              width='15'
              height='15'
            />
            <span className='align-middle'>
              <small>{baseGmt}</small>
            </span>
          </Col>
        </Row>
      </Dropdown.Item>
    </DropdownButton>
  )
}
