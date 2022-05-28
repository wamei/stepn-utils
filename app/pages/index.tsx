import { MintingCostTable } from "app/components/MintingCostTable"
import { MintingRateSelector } from "app/components/MintingRateSelector"
import { RealmSelector } from "app/components/RealmSelector"
import { ShoeRareritySelector } from "app/components/ShoeRareritySelector"
import { Cryptocurrency } from "app/models/Cryptcurrency"
import { MintingRate } from "app/models/MintingRate"
import { Realm } from "app/models/Realm"
import { ShoeRarerity } from "app/models/ShoeRarerity"
import { fetchCryptocurrencies } from "app/repositories/Cryptocurrency"
import { BlitzPage } from "blitz"
import React, { useEffect, useState } from "react"
import { Accordion, Container, Table } from "react-bootstrap"

const Home: BlitzPage = () => {
  const [crypts, setCrypts] = useState<Cryptocurrency[]>([])
  const [mintingRate, setMintingRate] = useState<MintingRate>({ gst: 100, gmt: 100 })
  const [rarerity1, setRarerity1] = useState<ShoeRarerity>(ShoeRarerity.Common)
  const [rarerity2, setRarerity2] = useState<ShoeRarerity>(ShoeRarerity.Common)
  const [realm, setRealm] = useState<Realm>(Realm.BSC)

  const fetchData = async () => {
    setCrypts(await fetchCryptocurrencies())
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Container className="mt-3 p-0">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>仮想通貨価格</Accordion.Header>
          <Accordion.Body>
            {crypts.length === 0 && <p>Loading...</p>}
            <Table striped bordered hover size="sm">
              <tbody>
                {crypts.map((c) => (
                  <tr key={c.id}>
                    <td>{c.symbol}</td>
                    <td>¥{c.jpy}</td>
                    <td>${c.usd}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>ミント費用</Accordion.Header>
          <Accordion.Body>
            <RealmSelector value={realm} onChange={setRealm} />
            <MintingRateSelector value={mintingRate} onChange={setMintingRate} />
            <ShoeRareritySelector value={rarerity1} onChange={setRarerity1} />
            <ShoeRareritySelector value={rarerity2} onChange={setRarerity2} />
            <MintingCostTable
              mintingRate={mintingRate}
              rarerity1={rarerity1}
              rarerity2={rarerity2}
              realm={realm}
              crypts={crypts}
            />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  )
}

Home.suppressFirstRenderFlicker = true

export default Home
