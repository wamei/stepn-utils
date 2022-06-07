import { DefaultCtx } from 'blitz'

declare module 'blitz' {
  export type Ctx = DefaultCtx
}
