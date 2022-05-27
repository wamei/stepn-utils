import { Realm } from "app/models/Realm"
import { FC } from "react"
import { Form } from "react-bootstrap"

type RealmSelectorProps = {
  value: Realm
  onChange(v: Realm): void
}

export const RealmSelector: FC<RealmSelectorProps> = ({ value, onChange }) => {
  return (
    <Form.Select
      value={value}
      onChange={(e) => {
        onChange(e.target.value as Realm)
      }}
    >
      {Object.values(Realm).map((realm) => {
        return (
          <option key={realm} value={realm}>
            {realm}
          </option>
        )
      })}
    </Form.Select>
  )
}
