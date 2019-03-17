import { ActionsUnion, createAction } from '../utils/types/action'

export const actions = {
  push: (val: string) => createAction('push', val)
}

export type Actions = ActionsUnion<typeof actions>
