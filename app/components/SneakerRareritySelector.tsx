import { SneakerRarerity, SneakerRarerityColor } from 'app/models/SneakerRarerity'
import React, { FC } from 'react'
import { ButtonGroup, Dropdown, ToggleButton } from 'react-bootstrap'

type SneakerRareritySelectorType = 'dropdown' | 'button'

type SneakerRareritySelectorProps = {
  value: SneakerRarerity
  onChange(v: SneakerRarerity): void
  className?: string
  type?: SneakerRareritySelectorType
}

const RarerityList = [SneakerRarerity.Common, SneakerRarerity.Uncommon, SneakerRarerity.Rare]

export const SneakerRareritySelector: FC<SneakerRareritySelectorProps> = ({
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
            onChange={e => onChange(e.currentTarget.value as SneakerRarerity)}
            style={{
              backgroundColor: value === rarerity ? SneakerRarerityColor[rarerity] : '',
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
            backgroundColor: SneakerRarerityColor[value],
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
                backgroundColor: SneakerRarerityColor[rarerity],
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
