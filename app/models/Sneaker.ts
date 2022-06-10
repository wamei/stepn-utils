import { SneakerRarerity } from './SneakerRarerity'
import { SneakerType } from './SneakerType'

export type Sneaker = {
  type: SneakerType
  rarerity: SneakerRarerity
  mint: number
}
