import { Cryptocurrency } from 'app/models/Cryptcurrency'
import { Realm, RealmToken } from 'app/models/Realm'
import React, { FC } from 'react'
import { Table } from 'react-bootstrap'
import { SmallDecimal } from './SmallDecimal'

type LevelUpCostTableProps = {
  crypts: Cryptocurrency[]
  realm: Realm
}

type LevelUpCostTableDataType = {
  level: number
  gst: number
  gmt: number
}

const LevelUpCostTableData: LevelUpCostTableDataType[] = [
  {
    level: 1,
    gst: 1,
    gmt: 0,
  },
  {
    level: 2,
    gst: 2,
    gmt: 0,
  },
  {
    level: 3,
    gst: 3,
    gmt: 0,
  },
  {
    level: 4,
    gst: 4,
    gmt: 0,
  },
  {
    level: 5,
    gst: 10,
    gmt: 10,
  },
  {
    level: 6,
    gst: 6,
    gmt: 0,
  },
  {
    level: 7,
    gst: 7,
    gmt: 0,
  },
  {
    level: 8,
    gst: 8,
    gmt: 0,
  },
  {
    level: 9,
    gst: 9,
    gmt: 0,
  },
  {
    level: 10,
    gst: 30,
    gmt: 30,
  },
  {
    level: 11,
    gst: 11,
    gmt: 0,
  },
  {
    level: 12,
    gst: 12,
    gmt: 0,
  },
  {
    level: 13,
    gst: 13,
    gmt: 0,
  },
  {
    level: 14,
    gst: 14,
    gmt: 0,
  },
  {
    level: 15,
    gst: 15,
    gmt: 0,
  },
  {
    level: 16,
    gst: 16,
    gmt: 0,
  },
  {
    level: 17,
    gst: 17,
    gmt: 0,
  },
  {
    level: 18,
    gst: 18,
    gmt: 0,
  },
  {
    level: 19,
    gst: 19,
    gmt: 0,
  },
  {
    level: 20,
    gst: 60,
    gmt: 60,
  },
  {
    level: 21,
    gst: 21,
    gmt: 0,
  },
  {
    level: 22,
    gst: 22,
    gmt: 0,
  },
  {
    level: 23,
    gst: 23,
    gmt: 0,
  },
  {
    level: 24,
    gst: 24,
    gmt: 0,
  },
  {
    level: 25,
    gst: 25,
    gmt: 0,
  },
  {
    level: 26,
    gst: 26,
    gmt: 0,
  },
  {
    level: 27,
    gst: 27,
    gmt: 0,
  },
  {
    level: 28,
    gst: 28,
    gmt: 0,
  },
  {
    level: 29,
    gst: 29,
    gmt: 29,
  },
  {
    level: 30,
    gst: 100,
    gmt: 100,
  },
]

const Block: FC<{
  realm: Realm
  crypts: Cryptocurrency[]
  data: LevelUpCostTableDataType
}> = ({ realm, crypts, data }) => {
  const tokenData = RealmToken[realm]
  const gstPrice = crypts.find(v => v.id === tokenData.gst)?.jpy || 0
  const gmtPrice = crypts.find(v => v.id === tokenData.gmt)?.jpy || 0
  const mainPrice = crypts.find(v => v.id === tokenData.main)?.jpy || 0

  const cost = data.gst * gstPrice + data.gmt * gmtPrice

  const prevData = LevelUpCostTableData.filter(d => d.level <= data.level)
  const sumGst = prevData.reduce((prev, d) => prev + d.gst, 0)
  const sumGmt = prevData.reduce((prev, d) => prev + d.gmt, 0)
  const sumCost = sumGst * gstPrice + sumGmt * gmtPrice

  return (
    <tr key={data.level}>
      <td>
        <small>{data.level}</small>
      </td>
      <td className='text-nowrap'>
        <img
          className='align-middle'
          src={`/stepn-utils/${RealmToken[realm].gst}.png`}
          alt='GST'
          width='15'
          height='15'
        />
        <span className='align-middle'>
          <small>{data.gst}</small>
        </span>
        {data.gmt > 0 && (
          <>
            <img
              className='ms-2 align-middle'
              src={`/stepn-utils/${RealmToken[realm].gmt}.png`}
              alt='GMT'
              width='15'
              height='15'
            />
            <span className='align-middle'>
              <small>{data.gmt}</small>
            </span>
          </>
        )}
      </td>
      <td>
        <small>
          <SmallDecimal value={(cost / mainPrice).toFixed(3)} />
        </small>
      </td>
      <td>
        <small>
          ¥<SmallDecimal value={cost.toFixed(0)} />
        </small>
      </td>
      <td>
        <small>
          <SmallDecimal value={(sumCost / mainPrice).toFixed(3)} />
        </small>
      </td>
      <td>
        <small>
          ¥<SmallDecimal value={sumCost.toFixed(0)} />
        </small>
      </td>
    </tr>
  )
}

export const LevelUpCostTable: FC<LevelUpCostTableProps> = ({ crypts, realm }) => {
  return (
    <>
      <Table striped bordered hover size='sm' className='mb-0'>
        <thead className='sticky-top'>
          <tr style={{ backgroundColor: '#ffffff' }}>
            <th>
              <small>Level</small>
            </th>
            <th>
              <small>Cost</small>
            </th>
            <th>
              <small>{RealmToken[realm].unit}</small>
            </th>
            <th>
              <small>JPY</small>
            </th>
            <th>
              <small>Total</small>
            </th>
            <th>
              <small>JPY</small>
            </th>
          </tr>
        </thead>
        <tbody>
          {LevelUpCostTableData.map(data => (
            <Block key={data.level} crypts={crypts} realm={realm} data={data} />
          ))}
        </tbody>
      </Table>
    </>
  )
}
