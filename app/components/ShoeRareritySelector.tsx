import { ShoeRarerity } from "app/models/ShoeRarerity"
import { FC } from "react"
import { Form } from "react-bootstrap"

type ShoeRareritySelectorProps = {
  value: ShoeRarerity
  onChange(v: ShoeRarerity): void
}

export const ShoeRareritySelector: FC<ShoeRareritySelectorProps> = ({ value, onChange }) => {
  return (
    <Form.Select
      value={value}
      onChange={(e) => {
        onChange(e.target.value as ShoeRarerity)
      }}
      className="mb-2"
    >
      {Object.values(ShoeRarerity).map((rarerity) => {
        return (
          <option key={rarerity} value={rarerity}>
            {rarerity}
          </option>
        )
      })}
    </Form.Select>
  )
}
