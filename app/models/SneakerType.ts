export const SneakerType = {
  Walker: 'Walker',
  Jogger: 'Jogger',
  Runner: 'Runner',
  Trainer: 'Trainer',
} as const
export type SneakerType = typeof SneakerType[keyof typeof SneakerType]
