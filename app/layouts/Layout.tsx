import { Cryptocurrency } from 'app/models/Cryptcurrency'
import { MintingRate, MintingRateListCommon, MintingRateListUncommon } from 'app/models/MintingRate'
import { Realm } from 'app/models/Realm'
import { Shoe } from 'app/models/Shoe'
import { ShoeRarerity } from 'app/models/ShoeRarerity'
import { ShoeType } from 'app/models/ShoeType'
import {
  fetchCryptocurrencies,
  fetchCryptocurrenciesFromCache,
} from 'app/repositories/Cryptocurrency'
import { buildQuery } from 'app/utils'
import { Head, useRouter } from 'blitz'
import React, { FC, ReactNode, createContext, useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

type LayoutProps = {
  title?: string
  children?: ReactNode
}

type FloorPrices = {
  [key: string]: number
}

type Context = {
  crypts: Cryptocurrency[]
  realm: Realm
  setRealm: React.Dispatch<React.SetStateAction<Realm>>
  floorPriceString: string
  setFloorPriceString: React.Dispatch<React.SetStateAction<string>>
  floorPrices: FloorPrices
  setFloorPrices: React.Dispatch<React.SetStateAction<FloorPrices>>
  mintingRateCommon: MintingRate
  setMintingRateCommon: React.Dispatch<React.SetStateAction<MintingRate>>
  mintingRateUncommon: MintingRate
  setMintingRateUncommon: React.Dispatch<React.SetStateAction<MintingRate>>
  shoe1: Shoe
  setShoe1: React.Dispatch<React.SetStateAction<Shoe>>
  shoe2: Shoe
  setShoe2: React.Dispatch<React.SetStateAction<Shoe>>
}

export const Context = createContext<Context>({
  crypts: [],
  realm: Realm.Solana,
  setRealm: v => v,
  floorPriceString: '',
  setFloorPriceString: v => v,
  floorPrices: {
    [Realm.Solana]: 0,
    [Realm.BSC]: 0,
  },
  setFloorPrices: v => v,
  mintingRateCommon: MintingRateListCommon[0] as MintingRate,
  setMintingRateCommon: v => v,
  mintingRateUncommon: MintingRateListUncommon[0] as MintingRate,
  setMintingRateUncommon: v => v,
  shoe1: {
    type: ShoeType.Walker,
    rarerity: ShoeRarerity.Common,
    mint: 0,
  },
  setShoe1: v => v,
  shoe2: {
    type: ShoeType.Walker,
    rarerity: ShoeRarerity.Common,
    mint: 0,
  },
  setShoe2: v => v,
})

const LayoutImpl: FC<LayoutProps> = ({ title, children }) => {
  const router = useRouter()
  const [crypts, setCrypts] = useState<Cryptocurrency[]>([])
  const [realm, setRealm] = useState<Realm>(Realm.Solana)
  const [mintingRateCommon, setMintingRateCommon] = useState<MintingRate>(
    MintingRateListCommon[0] as MintingRate,
  )
  const [mintingRateUncommon, setMintingRateUncommon] = useState<MintingRate>(
    MintingRateListUncommon[0] as MintingRate,
  )
  const [shoe1, setShoe1] = useState<Shoe>({
    type: ShoeType.Walker,
    rarerity: ShoeRarerity.Common,
    mint: 0,
  })
  const [shoe2, setShoe2] = useState<Shoe>({
    type: ShoeType.Walker,
    rarerity: ShoeRarerity.Common,
    mint: 0,
  })
  const [floorPriceString, setFloorPriceString] = useState('')
  const [floorPrices, setFloorPrices] = useState<FloorPrices>({})
  const [isInited, setIsInited] = useState(false)

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

  useEffect(() => {
    if (!isInited || !router.isReady) {
      return
    }
    router.replace({
      pathname: router.pathname,
      query: buildQuery({
        ...router.query,
        realm,
        r1: shoe1.rarerity,
        r2: shoe2.rarerity,
        ...floorPrices,
        gstC: mintingRateCommon.gst,
        gmtC: mintingRateCommon.gmt,
        gstU: mintingRateUncommon.gst,
        gmtU: mintingRateUncommon.gmt,
      }),
    })
  }, [router.isReady, realm, floorPrices, shoe1, shoe2, mintingRateCommon, mintingRateUncommon])

  useEffect(() => {
    setFloorPriceString(String(floorPrices[realm]))
  }, [realm])

  useEffect(() => {
    if (floorPriceString === '') {
      return
    }
    setFloorPrices(old => ({
      ...old,
      [realm]: Number(floorPriceString),
    }))
  }, [floorPriceString])

  useEffect(() => {
    if (!router.isReady) {
      return
    }
    const qRealm = router.query.realm as Realm
    if (qRealm && qRealm != realm) {
      setRealm(qRealm)
    }
    if (floorPriceString !== router.query[qRealm]) {
      setFloorPriceString(String(router.query[qRealm]))
    }
    if (router.query.r1 && router.query.r1 !== shoe1.rarerity) {
      setShoe1(old => ({
        ...old,
        rarerity: router.query.r1 as ShoeRarerity,
      }))
    }
    if (router.query.r2 && router.query.r2 !== shoe2.rarerity) {
      setShoe2(old => ({
        ...old,
        rarerity: router.query.r2 as ShoeRarerity,
      }))
    }
    const qGstC = Number(router.query.gstC)
    const qGmtC = Number(router.query.gmtC)
    if (
      router.query.gstC &&
      router.query.gmtC &&
      (qGstC != mintingRateCommon.gst || qGmtC != mintingRateCommon.gmt)
    ) {
      setMintingRateCommon({
        gst: qGstC,
        gmt: qGmtC,
      })
    }
    const qGstU = Number(router.query.gstU)
    const qGmtU = Number(router.query.gmtU)
    if (
      router.query.gstU &&
      router.query.gmtU &&
      (qGstU != mintingRateUncommon.gst || qGmtU != mintingRateUncommon.gmt)
    ) {
      setMintingRateUncommon({
        gst: Number(qGstU),
        gmt: Number(qGmtU),
      })
    }
    Object.values(Realm).forEach(realm => {
      if (router.query[realm] && router.query[realm] != floorPrices[realm]) {
        setFloorPrices(old => ({
          ...old,
          [realm]: Number(router.query[realm]),
        }))
      }
    })
    setIsInited(true)
  }, [router.query, router.isReady])

  return (
    <Context.Provider
      value={{
        crypts,
        realm,
        setRealm,
        floorPriceString,
        setFloorPriceString,
        floorPrices,
        setFloorPrices,
        shoe1,
        setShoe1,
        shoe2,
        setShoe2,
        mintingRateCommon,
        setMintingRateCommon,
        mintingRateUncommon,
        setMintingRateUncommon,
      }}
    >
      <div className='d-flex flex-column vh-100'>
        <Head>
          <title>{`${title ? `${title} | ` : ''}STEPN utils`}</title>
        </Head>
        <Navbar bg='light fw-bold'>
          <Container>
            <Navbar.Brand
              onClick={() => {
                router.replace({
                  pathname: '/',
                  query: router.query,
                })
              }}
            >
              <img src='/stepn-utils/stepn.svg' width='40' height='40' />
              STEPN utils
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav
                className='me-auto'
                activeKey={router.pathname}
                onSelect={tab => {
                  router.replace({
                    pathname: tab,
                    query: router.query,
                  })
                }}
              >
                <Nav.Link className='pe-1' eventKey='/'>
                  Mint
                </Nav.Link>
                <Nav.Link className='pe-1' eventKey='/costs'>
                  Costs
                </Nav.Link>
                <Nav.Link className='pe-1' eventKey='/prices'>
                  Prices
                </Nav.Link>
                <Nav.Link className='pe-1' eventKey='/levelup'>
                  Lvup
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className='flex-grod-1 flex-shrink-1 h-100 overflow-auto'>{children}</div>
      </div>
    </Context.Provider>
  )
}

const Layout: FC<LayoutProps> = ({ title, children }) => {
  return <LayoutImpl title={title}>{children}</LayoutImpl>
}

export default Layout
