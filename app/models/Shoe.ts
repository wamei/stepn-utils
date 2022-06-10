import { SneakerRarerity } from './SneakerRarerity'
import { SneakerType } from './SneakerType'

export type Shoe = {
  type: SneakerType
  rarerity: SneakerRarerity
  mint: number
}
