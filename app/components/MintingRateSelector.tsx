import { Cryptocurrency } from 'app/models/Cryptcurrency'
import { MintingRate } from 'app/models/MintingRate'
import { Realm, RealmToken } from 'app/models/Realm'
import React, { FC, useEffect } from 'react'
import { ButtonGroup, Col, Dropdown, DropdownButton, Row } from 'react-bootstrap'

const MintingRateList: MintingRate[] = [
  {
    gst: 40,
    gmt: 160,
  },
  {
    gst: 80,
    gmt: 120,
  },
  {
    gst: 100,
    gmt: 100,
  },
  {
    gst: 120,
    gmt: 80,
  },
  {
    gst: 160,
    gmt: 40,
  },
  {
    gst: 200,
    gmt: 0,
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
  const gst = crypts.find(v => v.id === RealmToken[realm].gst)
  const gmt = crypts.find(v => v.id === RealmToken[realm].gmt)

  useEffect(() => {
    const gstPrice = crypts.find(v => v.id === RealmToken[realm].gst)?.usd || 5
    let mintingRate: MintingRate = { gst: 100, gmt: 100 }
    if (gstPrice < 2) {
      mintingRate = { gst: 200, gmt: 0 }
    } else if (gstPrice >= 2 && gstPrice < 3) {
      mintingRate = { gst: 160, gmt: 40 }
    } else if (gstPrice >= 3 && gstPrice < 4) {
      mintingRate = { gst: 120, gmt: 80 }
    } else if (gstPrice >= 4 && gstPrice < 8) {
      mintingRate = { gst: 100, gmt: 100 }
    } else if (gstPrice >= 8 && gstPrice < 10) {
      mintingRate = { gst: 80, gmt: 120 }
    } else if (gstPrice >= 10) {
      mintingRate = { gst: 40, gmt: 160 }
    }
    onChange(mintingRate)
  }, [crypts, onChange])

  return (
    <DropdownButton
      as={ButtonGroup}
      className={className}
      variant='outline-secondary'
      size='sm'
      title={
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
      }
    >
      {MintingRateList.flatMap((mr, i) => {
        const ret = (
          <Dropdown.Item key={`${mr.gst}-${mr.gmt}`} onClick={() => onChange(mr)}>
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
    </DropdownButton>
  )
}
