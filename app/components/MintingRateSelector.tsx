import { MintingRate } from 'app/models/MintingRate'
import { FC, useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'

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
  const [_value, setValue] = useState<MintingRate>(value)

  useEffect(() => {
    let mintingRate: MintingRate = { gst: 100, gmt: 100 }
    if (gstPrice < 2) {
      mintingRate = { gst: 200, gmt: 0 }
    } else if (gstPrice >= 2 && gstPrice < 3) {
      mintingRate = { gst: 160, gmt: 40 }
    } else if (gstPrice >= 3 && gstPrice < 4) {
      mintingRate = { gst: 120, gmt: 80 }
    } else if (gstPrice >= 4 && gstPrice < 8) {
      mintingRate = { gst: 100, gmt: 100 }
    } else if (gstPrice >= 8 && gstPrice < 10) {
      mintingRate = { gst: 80, gmt: 120 }
    } else if (gstPrice >= 10) {
      mintingRate = { gst: 40, gmt: 160 }
    }
    setValue(mintingRate)
    onChange(mintingRate)
  }, [gstPrice, onChange])

  return (
    <Form.Select
      value={JSON.stringify(_value)}
      onChange={e => {
        const mintingRate = JSON.parse(e.target.value) as MintingRate
        setValue(mintingRate)
        onChange(mintingRate)
      }}
      className='mb-2'
    >
      {MintingRateList.map(mr => {
        const data = JSON.stringify(mr)
        return (
          <option key={data} value={data}>
            {mr.gst}GST-{mr.gmt}GMT
          </option>
        )
      })}
    </Form.Select>
  )
}
