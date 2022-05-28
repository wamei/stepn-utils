import { MintingRate } from "app/models/MintingRate"
import { FC } from "react"
import { Form } from "react-bootstrap"

const MintingRateList: MintingRate[] = [
  {
    gst: 40,
    gmt: 160,
  },
  {
    gst: 80,
    gmt: 120,
  },
  {
    gst: 100,
    gmt: 100,
  },
  {
    gst: 120,
    gmt: 80,
  },
  {
    gst: 160,
    gmt: 40,
  },
  {
    gst: 200,
    gmt: 0,
  },
]

type MintingRateSelectorProps = {
  value: MintingRate
  onChange(rate: MintingRate): void
}

export const MintingRateSelector: FC<MintingRateSelectorProps> = ({ value, onChange }) => {
  return (
    <Form.Select
      value={JSON.stringify(value)}
      onChange={(e) => {
        onChange(JSON.parse(e.target.value) as MintingRate)
      }}
      className="mb-2"
    >
      {MintingRateList.map((mr) => {
        const data = JSON.stringify(mr)
        return (
          <option key={data} value={data}>
            GST{mr.gst}-GMT{mr.gmt}
          </option>
        )
      })}
    </Form.Select>
  )
}
