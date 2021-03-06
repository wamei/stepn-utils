export const SneakerRarity = {
  Common: 'Common',
  Uncommon: 'Uncommon',
  Rare: 'Rare',
  Epic: 'Epic',
  Legendary: 'Legendary',
} as const
export type SneakerRarity = typeof SneakerRarity[keyof typeof SneakerRarity]

export const SneakerRarityColor = {
  [SneakerRarity.Common]: 'rgba(230, 230, 230)',
  [SneakerRarity.Uncommon]: 'rgb(194, 255, 197)',
  [SneakerRarity.Rare]: 'rgb(181, 224, 255)',
  [SneakerRarity.Epic]: 'rgb(226, 191, 255)',
  [SneakerRarity.Legendary]: 'rgb(255, 225, 173)',
} as const

export const ShoeBoxRarityMatrix = {
  [SneakerRarity.Common]: {
    [SneakerRarity.Common]: 0.97,
    [SneakerRarity.Uncommon]: 0.03,
    [SneakerRarity.Rare]: 0,
    [SneakerRarity.Epic]: 0,
    [SneakerRarity.Legendary]: 0,
  },
  [SneakerRarity.Uncommon]: {
    [SneakerRarity.Common]: 0.25,
    [SneakerRarity.Uncommon]: 0.73,
    [SneakerRarity.Rare]: 0.02,
    [SneakerRarity.Epic]: 0,
    [SneakerRarity.Legendary]: 0,
  },
  [SneakerRarity.Rare]: {
    [SneakerRarity.Common]: 0,
    [SneakerRarity.Uncommon]: 0.27,
    [SneakerRarity.Rare]: 0.71,
    [SneakerRarity.Epic]: 0.02,
    [SneakerRarity.Legendary]: 0,
  },
  [SneakerRarity.Epic]: {
    [SneakerRarity.Common]: 0,
    [SneakerRarity.Uncommon]: 0,
    [SneakerRarity.Rare]: 0.3,
    [SneakerRarity.Epic]: 0.68,
    [SneakerRarity.Legendary]: 0.02,
  },
  [SneakerRarity.Legendary]: {
    [SneakerRarity.Common]: 0,
    [SneakerRarity.Uncommon]: 0,
    [SneakerRarity.Rare]: 0,
    [SneakerRarity.Epic]: 0.35,
    [SneakerRarity.Legendary]: 0.65,
  },
} as const

