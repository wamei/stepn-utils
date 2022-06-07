export const Realm = {
  Solana: 'Solana',
  BSC: 'BSC',
} as const
export type Realm = typeof Realm[keyof typeof Realm]

export const RealmToken = {
  [Realm.Solana]: {
    main: 'solana',
    unit: 'SOL',
    gst: 'green-satoshi-token',
    gmt: 'green-metaverse-token',
  },
  [Realm.BSC]: {
    main: 'bnb',
    unit: 'BNB',
    gst: 'green-satoshi-token-bsc',
    gmt: 'green-metaverse-token',
  },
} as const

export const RealmColor = {
  [Realm.Solana]: '#00ffbd',
  [Realm.BSC]: '#FCD535',
} as const
