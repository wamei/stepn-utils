export const SneakerType = {
  Walker: 'Walker',
  Jogger: 'Jogger',
  Runner: 'Runner',
  Trainer: 'Trainer',
} as const
export type SneakerType = typeof SneakerType[keyof typeof SneakerType]

export const MintedSneakerTypeMatrix = {
  [SneakerType.Walker]: {
    [SneakerType.Walker]: {
      [SneakerType.Walker]: 0.85,
      [SneakerType.Jogger]: 0.06,
      [SneakerType.Runner]: 0.06,
      [SneakerType.Trainer]: 0.03,
    },
    [SneakerType.Jogger]: {
      [SneakerType.Walker]: 0.45,
      [SneakerType.Jogger]: 0.45,
      [SneakerType.Runner]: 0.07,
      [SneakerType.Trainer]: 0.03,
    },
    [SneakerType.Runner]: {
      [SneakerType.Walker]: 0.45,
      [SneakerType.Jogger]: 0.07,
      [SneakerType.Runner]: 0.45,
      [SneakerType.Trainer]: 0.03,
    },
    [SneakerType.Trainer]: {
      [SneakerType.Walker]: 0.8,
      [SneakerType.Jogger]: 0.06,
      [SneakerType.Runner]: 0.06,
      [SneakerType.Trainer]: 0.08,
    },
  },
  [SneakerType.Jogger]: {
    [SneakerType.Walker]: {
      [SneakerType.Walker]: 0.45,
      [SneakerType.Jogger]: 0.45,
      [SneakerType.Runner]: 0.07,
      [SneakerType.Trainer]: 0.03,
    },
    [SneakerType.Jogger]: {
      [SneakerType.Walker]: 0.06,
      [SneakerType.Jogger]: 0.85,
      [SneakerType.Runner]: 0.06,
      [SneakerType.Trainer]: 0.03,
    },
    [SneakerType.Runner]: {
      [SneakerType.Walker]: 0.07,
      [SneakerType.Jogger]: 0.45,
      [SneakerType.Runner]: 0.45,
      [SneakerType.Trainer]: 0.03,
    },
    [SneakerType.Trainer]: {
      [SneakerType.Walker]: 0.06,
      [SneakerType.Jogger]: 0.8,
      [SneakerType.Runner]: 0.06,
      [SneakerType.Trainer]: 0.08,
    },
  },
  [SneakerType.Runner]: {
    [SneakerType.Walker]: {
      [SneakerType.Walker]: 0.45,
      [SneakerType.Jogger]: 0.07,
      [SneakerType.Runner]: 0.45,
      [SneakerType.Trainer]: 0.03,
    },
    [SneakerType.Jogger]: {
      [SneakerType.Walker]: 0.45,
      [SneakerType.Jogger]: 0.07,
      [SneakerType.Runner]: 0.45,
      [SneakerType.Trainer]: 0.03,
    },
    [SneakerType.Runner]: {
      [SneakerType.Walker]: 0.06,
      [SneakerType.Jogger]: 0.06,
      [SneakerType.Runner]: 0.85,
      [SneakerType.Trainer]: 0.03,
    },
    [SneakerType.Trainer]: {
      [SneakerType.Walker]: 0.06,
      [SneakerType.Jogger]: 0.06,
      [SneakerType.Runner]: 0.8,
      [SneakerType.Trainer]: 0.08,
    },
  },
  [SneakerType.Trainer]: {
    [SneakerType.Walker]: {
      [SneakerType.Walker]: 0.8,
      [SneakerType.Jogger]: 0.06,
      [SneakerType.Runner]: 0.06,
      [SneakerType.Trainer]: 0.08,
    },
    [SneakerType.Jogger]: {
      [SneakerType.Walker]: 0.06,
      [SneakerType.Jogger]: 0.8,
      [SneakerType.Runner]: 0.06,
      [SneakerType.Trainer]: 0.08,
    },
    [SneakerType.Runner]: {
      [SneakerType.Walker]: 0.06,
      [SneakerType.Jogger]: 0.06,
      [SneakerType.Runner]: 0.8,
      [SneakerType.Trainer]: 0.08,
    },
    [SneakerType.Trainer]: {
      [SneakerType.Walker]: 0.25,
      [SneakerType.Jogger]: 0.25,
      [SneakerType.Runner]: 0.25,
      [SneakerType.Trainer]: 0.25,
    },
  },
} as const
