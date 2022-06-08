import { Cryptocurrency } from 'app/models/Cryptcurrency'
import { MintingRate } from 'app/models/MintingRate'
import { Realm, RealmToken } from 'app/models/Realm'
import React, { FC, useEffect, useState } from 'react'
import { ButtonGroup, Col, Dropdown, DropdownButton, Form, Row } from 'react-bootstrap'

type MintingRateSelectorProps = {
  realm: Realm
  crypts: Cryptocurrency[]
  mintingRateList: MintingRate[]
  value: MintingRate
  onChange(rate: MintingRate): void
  className?: string
}

export const MintingRateSelector: FC<MintingRateSelectorProps> = ({
  realm,
  crypts,
  mintingRateList,
  value,
  onChange,
  className,
}) => {
  const [baseGst, setBaseGst] = useState(String(value.gst))
  const [baseGmt, setBaseGmt] = useState(String(value.gmt))

  const [isFreeInput, setIsFreeInput] = useState(false)

  const gst = crypts.find(v => v.id === RealmToken[realm].gst)
  const gmt = crypts.find(v => v.id === RealmToken[realm].gmt)

  useEffect(() => {
    onChange({
      gst: Number(baseGst),
      gmt: Number(baseGmt),
    })
  }, [baseGst, baseGmt])

  useEffect(() => {
    setBaseGst(String(value.gst))
    setBaseGmt(String(value.gmt))
  }, [value])

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
                setBaseGst(e.target.value)
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
                setBaseGmt(e.target.value)
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
      {mintingRateList.flatMap((mr, i) => {
        const ret = (
          <Dropdown.Item
            key={`${mr.gst}-${mr.gmt}`}
            onClick={() => {
              onChange(mr)
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
