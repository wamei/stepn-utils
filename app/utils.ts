import { Realm } from './models/Realm'

const ParamsList = [
  'realm',
  Realm.Solana,
  Realm.BSC,
  'r1',
  'r2',
  't1',
  't2',
  'm1',
  'm2',
  'gstC',
  'gmtC',
  'gstU',
  'gmtU',
  'gstR',
  'gmtR',
  'gstE',
  'gmtE',
  'gstL',
  'gmtL',
  'lvsn',
  'unitType',
  'lng',
] as const
type ParamsList = typeof ParamsList[number]
type Params = {
  [key in ParamsList]?: unknown
}

export const buildQuery = <T extends Params>(query: T) => {
  return Object.assign(
    {},
    ...Object.entries(query).flatMap(p => {
      if (ParamsList.includes(p[0] as ParamsList) && p[1] !== undefined) {
        return [
          {
            [p[0]]: p[1],
          },
        ]
      }
      return []
    }),
  )
}
