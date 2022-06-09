import { CryptExchangeSection } from 'app/components/CryptExchangeSection'
import { CryptPriceTable } from 'app/components/CryptPriceTable'
import Layout, { Context } from 'app/layouts/Layout'
import { BlitzPage } from 'blitz'
import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Prices: BlitzPage = () => {
  const context = useContext(Context)
  const { crypts } = context

  return (
    <Container className='mt-2' style={{ maxWidth: '540px' }}>
      <Row className='mb-3 mt-3'>
        <Col className='text-center'>
          <h5>両替エミュレータ</h5>
        </Col>
      </Row>
      <CryptExchangeSection crypts={crypts} />
      <Row className='mb-3 mt-3'>
        <Col className='text-center'>
          <h5>価格一覧</h5>
        </Col>
      </Row>
      <CryptPriceTable crypts={crypts} />
    </Container>
  )
}

Prices.suppressFirstRenderFlicker = true
Prices.getLayout = page => <Layout title='両替エミュレータ'>{page}</Layout>

export default Prices
