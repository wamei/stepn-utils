import { Cryptocurrency } from 'app/models/Cryptcurrency'
import React, { FC } from 'react'
import { Dropdown } from 'react-bootstrap'

type CryptSelectorProps = {
  crypts: Cryptocurrency[]
  value: Cryptocurrency
  onChange(v: Cryptocurrency): void
}

export const CryptSelector: FC<CryptSelectorProps> = ({ crypts, value, onChange }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant='outline-secondary'>
        <img
          className='me-1 align-middle'
          src={`/stepn-utils/${value.id}.png`}
          alt={value.name}
          width='20'
          height='20'
        />
        <span className='align-middle'>{value.symbol}</span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {crypts.map(crypt => (
          <Dropdown.Item key={crypt.id} onClick={() => onChange(crypt)}>
            <img
              className='me-1 align-middle'
              src={`/stepn-utils/${crypt.id}.png`}
              alt={crypt.name}
              width='20'
              height='20'
            />
            <span className='align-middle'>{crypt.short}</span>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}
