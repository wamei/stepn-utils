export type MintingRate = {
  gst: number
  gmt: number
}

export const MintingRateListCommon: MintingRate[] = [
  {
    gst: 360,
    gmt: 40,
  },
]

export const MintingRateListUncommon: MintingRate[] = [
  {
    gst: 1360,
    gmt: 240,
  },
]

export const MintingRateListRare: MintingRate[] = [
  {
    gst: 6400,
    gmt: 1600,
  },
]

export const calcAdditionalGmt = (mintingRate: MintingRate, currentGstPrice: number) => {
  if (currentGstPrice < 4) {
    return 0
  } else if (currentGstPrice >= 4 && currentGstPrice < 8) {
    return (mintingRate.gst + mintingRate.gmt) * 0.5
  } else if (currentGstPrice >= 8 && currentGstPrice < 12) {
    return (mintingRate.gst + mintingRate.gmt) * 1
  } else if (currentGstPrice >= 12 && currentGstPrice < 16) {
    return (mintingRate.gst + mintingRate.gmt) * 2
  } else if (currentGstPrice >= 16 && currentGstPrice < 20) {
    return (mintingRate.gst + mintingRate.gmt) * 4
  } else if (currentGstPrice >= 20 && currentGstPrice < 30) {
    return (mintingRate.gst + mintingRate.gmt) * 8
  } else if (currentGstPrice >= 30 && currentGstPrice < 40) {
    return (mintingRate.gst + mintingRate.gmt) * 16
  } else if (currentGstPrice >= 40 && currentGstPrice < 50) {
    return (mintingRate.gst + mintingRate.gmt) * 32
  }
  return (mintingRate.gst + mintingRate.gmt) * 64
}
