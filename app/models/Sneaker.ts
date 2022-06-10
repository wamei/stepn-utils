import { SneakerRarity } from './SneakerRarity'
import { SneakerType } from './SneakerType'

export type Sneaker = {
  type: SneakerType
  rarity: SneakerRarity
  mint: number
}
