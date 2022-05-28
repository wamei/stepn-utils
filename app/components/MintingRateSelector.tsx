import { MintingRate } from "app/models/MintingRate"
import { FC, useEffect, useState } from "react"
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
  gstPrice: number
}

export const MintingRateSelector: FC<MintingRateSelectorProps> = ({
  value,
  onChange,
  gstPrice,
}) => {
  const [_value, setValue] = useState<MintingRate>({ gst: 100, gmt: 100 })

  useEffect(() => {
    if (gstPrice < 2) {
      setValue({ gst: 200, gmt: 0 })
    } else if (gstPrice >= 2 && gstPrice < 3) {
      setValue({ gst: 160, gmt: 40 })
    } else if (gstPrice >= 3 && gstPrice < 4) {
      setValue({ gst: 120, gmt: 80 })
    } else if (gstPrice >= 4 && gstPrice < 8) {
      setValue({ gst: 100, gmt: 100 })
    } else if (gstPrice >= 8 && gstPrice < 10) {
      setValue({ gst: 80, gmt: 120 })
    } else if (gstPrice >= 10) {
      setValue({ gst: 40, gmt: 160 })
    }
  }, [gstPrice])

  return (
    <Form.Select
      value={JSON.stringify(_value)}
      onChange={(e) => {
        const mintingRate = JSON.parse(e.target.value) as MintingRate
        setValue(mintingRate)
        onChange(mintingRate)
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