export const MintedSneakerShoeboxRarityMatrix = {
  [SneakerRarity.Common]: {
    [SneakerRarity.Common]: {
      [SneakerRarity.Common]: 1,
      [SneakerRarity.Uncommon]: 0,
      [SneakerRarity.Rare]: 0,
      [SneakerRarity.Epic]: 0,
      [SneakerRarity.Legendary]: 0,
    },
    [SneakerRarity.Uncommon]: {
      [SneakerRarity.Common]: 0.5,
      [SneakerRarity.Uncommon]: 0.49,
      [SneakerRarity.Rare]: 0.01,
      [SneakerRarity.Epic]: 0,
      [SneakerRarity.Legendary]: 0,
    },
    [SneakerRarity.Rare]: {
      [SneakerRarity.Common]: 0.5,
      [SneakerRarity.Uncommon]: 0,
      [SneakerRarity.Rare]: 0.49,
      [SneakerRarity.Epic]: 0.01,
      [SneakerRarity.Legendary]: 0,
    },
    [SneakerRarity.Epic]: {
      [SneakerRarity.Common]: 0.5,
      [SneakerRarity.Uncommon]: 0,
      [SneakerRarity.Rare]: 0,
      [SneakerRarity.Epic]: 0.49,
      [SneakerRarity.Legendary]: 0.01,
    },
    [SneakerRarity.Legendary]: {
      [SneakerRarity.Common]: 0.5,
      [SneakerRarity.Uncommon]: 0,
      [SneakerRarity.Rare]: 0,
      [SneakerRarity.Epic]: 0,
      [SneakerRarity.Legendary]: 0.5,
    },
  },
  [SneakerRarity.Uncommon]: {
    [SneakerRarity.Common]: {
      [SneakerRarity.Common]: 0.5,
      [SneakerRarity.Uncommon]: 0.49,
      [SneakerRarity.Rare]: 0.01,
      [SneakerRarity.Epic]: 0,
      [SneakerRarity.Legendary]: 0,
    },
    [SneakerRarity.Uncommon]: {
      [SneakerRarity.Common]: 0,
      [SneakerRarity.Uncommon]: 0.98,
      [SneakerRarity.Rare]: 0.02,
      [SneakerRarity.Epic]: 0,
      [SneakerRarity.Legendary]: 0,
    },
    [SneakerRarity.Rare]: {
      [SneakerRarity.Common]: 0,
      [SneakerRarity.Uncommon]: 0.49,
      [SneakerRarity.Rare]: 0.5,
      [SneakerRarity.Epic]: 0.01,
      [SneakerRarity.Legendary]: 0,
    },
    [SneakerRarity.Epic]: {
      [SneakerRarity.Common]: 0,
      [SneakerRarity.Uncommon]: 0.49,
      [SneakerRarity.Rare]: 0.01,
      [SneakerRarity.Epic]: 0.49,
      [SneakerRarity.Legendary]: 0.01,
    },
    [SneakerRarity.Legendary]: {
      [SneakerRarity.Common]: 0,
      [SneakerRarity.Uncommon]: 0.49,
      [SneakerRarity.Rare]: 0.01,
      [SneakerRarity.Epic]: 0,
      [SneakerRarity.Legendary]: 0.5,
    },
  },
  [SneakerRarity.Rare]: {
    [SneakerRarity.Common]: {
      [SneakerRarity.Common]: 0.5,
      [SneakerRarity.Uncommon]: 0,
      [SneakerRarity.Rare]: 0.49,
      [SneakerRarity.Epic]: 0.01,
      [SneakerRarity.Legendary]: 0,
    },
    [SneakerRarity.Uncommon]: {
      [SneakerRarity.Common]: 0,
      [SneakerRarity.Uncommon]: 0.49,
      [SneakerRarity.Rare]: 0.5,
      [SneakerRarity.Epic]: 0.01,
      [SneakerRarity.Legendary]: 0,
    },
    [SneakerRarity.Rare]: {
      [SneakerRarity.Common]: 0,
      [SneakerRarity.Uncommon]: 0,
      [SneakerRarity.Rare]: 0.98,
      [SneakerRarity.Epic]: 0.02,
      [SneakerRarity.Legendary]: 0,
    },
    [SneakerRarity.Epic]: {
      [SneakerRarity.Common]: 0,
      [SneakerRarity.Uncommon]: 0,
      [SneakerRarity.Rare]: 0.49,
      [SneakerRarity.Epic]: 0.5,
      [SneakerRarity.Legendary]: 0.01,
    },
    [SneakerRarity.Legendary]: {
      [SneakerRarity.Common]: 0,
      [SneakerRarity.Uncommon]: 0,
      [SneakerRarity.Rare]: 0.49,
      [SneakerRarity.Epic]: 0.01,
      [SneakerRarity.Legendary]: 0.5,
    },
  },
  [SneakerRarity.Epic]: {
    [SneakerRarity.Common]: {
      [SneakerRarity.Common]: 0.5,
      [SneakerRarity.Uncommon]: 0,
      [SneakerRarity.Rare]: 0,
      [SneakerRarity.Epic]: 0.49,
      [SneakerRarity.Legendary]: 0.01,
    },
    [SneakerRarity.Uncommon]: {
      [SneakerRarity.Common]: 0,
      [SneakerRarity.Uncommon]: 0.49,
      [SneakerRarity.Rare]: 0.01,
      [SneakerRarity.Epic]: 0.49,
      [SneakerRarity.Legendary]: 0.01,
    },
    [SneakerRarity.Rare]: {
      [SneakerRarity.Common]: 0,
      [SneakerRarity.Uncommon]: 0,
      [SneakerRarity.Rare]: 0.49,
      [SneakerRarity.Epic]: 0.5,
      [SneakerRarity.Legendary]: 0.01,
    },
    [SneakerRarity.Epic]: {
      [SneakerRarity.Common]: 0,
      [SneakerRarity.Uncommon]: 0,
      [SneakerRarity.Rare]: 0,
      [SneakerRarity.Epic]: 0.98,
      [SneakerRarity.Legendary]: 0.02,
    },
    [SneakerRarity.Legendary]: {
      [SneakerRarity.Common]: 0,
      [SneakerRarity.Uncommon]: 0,
      [SneakerRarity.Rare]: 0,
      [SneakerRarity.Epic]: 0.49,
      [SneakerRarity.Legendary]: 0.51,
    },
  },
  [SneakerRarity.Legendary]: {
    [SneakerRarity.Common]: {
      [SneakerRarity.Common]: 0.5,
      [SneakerRarity.Uncommon]: 0,
      [SneakerRarity.Rare]: 0,
      [SneakerRarity.Epic]: 0,
      [SneakerRarity.Legendary]: 0.5,
    },
    [SneakerRarity.Uncommon]: {
      [SneakerRarity.Common]: 0,
      [SneakerRarity.Uncommon]: 0.49,
      [SneakerRarity.Rare]: 0.01,
      [SneakerRarity.Epic]: 0,
      [SneakerRarity.Legendary]: 0.5,
    },
    [SneakerRarity.Rare]: {
      [SneakerRarity.Common]: 0,
      [SneakerRarity.Uncommon]: 0,
      [SneakerRarity.Rare]: 0.49,
      [SneakerRarity.Epic]: 0.01,
      [SneakerRarity.Legendary]: 0.5,
    },
    [SneakerRarity.Epic]: {
      [SneakerRarity.Common]: 0,
      [SneakerRarity.Uncommon]: 0,
      [SneakerRarity.Rare]: 0,
      [SneakerRarity.Epic]: 0.49,
      [SneakerRarity.Legendary]: 0.51,
    },
    [SneakerRarity.Legendary]: {
      [SneakerRarity.Common]: 0,
      [SneakerRarity.Uncommon]: 0,
      [SneakerRarity.Rare]: 0,
      [SneakerRarity.Epic]: 0,
      [SneakerRarity.Legendary]: 1,
    },
  },
} as const
