import { ShoeRarerity } from './ShoeRarerity'
import { SneakerType } from './SneakerType'

export type Shoe = {
  type: SneakerType
  rarerity: ShoeRarerity
  mint: number
}
