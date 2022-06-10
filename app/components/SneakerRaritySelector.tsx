import { SneakerRarity, SneakerRarityColor } from 'app/models/SneakerRarity'
import React, { FC } from 'react'
import { ButtonGroup, Dropdown, ToggleButton } from 'react-bootstrap'

type SneakerRaritySelectorType = 'dropdown' | 'button'

type SneakerRaritySelectorProps = {
  value: SneakerRarity
  onChange(v: SneakerRarity): void
  className?: string
  type?: SneakerRaritySelectorType
}

const RarityList = [SneakerRarity.Common, SneakerRarity.Uncommon, SneakerRarity.Rare]

export const SneakerRaritySelector: FC<SneakerRaritySelectorProps> = ({
  value,
  onChange,
  className,
  type,
}) => {
  return type === 'button' ? (
    <>
      <ButtonGroup className={className}>
        {RarityList.map(rarity => (
          <ToggleButton
            key={rarity}
            id={`radio-rarerity-${rarity}`}
            type='radio'
            variant='light'
            value={rarity}
            checked={value === rarity}
            onChange={e => onChange(e.currentTarget.value as SneakerRarity)}
            style={{
              backgroundColor: value === rarity ? SneakerRarityColor[rarity] : '',
            }}
            size='sm'
          >
            {rarity}
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
            backgroundColor: SneakerRarityColor[value],
          }}
          className='w-100'
          size='sm'
        >
          {value}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {RarityList.map(rarity => (
            <Dropdown.Item
              key={rarity}
              onClick={() => onChange(rarity)}
              style={{
                backgroundColor: SneakerRarityColor[rarity],
              }}
            >
              {rarity}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}
