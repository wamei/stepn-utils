import { ShoeRarerity, ShoeRarerityColor } from 'app/models/ShoeRarerity'
import React, { FC } from 'react'
import { ButtonGroup, Dropdown, ToggleButton } from 'react-bootstrap'

type ShoeRareritySelectorType = 'dropdown' | 'button'

type ShoeRareritySelectorProps = {
  value: ShoeRarerity
  onChange(v: ShoeRarerity): void
  className?: string
  type?: ShoeRareritySelectorType
}

const RarerityList = [ShoeRarerity.Common, ShoeRarerity.Uncommon, ShoeRarerity.Rare]

export const ShoeRareritySelector: FC<ShoeRareritySelectorProps> = ({
  value,
  onChange,
  className,
  type,
}) => {
  return type === 'button' ? (
    <>
      <ButtonGroup className={className}>
        {RarerityList.map(rarerity => (
          <ToggleButton
            key={rarerity}
            id={`radio-rarerity-${rarerity}`}
            type='radio'
            variant='light'
            value={rarerity}
            checked={value === rarerity}
            onChange={e => onChange(e.currentTarget.value as ShoeRarerity)}
            style={{
              backgroundColor: value === rarerity ? ShoeRarerityColor[rarerity] : '',
            }}
            size='sm'
          >
            {rarerity}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  ) : (
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
          {RarerityList.map(rarerity => (
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
