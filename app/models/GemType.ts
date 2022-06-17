export const GemType = {
  Efficiency: 'Efficiency',
  Luck: 'Luck',
  Comfort: 'Comfort',
  Resilience: 'Resilience',
} as const
export type GemType = typeof GemType[keyof typeof GemType]

export const GemTypeColor = {
  [GemType.Efficiency]: 'rgb(245, 205, 7)',
  [GemType.Luck]: 'rgb(5, 243, 247)',
  [GemType.Comfort]: 'rgb(230, 38, 21)',
  [GemType.Resilience]: 'rgb(175, 36, 255)',
} as const
