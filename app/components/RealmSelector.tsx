import { Realm, RealmColor } from "app/models/Realm"
import React, { FC } from "react"
import { ButtonGroup, ToggleButton } from "react-bootstrap"

type RealmSelectorProps = {
  value: Realm
  onChange(v: Realm): void
}

export const RealmSelector: FC<RealmSelectorProps> = ({ value, onChange }) => {
  return (
    <>
      <ButtonGroup className="mb-2">
        {Object.values(Realm).map((realm) => (
          <ToggleButton
            key={realm}
            id={`radio-realm-${realm}`}
            type="radio"
            variant="light"
            name="radio"
            value={realm}
            checked={value === realm}
            onChange={(e) => onChange(e.currentTarget.value as Realm)}
            style={{
              backgroundColor: value === realm ? RealmColor[realm] : "",
            }}
          >
            {realm}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  )
}
