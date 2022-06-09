import { DonationCard } from 'app/components/DonationCard'
import { Cryptocurrency } from 'app/models/Cryptcurrency'
import {
  fetchCryptocurrencies,
  fetchCryptocurrenciesFromCache,
} from 'app/repositories/Cryptocurrency'
import { BlitzPage, useRouter } from 'blitz'
import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { MintSection } from 'app/components/MintSection'
import Layout from 'app/layouts/Layout'

const Home: BlitzPage = () => {
  const router = useRouter()
  const [crypts, setCrypts] = useState<Cryptocurrency[]>([])

  const fetchData = async () => {
    const cache = fetchCryptocurrenciesFromCache()
    if (cache !== null) {
      if (crypts.length === 0) {
        setCrypts(cache)
      }
      const now = new Date().getTime()
      if (cache.every(c => now < (c.lastUpdatedAt.getTime() || 0) + 60 * 5 * 1000)) {
        return
      }
      setCrypts(cache)
    }
    setCrypts(await fetchCryptocurrencies())
  }

  useEffect(() => {
    fetchData()
    const intervalId = setInterval(fetchData, 1000 * 60)
    return () => {
      clearTimeout(intervalId)
    }
  }, [])

  return (
    <div>
      <Container className='mt-2' style={{ maxWidth: '540px' }}>
        <MintSection crypts={crypts} />
      </Container>
      <hr />
      <Container style={{ maxWidth: '540px' }}>
        <DonationCard className='border-0' />
      </Container>
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = page => <Layout title='Mint'>{page}</Layout>

export default Home
