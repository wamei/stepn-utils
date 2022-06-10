import { Cryptocurrency } from 'app/models/Cryptcurrency'
import React, { FC, useEffect, useState } from 'react'
import { Col, FloatingLabel, Form, InputGroup, Row, Table } from 'react-bootstrap'
import { CryptPriceTable } from './CryptPriceTable'
import { CryptSelector } from './CryptSelector'
import { SmallDecimal } from './SmallDecimal'

type CryptExchangeSectionProps = {
  crypts: Cryptocurrency[]
  className?: string
}

const WSU_Key_CryptExchange_SelectedCryptId = 'WSU_Key_CryptExchange_SelectedCryptId'
const WSU_Key_CryptExchange_Price = 'WSU_Key_CryptExchange_Price'

export const CryptExchangeSection: FC<CryptExchangeSectionProps> = ({ crypts, className }) => {
  const [price, setPrice] = useState(1)
  const [priceString, setPriceString] = useState('1')
  const [crypt, setCrypt] = useState<Cryptocurrency>(crypts[0] as Cryptocurrency)

  useEffect(() => {
    if (crypts.length === 0) {
      return
    }
    if (crypt) {
      return
    }
    const id = localStorage.getItem(WSU_Key_CryptExchange_SelectedCryptId)
    if (id) {
      setCrypt(crypts.find(c => c.id === id) as Cryptocurrency)
      return
    }
    setCrypt(crypts[0] as Cryptocurrency)
  }, [crypts])

  useEffect(() => {
    const price = localStorage.getItem(WSU_Key_CryptExchange_Price)
    if (price) {
      setPriceString(price)
    }
    const id = localStorage.getItem(WSU_Key_CryptExchange_SelectedCryptId)
    if (id) {
      setCrypt(crypts.find(c => c.id === id) as Cryptocurrency)
    }
  }, [])

  useEffect(() => {
    if (!priceString) {
      return
    }
    setPrice(Number(priceString))
    localStorage.setItem(WSU_Key_CryptExchange_Price, priceString)
  }, [priceString])

  useEffect(() => {
    if (!crypt) {
      return
    }
    localStorage.setItem(WSU_Key_CryptExchange_SelectedCryptId, crypt.id)
  }, [crypt])

  if (!crypt) {
    return <p>Loading...</p>
  }

  const jpyAddedCrypts: Cryptocurrency[] = [
    ...crypts,
    {
      id: 'jpy',
      symbol: 'JPY',
      name: 'Japanese Yen',
      short: 'JPY',
      jpy: 1,
      usd: 1 / (crypts.find(c => c.id === 'usd-coin')?.jpy as number),
      lastUpdatedAt: crypts[0]?.lastUpdatedAt as Date,
    },
  ].filter(c => c.id !== 'bitcoin')

  return (
    <div className={className}>
      <Row className='mb-3 mt-3'>
        <Col className='text-center'>
          <h5>両替エミュレータ</h5>
        </Col>
      </Row>
      <InputGroup className='mb-3 flex-nowrap'>
        <FloatingLabel label={`${crypt.name}`}>
          <Form.Control
            type='number'
            value={priceString}
            onChange={e => {
              setPriceString(e.target.value)
            }}
          />
        </FloatingLabel>
        <CryptSelector crypts={jpyAddedCrypts} value={crypt} onChange={setCrypt} />
      </InputGroup>
      <Table striped bordered hover size='sm' className='mb-0'>
        <tbody>
          {jpyAddedCrypts.map(c => (
            <tr key={c.id}>
              <td>
                <img
                  className='me-1 align-middle'
                  src={`/stepn-utils/${c.id}.png`}
                  alt={c.name}
                  width='15'
                  height='15'
                />
                <span className='align-middle'>{c.short}</span>
              </td>
              <td className='text-end'>
                <SmallDecimal value={((crypt.jpy * price * 0.9936) / c.jpy).toFixed(3)} />
              </td>
              <td>{c.symbol}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Row className='mb-3 mt-3'>
        <Col className='text-center'>
          <h5>価格一覧</h5>
        </Col>
      </Row>
      <CryptPriceTable crypts={jpyAddedCrypts} />
    </div>
  )
}
