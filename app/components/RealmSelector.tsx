import { Realm, RealmColor, RealmToken } from 'app/models/Realm'
import React, { FC } from 'react'
import { ButtonGroup, ToggleButton } from 'react-bootstrap'

type RealmSelectorProps = {
  value: Realm
  onChange(v: Realm): void
  className?: string
}

export const RealmSelector: FC<RealmSelectorProps> = ({ value, onChange, className }) => {
  return (
    <ButtonGroup className={className}>
      {Object.values(Realm).map(realm => (
        <ToggleButton
          key={realm}
          id={`radio-realm-${realm}`}
          type='radio'
          variant='light'
          value={realm}
          checked={value === realm}
          onChange={e => onChange(e.currentTarget.value as Realm)}
          style={{
            backgroundColor: value === realm ? RealmColor[realm] : '',
          }}
          size='sm'
        >
          <img
            className='me-1 align-middle'
            src={`/stepn-utils/${RealmToken[realm].main}.png`}
            alt={realm}
            width='20'
            height='20'
          />
          <span className='align-middle'>{realm}</span>
        </ToggleButton>
      ))}
    </ButtonGroup>
  )
}
