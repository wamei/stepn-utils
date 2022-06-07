export const ShoeType = {
  Walker: 'Walker',
  Jogger: 'Jogger',
  Runner: 'Runner',
  Trainer: 'Trainer',
} as const
export type ShoeType = typeof ShoeType[keyof typeof ShoeType]
