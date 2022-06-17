import { GemType } from './GemType'

export type GemLevel = 1 | 2 | 3 | 4 | 5

export type Gem = {
  level: GemLevel
  type: GemType
}

export type GemUpgradeParam = {
  level: GemLevel
  successRate: number
  numberOfGems: number
  costGst: number
  costGmt: number
}

export const GemUpgradeParams: {
  [key in GemLevel]: GemUpgradeParam
} = {
  1: {
    level: 1,
    successRate: 0.35,
    numberOfGems: 3,
    costGst: 50,
    costGmt: 0,
  },
  2: {
    level: 2,
    successRate: 0.55,
    numberOfGems: 3,
    costGst: 100,
    costGmt: 0,
  },
  3: {
    level: 3,
    successRate: 0.65,
    numberOfGems: 3,
    costGst: 200,
    costGmt: 0,
  },
  4: {
    level: 4,
    successRate: 0.75,
    numberOfGems: 3,
    costGst: 300,
    costGmt: 200,
  },
  5: {
    level: 5,
    successRate: 0.85,
    numberOfGems: 3,
    costGst: 500,
    costGmt: 500,
  },
} as const
