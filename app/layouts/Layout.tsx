import { DonationCard } from 'app/components/DonationCard'
import { Cryptocurrency } from 'app/models/Cryptcurrency'
import {
  MintingRate,
  MintingRateListCommon,
  MintingRateListRare,
  MintingRateListUncommon,
} from 'app/models/MintingRate'
import { Realm } from 'app/models/Realm'
import { Sneaker } from 'app/models/Sneaker'
import { SneakerRarerity } from 'app/models/SneakerRarerity'
import { SneakerType } from 'app/models/SneakerType'
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

export type UnitType = 'realm' | 'jpy' | 'usd'

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
  mintingRateRare: MintingRate
  setMintingRateRare: React.Dispatch<React.SetStateAction<MintingRate>>
  sneaker1: Sneaker
  setSneaker1: React.Dispatch<React.SetStateAction<Sneaker>>
  sneaker2: Sneaker
  setSneaker2: React.Dispatch<React.SetStateAction<Sneaker>>
  lvupSneakerNum: number
  setLvupSneakerNum: React.Dispatch<React.SetStateAction<number>>
  unitType: UnitType
  setUnitType: React.Dispatch<React.SetStateAction<UnitType>>
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
  mintingRateRare: MintingRateListRare[0] as MintingRate,
  setMintingRateRare: v => v,
  sneaker1: {
    type: SneakerType.Walker,
    rarerity: SneakerRarerity.Common,
    mint: 0,
  },
  setSneaker1: v => v,
  sneaker2: {
    type: SneakerType.Walker,
    rarerity: SneakerRarerity.Common,
    mint: 0,
  },
  setSneaker2: v => v,
  lvupSneakerNum: 0,
  setLvupSneakerNum: v => v,
  unitType: 'realm',
  setUnitType: v => v,
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
  const [mintingRateRare, setMintingRateRare] = useState<MintingRate>(
    MintingRateListRare[0] as MintingRate,
  )
  const [sneaker1, setSneaker1] = useState<Sneaker>({
    type: SneakerType.Walker,
    rarerity: SneakerRarerity.Common,
    mint: 0,
  })
  const [sneaker2, setSneaker2] = useState<Sneaker>({
    type: SneakerType.Walker,
    rarerity: SneakerRarerity.Common,
    mint: 0,
  })
  const [floorPriceString, setFloorPriceString] = useState('')
  const [floorPrices, setFloorPrices] = useState<FloorPrices>({})

  const [lvupSneakerNum, setLvupSneakerNum] = useState(0)
  const [unitType, setUnitType] = useState<UnitType>('realm')

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
        t1: sneaker1.type,
        t2: sneaker2.type,
        r1: sneaker1.rarerity,
        r2: sneaker2.rarerity,
        m1: sneaker1.mint,
        m2: sneaker2.mint,
        ...floorPrices,
        gstC: mintingRateCommon.gst,
        gmtC: mintingRateCommon.gmt,
        gstU: mintingRateUncommon.gst,
        gmtU: mintingRateUncommon.gmt,
        gstR: mintingRateRare.gst,
        gmtR: mintingRateRare.gmt,
        lvsn: lvupSneakerNum,
        unitType: unitType,
      }),
    })
  }, [
    router.isReady,
    realm,
    floorPrices,
    sneaker1,
    sneaker2,
    mintingRateCommon,
    mintingRateUncommon,
    mintingRateRare,
    lvupSneakerNum,
    unitType,
  ])

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
    if (Number(floorPriceString) !== Number(router.query[qRealm])) {
      setFloorPriceString(String(router.query[qRealm]))
    }
    if (router.query.t1 && router.query.t1 !== sneaker1.type) {
      setSneaker1(old => ({
        ...old,
        type: router.query.t1 as SneakerType,
      }))
    }
    if (router.query.r1 && router.query.r1 !== sneaker1.rarerity) {
      setSneaker1(old => ({
        ...old,
        rarerity: router.query.r1 as SneakerRarerity,
      }))
    }
    const qM1 = Number(router.query.m1)
    if (router.query.m1 && qM1 !== sneaker1.mint) {
      setSneaker1(old => ({
        ...old,
        mint: qM1,
      }))
    }
    if (router.query.t2 && router.query.t2 !== sneaker2.type) {
      setSneaker2(old => ({
        ...old,
        type: router.query.t2 as SneakerType,
      }))
    }
    if (router.query.r2 && router.query.r2 !== sneaker2.rarerity) {
      setSneaker2(old => ({
        ...old,
        rarerity: router.query.r2 as SneakerRarerity,
      }))
    }
    const qM2 = Number(router.query.m2)
    if (router.query.m2 && qM2 !== sneaker2.mint) {
      setSneaker2(old => ({
        ...old,
        mint: qM2,
      }))
    }
    const qLvsn = Number(router.query.lvsn)
    if (router.query.lvsn && qLvsn !== lvupSneakerNum) {
      setLvupSneakerNum(qLvsn)
    }
    const qUnitType = router.query.unitType as UnitType
    if (qUnitType && qUnitType != unitType) {
      setUnitType(qUnitType)
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
    const qGstR = Number(router.query.gstR)
    const qGmtR = Number(router.query.gmtR)
    if (
      router.query.gstR &&
      router.query.gmtR &&
      (qGstR != mintingRateRare.gst || qGmtR != mintingRateRare.gmt)
    ) {
      setMintingRateRare({
        gst: Number(qGstR),
        gmt: Number(qGmtR),
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
        sneaker1,
        setSneaker1,
        sneaker2,
        setSneaker2,
        mintingRateCommon,
        setMintingRateCommon,
        mintingRateUncommon,
        setMintingRateUncommon,
        mintingRateRare,
        setMintingRateRare,
        lvupSneakerNum,
        setLvupSneakerNum,
        unitType,
        setUnitType,
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
                router.push({
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
                  router.push({
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
                <Nav.Link className='pe-1' eventKey='/levelup'>
                  Lvup
                </Nav.Link>
                <Nav.Link className='pe-1' eventKey='/prices'>
                  Exchange
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className='flex-grod-1 flex-shrink-1 h-100 overflow-auto'>
          {children}
          <hr />
          <Container style={{ maxWidth: '540px' }} className='mb-5'>
            <DonationCard className='border-0' />
          </Container>
        </div>
      </div>
    </Context.Provider>
  )
}

const Layout: FC<LayoutProps> = ({ title, children }) => {
  return <LayoutImpl title={title}>{children}</LayoutImpl>
}

export default Layout
