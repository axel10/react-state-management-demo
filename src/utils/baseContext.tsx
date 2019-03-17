import { ITestState } from '@/utils/types/test'
import React, { createContext, Dispatch, useContext, useReducer } from 'react'

export interface IRootState {
  test: ITestState
}

type Root = [IRootState, Dispatch<any>]

export const StateContext = createContext<Root>([null, null])
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState) as any}>
    {children}
  </StateContext.Provider>
)
export const useStateValue = () => useContext(StateContext)
