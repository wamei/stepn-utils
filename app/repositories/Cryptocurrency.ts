import { Cryptocurrency } from "app/models/Cryptcurrency"

type CryptocurrenciesResponse = {
  id: string
  symbol: string
  name: string
  jpy: number
  usd: number
  lastUpdatedAt: string
}[]

const CryptocurrenciesResponseKey = "CryptocurrenciesResponse"

export const fetchCryptocurrencies = async (): Promise<Cryptocurrency[]> => {
  const response = await fetch(
    `https://script.google.com/macros/s/AKfycbxehX_2FJ-NopjtNC0EffWz0IAlw_HeInxY14M5R-p3WTC-HnBsQXB-WX1p6pvsvNud7A/exec`
  )
  const content: CryptocurrenciesResponse = await response.json()
  localStorage.setItem(CryptocurrenciesResponseKey, JSON.stringify(content))
  return content.map((c) => ({
    id: c.id,
    symbol: c.symbol,
    name: c.name,
    jpy: c.jpy,
    usd: c.usd,
    lastUpdatedAt: new Date(c.lastUpdatedAt),
  }))
}

export const fetchCryptocurrenciesFromCache = (): Cryptocurrency[] | null => {
  const content = localStorage.getItem(CryptocurrenciesResponseKey)
  if (!content) {
    return null
  }
  return (JSON.parse(content) as CryptocurrenciesResponse).map((c) => ({
    id: c.id,
    symbol: c.symbol,
    name: c.name,
    jpy: c.jpy,
    usd: c.usd,
    lastUpdatedAt: new Date(c.lastUpdatedAt),
  }))
}
