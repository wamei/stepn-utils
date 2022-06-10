import { BlitzPage } from 'blitz'
import React from 'react'
import { Container } from 'react-bootstrap'
import { MintSection } from 'app/components/MintSection'
import Layout from 'app/layouts/Layout'

const Home: BlitzPage = () => {
  return (
    <Container className='mt-2'>
      <MintSection />
    </Container>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = page => <Layout title='Minting Cost Emulator'>{page}</Layout>

export default Home
