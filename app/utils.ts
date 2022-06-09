import { Realm } from './models/Realm'

const ParamsList = [
  'realm',
  Realm.Solana,
  Realm.BSC,
  'r1',
  'r2',
  'gstC',
  'gmtC',
  'gstU',
  'gmtU',
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
