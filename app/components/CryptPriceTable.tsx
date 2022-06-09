import { Cryptocurrency } from 'app/models/Cryptcurrency'
import React, { FC } from 'react'
import { Table } from 'react-bootstrap'
import { SmallDecimal } from './SmallDecimal'

type CryptPriceTableProps = {
  crypts: Cryptocurrency[]
  className?: string
}

export const CryptPriceTable: FC<CryptPriceTableProps> = ({ crypts, className }) => {
  return (
    <div className={className}>
      <Table striped bordered hover size='sm' className='mb-0'>
        <tbody>
          {crypts
            .filter(c => c.id !== 'bitcoin')
            .map(c => (
              <tr key={c.id}>
                <td className='text-nowrap'>
                  <img
                    className='me-1 align-middle'
                    src={`/stepn-utils/${c.id}.png`}
                    alt={c.name}
                    width='15'
                    height='15'
                  />
                  <span className='align-middle'>{c.name}</span>
                </td>
                <td>
                  ¥<SmallDecimal value={c.jpy.toFixed(3)} />
                </td>
                <td>
                  $<SmallDecimal value={c.usd.toFixed(3)} />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <div className='text-end' style={{ marginTop: '-6px' }}>
        <span style={{ fontSize: '8px' }}>
          最終更新日時 {crypts[0]?.lastUpdatedAt.toLocaleString()}
        </span>
      </div>
    </div>
  )
}
