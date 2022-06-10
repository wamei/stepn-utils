export const SneakerRarerity = {
  Common: 'Common',
  Uncommon: 'Uncommon',
  Rare: 'Rare',
  Epic: 'Epic',
  Legendary: 'Legendary',
} as const
export type SneakerRarerity = typeof SneakerRarerity[keyof typeof SneakerRarerity]

export const SneakerRarerityColor = {
  [SneakerRarerity.Common]: 'rgba(230, 230, 230)',
  [SneakerRarerity.Uncommon]: 'rgb(194, 255, 197)',
  [SneakerRarerity.Rare]: 'rgb(181, 224, 255)',
  [SneakerRarerity.Epic]: 'rgb(226, 191, 255)',
  [SneakerRarerity.Legendary]: 'rgb(255, 225, 173)',
} as const
