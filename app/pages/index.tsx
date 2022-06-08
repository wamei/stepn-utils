import { CryptExchangeSection } from 'app/components/CryptExchangeSection'
import { CryptPriceTable } from 'app/components/CryptPriceTable'
import { DonationCard } from 'app/components/DonationCard'
import { HomeSection } from 'app/components/HomeSection'
import { LevelUpCostTable } from 'app/components/LevelUpCostTable'
import { RealmSelector } from 'app/components/RealmSelector'
import { Cryptocurrency } from 'app/models/Cryptcurrency'
import { Realm, RealmToken } from 'app/models/Realm'
import {
  fetchCryptocurrencies,
  fetchCryptocurrenciesFromCache,
} from 'app/repositories/Cryptocurrency'
import { replaceUrl } from 'app/utils'
import { BlitzPage, useRouter } from 'blitz'
import React, { useEffect, useState } from 'react'
import { Container, Tab, Tabs } from 'react-bootstrap'
import QueryString from 'query-string'

const Home: BlitzPage = () => {
  const router = useRouter()
  type TabKey = 'home' | 'crypts' | 'levelup'
  const [tab, setTab] = useState<TabKey>('home')
  const [crypts, setCrypts] = useState<Cryptocurrency[]>([])
  const [realm, setRealm] = useState<Realm>(Realm.Solana)

  const fetchData = async () => {
    const cache = fetchCryptocurrenciesFromCache()
    if (cache !== null) {
      if (crypts.length === 0) {
        setCrypts(cache)
      }
      if (new Date().getTime() < (cache[0]?.lastUpdatedAt.getTime() || 0) + 60 * 5 * 1000) {
        return
      }
      setCrypts(cache)
    }
    setCrypts(await fetchCryptocurrencies())
  }

  useEffect(() => {
    fetchData()
    setInterval(fetchData, 1000 * 60)
  }, [])

  useEffect(() => {
    const query = QueryString.parse(location.search)
    replaceUrl({
      ...query,
      tab,
      realm,
    })
  }, [replaceUrl, realm, tab])

  useEffect(() => {
    const qRealm = router.query.realm as Realm
    if (router.query.tab) {
      setTab(router.query.tab as TabKey)
    }
    if (router.query.realm) {
      setRealm(qRealm)
    }
  }, [router.query])

  return (
    <>
      <Tabs
        className='fs-6 justify-content-center'
        activeKey={tab}
        onSelect={(tab: TabKey) => {
          setTab(tab)
        }}
      >
        <Tab eventKey='home' title='ミント費用'>
          <Container className='mt-2'>
            <CryptPriceTable
              crypts={crypts.filter(
                c =>
                  c.id === RealmToken[realm].main ||
                  c.id === RealmToken[realm].gst ||
                  c.id === RealmToken[realm].gmt,
              )}
              className='mb-3'
            />
            <HomeSection crypts={crypts} realm={realm} setRealm={setRealm} />
          </Container>
        </Tab>
        <Tab eventKey='crypts' title='通貨価格'>
          <Container className='mt-2'>
            <CryptPriceTable crypts={crypts} className='mb-3' />
            <CryptExchangeSection crypts={crypts} realm={realm} />
          </Container>
        </Tab>
        <Tab eventKey='levelup' title='Lvup費用'>
          <Container className='mt-2'>
            <RealmSelector className='mb-2' value={realm} onChange={setRealm} />
            <LevelUpCostTable crypts={crypts} realm={realm} />
            <div className='text-end'>
              <small>最終更新日時 {crypts[0]?.lastUpdatedAt.toLocaleString()}</small>
            </div>
          </Container>
        </Tab>
      </Tabs>
      <DonationCard className='mt-4 border-0 border-top border-bottom' />
    </>
  )
}

Home.suppressFirstRenderFlicker = true

export default Home
