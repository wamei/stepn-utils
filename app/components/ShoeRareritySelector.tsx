import { ShoeRarerity, ShoeRarerityColor } from 'app/models/ShoeRarerity'
import React, { FC } from 'react'
import { ButtonGroup, Dropdown } from 'react-bootstrap'

type ShoeRareritySelectorProps = {
  value: ShoeRarerity
  onChange(v: ShoeRarerity): void
  className?: string
}

export const ShoeRareritySelector: FC<ShoeRareritySelectorProps> = ({
  value,
  onChange,
  className,
}) => {
  return (
    <>
      <Dropdown className={className}>
        <Dropdown.Toggle
          variant='light'
          style={{
            backgroundColor: ShoeRarerityColor[value],
          }}
          className='w-100'
          size='sm'
        >
          {value}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {[ShoeRarerity.Common, ShoeRarerity.Uncommon, ShoeRarerity.Rare].map(rarerity => (
            <Dropdown.Item
              key={rarerity}
              onClick={() => onChange(rarerity)}
              style={{
                backgroundColor: ShoeRarerityColor[rarerity],
              }}
            >
              {rarerity}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}
