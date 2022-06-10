import { UnitType } from 'app/layouts/Layout'
import { Realm, RealmToken } from 'app/models/Realm'
import { SneakerRarityColor } from 'app/models/SneakerRarity'
import React, { FC } from 'react'
import { ButtonGroup, ToggleButton } from 'react-bootstrap'

type UnitSelectorProps = {
  realm: Realm
  value: UnitType
  onChange: React.Dispatch<React.SetStateAction<UnitType>>
}
export const UnitSelector: FC<UnitSelectorProps> = ({ realm, value, onChange }) => {
  return (
    <ButtonGroup>
      <ToggleButton
        value={'realm'}
        id={`radio-unit-0`}
        type='radio'
        variant='light'
        style={{
          backgroundColor: value === 'realm' ? SneakerRarityColor.Common : '',
        }}
        onChange={e => onChange(e.currentTarget.value as UnitType)}
        size='sm'
      >
        {RealmToken[realm].unit}
      </ToggleButton>
      <ToggleButton
        value={'jpy'}
        id={`radio-unit-1`}
        type='radio'
        variant='light'
        style={{
          backgroundColor: value === 'jpy' ? SneakerRarityColor.Common : '',
        }}
        onChange={e => onChange(e.currentTarget.value as UnitType)}
        size='sm'
      >
        JPY
      </ToggleButton>
      <ToggleButton
        value={'usd'}
        id={`radio-unit-2`}
        type='radio'
        variant='light'
        style={{
          backgroundColor: value === 'usd' ? SneakerRarityColor.Common : '',
        }}
        onChange={e => onChange(e.currentTarget.value as UnitType)}
        size='sm'
      >
        USD
      </ToggleButton>
    </ButtonGroup>
  )
}
