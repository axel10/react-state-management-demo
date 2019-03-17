import { List } from './components/List'
import { Actions } from './types/actions'
import { IRootState, StateProvider } from './utils/baseContext'
import { ITestState } from './utils/types/test'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

function PokemonInfo () {
  const initState: IRootState = {
    test: {
      list: ['1']
    }
  }

  const testReducer = (state: ITestState, action: Actions) => {
    console.log(state, action)
    switch (action.type) {
      case 'push':
        state.list.push(action.payload)
        break
      default:
        return state
    }
    return { ...state }
  }

  const mainReducer = ({ test }, action) => ({
    test: testReducer(test, action)
  })

  return (
    <StateProvider initialState={initState} reducer={mainReducer}>
      <List/>
    </StateProvider>
  )
}

ReactDOM.render(<PokemonInfo/>, document.getElementById('root'))
