export const ShoeRarerity = {
  Common: 'Common',
  Uncommon: 'Uncommon',
  Rare: 'Rare',
  Epic: 'Epic',
  Legendary: 'Legendary',
} as const
export type ShoeRarerity = typeof ShoeRarerity[keyof typeof ShoeRarerity]

export const ShoeRarerityColor = {
  [ShoeRarerity.Common]: 'rgba(230, 230, 230)',
  [ShoeRarerity.Uncommon]: 'rgb(194, 255, 197)',
  [ShoeRarerity.Rare]: 'rgb(181, 224, 255)',
  [ShoeRarerity.Epic]: 'rgb(226, 191, 255)',
  [ShoeRarerity.Legendary]: 'rgb(255, 225, 173)',
} as const
