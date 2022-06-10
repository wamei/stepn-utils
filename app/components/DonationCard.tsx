import { RealmToken } from 'app/models/Realm'
import Link from 'next/link'
import React, { FC } from 'react'
import { Card, Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import { Trans } from 'react-i18next'

type DonationCardProps = {
  className?: string
}

const Solana_Address = 'AH1kGCnpjznAD7GBa2pBZQBPSMrNV4DgMK7QLsFdnN7X'
const BSC_Address = '0xc99e9d91d16a8d8acb6028855601a840f31fe80a'

export const DonationCard: FC<DonationCardProps> = ({ className }) => {
  return (
    <Card className={className}>
      <Card.Body>
        <div className='mb-2'>
          <Row>
            <Col>
              <Trans>support_project</Trans>
            </Col>
            <Col className='text-end'>
              <Link href='https://twitter.com/Wam_Ei'>
                <small>@Wam_Ei</small>
              </Link>
            </Col>
          </Row>
        </div>
        <FloatingLabel
          onClick={() => {
            const text = document.querySelector('#donation_sol_address') as HTMLInputElement
            text.select()
            document.execCommand('copy')
          }}
          label={
            <>
              <img
                className='me-1 align-middle'
                src={`/stepn-utils/${RealmToken['Solana'].main}.png`}
                alt={`${RealmToken['Solana'].main}`}
                width='20'
                height='20'
              />
              Solana
            </>
          }
          className='mb-3'
        >
          <Form.Control
            id='donation_sol_address'
            type='text'
            value={Solana_Address}
            onChange={e => e}
          />
        </FloatingLabel>
        <FloatingLabel
          onClick={() => {
            const text = document.querySelector('#donation_bsc_address') as HTMLInputElement
            text.select()
            document.execCommand('copy')
          }}
          label={
            <>
              <img
                className='me-1 align-middle'
                src={`/stepn-utils/${RealmToken['BSC'].main}.png`}
                alt={`${RealmToken['BSC'].main}`}
                width='20'
                height='20'
              />
              BNB Smart Chain (BEP20)
            </>
          }
          className='mb-3'
        >
          <Form.Control
            id='donation_bsc_address'
            type='text'
            value={BSC_Address}
            onChange={e => e}
          />
        </FloatingLabel>
      </Card.Body>
    </Card>
  )
}
