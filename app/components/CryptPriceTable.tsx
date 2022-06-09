import { Cryptocurrency } from 'app/models/Cryptcurrency'
import React, { FC } from 'react'
import { Table } from 'react-bootstrap'

type CryptPriceTableProps = {
  crypts: Cryptocurrency[]
  className?: string
}

export const CryptPriceTable: FC<CryptPriceTableProps> = ({ crypts, className }) => {
  return (
    <div className={className}>
      <Table striped bordered hover size='sm' className='mb-0'>
        <tbody>
          {crypts.map(c => (
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
              <td>¥{c.jpy}</td>
              <td>${c.usd}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className='text-end'>
        <small>最終更新日時 {crypts[0]?.lastUpdatedAt.toLocaleString()}</small>
      </div>
    </div>
  )
}
