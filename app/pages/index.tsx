import { LevelUpCostTable } from "app/components/LevelUpCostTable"
import { MintingCostTable } from "app/components/MintingCostTable"
import { MintingRateSelector } from "app/components/MintingRateSelector"
import { RealmSelector } from "app/components/RealmSelector"
import { ShoeRareritySelector } from "app/components/ShoeRareritySelector"
import { Cryptocurrency } from "app/models/Cryptcurrency"
import { MintingRate } from "app/models/MintingRate"
import { Realm, RealmToken } from "app/models/Realm"
import { ShoeRarerity } from "app/models/ShoeRarerity"
import {
  fetchCryptocurrencies,
  fetchCryptocurrenciesFromCache,
} from "app/repositories/Cryptocurrency"
import { BlitzPage, useRouter } from "blitz"
import React, { useEffect, useState } from "react"
import { Accordion, Container, FloatingLabel, Form, Table } from "react-bootstrap"

const Home: BlitzPage = () => {
  const router = useRouter()
  const [crypts, setCrypts] = useState<Cryptocurrency[]>([])
  const [mintingRate, setMintingRate] = useState<MintingRate>({ gst: 100, gmt: 100 })
  const [rarerity1, setRarerity1] = useState<ShoeRarerity>(ShoeRarerity.Common)
  const [rarerity2, setRarerity2] = useState<ShoeRarerity>(ShoeRarerity.Common)
  const [realm, setRealm] = useState<Realm>(Realm.BSC)
  const [floorPriceString, setFloorPriceString] = useState("")
  const [floorPrices, setFloorPrices] = useState<{
    [key: string]: number
  }>({})

  const fetchData = async () => {
    const cache = fetchCryptocurrenciesFromCache()
    if (cache !== null) {
      setCrypts(cache)
      if (new Date().getTime() < (cache[0]?.lastUpdatedAt.getTime() || 0) + 60 * 5 * 1000) {
        return
      }
    }
    const crypts = await fetchCryptocurrencies()
    setCrypts(crypts)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const replaceUrl = (params: any) => {
    window.history.replaceState(
      {},
      "",
      `${location.origin}${location.pathname}?${Object.entries({
        ...params,
      })
        .flatMap((e) => {
          if (e[1]) {
            return [`${e[0]}=${e[1]}`]
          } else {
            return []
          }
        })
        .join("&")}`
    )
  }

  useEffect(() => {
    const qRealm = router.query.realm as Realm
    if (router.query.realm) {
      setRealm(qRealm)
    }
    if (router.query[qRealm]) {
      setFloorPriceString(String(router.query[qRealm]))
    }
    Object.values(Realm).forEach((realm) => {
      if (router.query[realm]) {
        setFloorPrices((old) => ({
          ...old,
          [realm]: Number(router.query[realm]),
        }))
      }
    })
  }, [router.query])

  useEffect(() => {
    replaceUrl({
      realm,
      ...floorPrices,
    })
  }, [replaceUrl, realm, floorPrices])

  useEffect(() => {
    setFloorPriceString(String(floorPrices[realm]))
  }, [realm])

  useEffect(() => {
    setFloorPrices((old) => ({
      ...old,
      [realm]: Number(floorPriceString),
    }))
  }, [floorPriceString])

  return (
    <Container className="mt-0 p-0">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>仮想通貨価格</Accordion.Header>
          <Accordion.Body>
            {crypts.length === 0 && <p>Loading...</p>}
            <Table striped bordered hover size="sm" className="mb-0">
              <tbody>
                {crypts.map((c) => (
                  <tr key={c.id}>
                    <td>
                      <img
                        className="me-1 align-middle"
                        src={`/stepn-utils/${c.id}.png`}
                        alt={c.name}
                        width="15"
                        height="15"
                      />
                      <span className="align-middle">{c.symbol}</span>
                    </td>
                    <td>¥{c.jpy}</td>
                    <td>${c.usd}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="text-end">
              <small>最終更新日時 {crypts[0]?.lastUpdatedAt.toLocaleString()}</small>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>ミント費用</Accordion.Header>
          <Accordion.Body>
            <RealmSelector value={realm} onChange={setRealm} />
            <MintingRateSelector
              value={mintingRate}
              onChange={setMintingRate}
              gstPrice={crypts.find((v) => v.id === RealmToken[realm].gst)?.usd || 5}
            />
            <ShoeRareritySelector id="r1" value={rarerity1} onChange={setRarerity1} />
            <ShoeRareritySelector id="r2" value={rarerity2} onChange={setRarerity2} />
            <>
              <FloatingLabel
                controlId="floatingInput"
                label={`フロア価格(${RealmToken[realm].unit})`}
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  value={floorPriceString}
                  onChange={(e) => {
                    setFloorPriceString(e.target.value)
                  }}
                />
              </FloatingLabel>
            </>
            <MintingCostTable
              mintingRate={mintingRate}
              rarerity1={rarerity1}
              rarerity2={rarerity2}
              realm={realm}
              crypts={crypts}
              floorPrice={floorPrices[realm] || 0}
            />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>レベルアップ費用</Accordion.Header>
          <Accordion.Body>
            <RealmSelector value={realm} onChange={setRealm} />
            <LevelUpCostTable crypts={crypts} realm={realm} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  )
}

Home.suppressFirstRenderFlicker = true

export default Home
