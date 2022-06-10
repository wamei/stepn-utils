import { CryptExchangeSection } from 'app/components/CryptExchangeSection'
import Layout, { Context } from 'app/layouts/Layout'
import { BlitzPage } from 'blitz'
import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'

const Prices: BlitzPage = () => {
  const context = useContext(Context)
  const { crypts } = context

  return (
    <Container className='mt-2' style={{ maxWidth: '540px' }}>
      <CryptExchangeSection crypts={crypts} />
    </Container>
  )
}

Prices.suppressFirstRenderFlicker = true
Prices.getLayout = page => <Layout title='Currency Exchange Emulator'>{page}</Layout>

export default Prices
