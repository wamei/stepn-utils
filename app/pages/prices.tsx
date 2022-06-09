import { CryptExchangeSection } from 'app/components/CryptExchangeSection'
import { CryptPriceTable } from 'app/components/CryptPriceTable'
import { DonationCard } from 'app/components/DonationCard'
import Layout, { Context } from 'app/layouts/Layout'
import { BlitzPage } from 'blitz'
import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'

const Prices: BlitzPage = () => {
  const context = useContext(Context)
  const { crypts } = context

  return (
    <div>
      <Container className='mt-2' style={{ maxWidth: '540px' }}>
        <CryptPriceTable crypts={crypts} />
        <CryptExchangeSection crypts={crypts} />
      </Container>
      <hr />
      <Container style={{ maxWidth: '540px' }}>
        <DonationCard className='border-0' />
      </Container>
    </div>
  )
}

Prices.suppressFirstRenderFlicker = true
Prices.getLayout = page => <Layout title='Prices'>{page}</Layout>

export default Prices
