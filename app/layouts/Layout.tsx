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
import { SneakerRarity } from 'app/models/SneakerRarity'
import { SneakerType } from 'app/models/SneakerType'
import {
  fetchCryptocurrencies,
  fetchCryptocurrenciesFromCache,
} from 'app/repositories/Cryptocurrency'
import { buildQuery } from 'app/utils'
import { Head, useRouter } from 'blitz'
import React, { FC, ReactNode, createContext, useEffect, useState } from 'react'
import { Button, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { Trans, useTranslation } from 'react-i18next'

type LayoutProps = {
  title?: string
  children?: ReactNode
}

type FloorPrices = {
  [key in Realm]: number
}

type MintingScrollPricesString = {
  [key in SneakerRarity]: string
}
export type MintingScrollPrices = {
  [key in SneakerRarity]: number
}

export type UnitType = 'realm' | 'jpy' | 'usd'

type Context = {
  crypts: Cryptocurrency[]
  language: string
  setLanguage: React.Dispatch<React.SetStateAction<string>>
  realm: Realm
  setRealm: React.Dispatch<React.SetStateAction<Realm>>
  floorPriceString: string
  setFloorPriceString: React.Dispatch<React.SetStateAction<string>>
  floorPrices: FloorPrices
  setFloorPrices: React.Dispatch<React.SetStateAction<FloorPrices>>
  mintingScrollPricesString: MintingScrollPricesString
  setMintingScrollPricesString: React.Dispatch<React.SetStateAction<MintingScrollPricesString>>
  mintingScrollPrices: MintingScrollPrices
  setMintingScrollPrices: React.Dispatch<React.SetStateAction<MintingScrollPrices>>
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
  language: 'en',
  setLanguage: v => v,
  realm: Realm.Solana,
  setRealm: v => v,
  floorPriceString: '',
  setFloorPriceString: v => v,
  floorPrices: {
    [Realm.Solana]: 0,
    [Realm.BSC]: 0,
  },
  setFloorPrices: v => v,
  mintingScrollPricesString: {
    [SneakerRarity.Common]: '',
    [SneakerRarity.Uncommon]: '',
    [SneakerRarity.Rare]: '',
    [SneakerRarity.Epic]: '',
    [SneakerRarity.Legendary]: '',
  },
  setMintingScrollPricesString: v => v,
  mintingScrollPrices: {
    [SneakerRarity.Common]: 0,
    [SneakerRarity.Uncommon]: 0,
    [SneakerRarity.Rare]: 0,
    [SneakerRarity.Epic]: 0,
    [SneakerRarity.Legendary]: 0,
  },
  setMintingScrollPrices: v => v,
  mintingRateCommon: MintingRateListCommon[0] as MintingRate,
  setMintingRateCommon: v => v,
  mintingRateUncommon: MintingRateListUncommon[0] as MintingRate,
  setMintingRateUncommon: v => v,
  mintingRateRare: MintingRateListRare[0] as MintingRate,
  setMintingRateRare: v => v,
  sneaker1: {
    type: SneakerType.Walker,
    rarity: SneakerRarity.Common,
    mint: 0,
  },
  setSneaker1: v => v,
  sneaker2: {
    type: SneakerType.Walker,
    rarity: SneakerRarity.Common,
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
  const [language, setLanguage] = useState('en')
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
    rarity: SneakerRarity.Common,
    mint: 0,
  })
  const [sneaker2, setSneaker2] = useState<Sneaker>({
    type: SneakerType.Walker,
    rarity: SneakerRarity.Common,
    mint: 0,
  })
  const [floorPriceString, setFloorPriceString] = useState('')
  const [floorPrices, setFloorPrices] = useState<FloorPrices>({
    [Realm.Solana]: 0,
    [Realm.BSC]: 0,
  })
  const [mintingScrollPricesString, setMintingScrollPricesString] =
    useState<MintingScrollPricesString>({
      [SneakerRarity.Common]: '',
      [SneakerRarity.Uncommon]: '',
      [SneakerRarity.Rare]: '',
      [SneakerRarity.Epic]: '',
      [SneakerRarity.Legendary]: '',
    })
  const [mintingScrollPrices, setMintingScrollPrices] = useState<MintingScrollPrices>({
    [SneakerRarity.Common]: 0,
    [SneakerRarity.Uncommon]: 0,
    [SneakerRarity.Rare]: 0,
    [SneakerRarity.Epic]: 0,
    [SneakerRarity.Legendary]: 0,
  })

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
        lng: language,
        realm,
        t1: sneaker1.type,
        t2: sneaker2.type,
        r1: sneaker1.rarity,
        r2: sneaker2.rarity,
        m1: sneaker1.mint,
        m2: sneaker2.mint,
        ...floorPrices,
        mspC: mintingScrollPrices.Common,
        mspU: mintingScrollPrices.Uncommon,
        mspR: mintingScrollPrices.Rare,
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
    language,
    realm,
    floorPrices,
    mintingScrollPrices,
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
    if (mintingScrollPricesString.Common === '') {
      return
    }
    setMintingScrollPrices(old => ({
      ...old,
      [SneakerRarity.Common]: Number(mintingScrollPricesString.Common),
    }))
  }, [mintingScrollPricesString.Common])

  useEffect(() => {
    if (mintingScrollPricesString.Uncommon === '') {
      return
    }
    setMintingScrollPrices(old => ({
      ...old,
      [SneakerRarity.Uncommon]: Number(mintingScrollPricesString.Uncommon),
    }))
  }, [mintingScrollPricesString.Uncommon])

  useEffect(() => {
    if (mintingScrollPricesString.Rare === '') {
      return
    }
    setMintingScrollPrices(old => ({
      ...old,
      [SneakerRarity.Rare]: Number(mintingScrollPricesString.Rare),
    }))
  }, [mintingScrollPricesString.Rare])

  useEffect(() => {
    if (!router.isReady) {
      return
    }
    if (router.query.lng && router.query.lng != language) {
      setLanguage(router.query.lng as string)
    }
    const qRealm = router.query.realm as Realm
    if (qRealm && qRealm != realm) {
      setRealm(qRealm)
    }
    if (Number(floorPriceString) !== Number(router.query[qRealm])) {
      setFloorPriceString(String(router.query[qRealm]))
    }
    Object.values(Realm).forEach(realm => {
      if (router.query[realm] && Number(router.query[realm]) != floorPrices[realm]) {
        setFloorPrices(old => ({
          ...old,
          [realm]: Number(router.query[realm]),
        }))
      }
    })
    const qMspC = Number(router.query.mspC)
    if (Number(mintingScrollPricesString[SneakerRarity.Common]) !== qMspC) {
      setMintingScrollPricesString(old => ({
        ...old,
        [SneakerRarity.Common]: String(qMspC),
      }))
      setMintingScrollPrices(old => ({
        ...old,
        [SneakerRarity.Common]: qMspC,
      }))
    }
    const qMspU = Number(router.query.mspU)
    if (Number(mintingScrollPricesString[SneakerRarity.Uncommon]) !== qMspU) {
      setMintingScrollPricesString(old => ({
        ...old,
        [SneakerRarity.Uncommon]: String(qMspU),
      }))
      setMintingScrollPrices(old => ({
        ...old,
        [SneakerRarity.Uncommon]: qMspU,
      }))
    }
    const qMspR = Number(router.query.mspR)
    if (Number(mintingScrollPricesString[SneakerRarity.Rare]) !== qMspR) {
      setMintingScrollPricesString(old => ({
        ...old,
        [SneakerRarity.Rare]: String(qMspR),
      }))
      setMintingScrollPrices(old => ({
        ...old,
        [SneakerRarity.Rare]: qMspR,
      }))
    }
    if (router.query.t1 && router.query.t1 !== sneaker1.type) {
      setSneaker1(old => ({
        ...old,
        type: router.query.t1 as SneakerType,
      }))
    }
    if (router.query.r1 && router.query.r1 !== sneaker1.rarity) {
      setSneaker1(old => ({
        ...old,
        rarity: router.query.r1 as SneakerRarity,
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
    if (router.query.r2 && router.query.r2 !== sneaker2.rarity) {
      setSneaker2(old => ({
        ...old,
        rarity: router.query.r2 as SneakerRarity,
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
    setIsInited(true)
  }, [router.query, router.isReady])

  const { i18n } = useTranslation()

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])

  return (
    <Context.Provider
      value={{
        crypts,
        language,
        setLanguage,
        realm,
        setRealm,
        floorPriceString,
        setFloorPriceString,
        floorPrices,
        setFloorPrices,
        mintingScrollPricesString,
        setMintingScrollPricesString,
        mintingScrollPrices,
        setMintingScrollPrices,
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
              className='pt-0 pb-0 pe-0'
            >
              <Row className='pe-0'>
                <img src='/stepn-utils/stepn.svg' width='20' height='20' />
              </Row>
              <Row className='pe-0'>
                <small>
                  <small>
                    <small>STEPN utils</small>
                  </small>
                </small>
              </Row>
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
                <Nav.Link className='pe-1 pt-0 pb-0' eventKey='/'>
                  Mint
                </Nav.Link>
                <Nav.Link className='pe-1 pt-0 pb-0' eventKey='/costs'>
                  Costs
                </Nav.Link>
                <Nav.Link className='pe-1 pt-0 pb-0' eventKey='/levelup'>
                  Lvup
                </Nav.Link>
                <Nav.Link className='pe-1 pt-0 pb-0' eventKey='/prices'>
                  Exchange
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Button
              variant='outline-secondary'
              onClick={() => {
                if (language === 'en') {
                  setLanguage('ja')
                } else {
                  setLanguage('en')
                }
              }}
              size='sm'
            >
              <small className='text-decoration-none'>
                <Trans>language</Trans>
              </small>
            </Button>
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
