import { ShoeRarerity, ShoeRarerityColor } from "app/models/ShoeRarerity"
import React, { FC } from "react"
import { ButtonGroup, ToggleButton } from "react-bootstrap"

type ShoeRareritySelectorProps = {
  id: string
  value: ShoeRarerity
  onChange(v: ShoeRarerity): void
}

export const ShoeRareritySelector: FC<ShoeRareritySelectorProps> = ({ id, value, onChange }) => {
  return (
    <>
      <ButtonGroup className="mb-2">
        {Object.values(ShoeRarerity).map((rarerity) => (
          <ToggleButton
            key={rarerity}
            id={`radio-rarerity-${id}-${rarerity}`}
            type="radio"
            variant="light"
            name="radio"
            value={rarerity}
            checked={value === rarerity}
            onChange={(e) => onChange(e.currentTarget.value as ShoeRarerity)}
            style={{
              backgroundColor: value === rarerity ? ShoeRarerityColor[rarerity] : "",
            }}
          >
            {rarerity}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  )
}
