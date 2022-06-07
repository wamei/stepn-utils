import { Cryptocurrency } from 'app/models/Cryptcurrency'
import { Realm, RealmToken } from 'app/models/Realm'
import React, { FC, useEffect, useState } from 'react'
import { FloatingLabel, Form, InputGroup, Table } from 'react-bootstrap'
import { CryptSelector } from './CryptSelector'

type CryptExchangeSectionProps = {
  crypts: Cryptocurrency[]
  realm: Realm
  className?: string
}

export const CryptExchangeSection: FC<CryptExchangeSectionProps> = ({
  crypts,
  className,
  realm,
}) => {
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
    setCrypt(crypts.find(c => c.id === RealmToken[realm].main) as Cryptocurrency)
  }, [crypts])

  useEffect(() => {
    if (!priceString) {
      return
    }
    setPrice(Number(priceString))
  }, [priceString])

  if (!crypt) {
    return <p>Loading...</p>
  }

  return (
    <div className={className}>
      <h4>通貨変換</h4>
      <InputGroup className='mb-3'>
        <>
          <FloatingLabel controlId='floatingInput' label={`${crypt.name}`}>
            <Form.Control
              type='number'
              value={priceString}
              onChange={e => {
                setPriceString(e.target.value)
              }}
            />
          </FloatingLabel>
        </>
        <CryptSelector crypts={crypts} value={crypt} onChange={setCrypt} />
      </InputGroup>
      <Table striped bordered hover size='sm' className='mb-0'>
        <tbody>
          {[
            {
              id: 'jpy',
              symbol: 'JPY',
              name: 'Japanese Yen',
              short: 'JPY',
              jpy: 1,
            },
            ...crypts,
          ]
            .filter(c => c.id !== crypt.id)
            .map(c => (
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
                <td className='text-end'>{((crypt.jpy * price * 0.9936) / c.jpy).toFixed(2)}</td>
                <td>{c.symbol}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  )
}
