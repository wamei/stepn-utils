export const ShoeRarerity = {
  Common: 'Common',
  Uncommon: 'Uncommon',
  // Rare: 'Rare',
  // Epic: 'Epic',
  // Legendary: 'Legendary',
} as const
export type ShoeRarerity = typeof ShoeRarerity[keyof typeof ShoeRarerity]

export const ShoeRarerityColor = {
  [ShoeRarerity.Common]: '#d3d3d3',
  [ShoeRarerity.Uncommon]: '#98fb98',
} as const
