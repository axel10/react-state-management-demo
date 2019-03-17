import { actions } from '@/types/actions'
import { useStateValue } from '@/utils/baseContext'
import * as React from 'react'

export const List = () => {
  const [{ test: { list } }, dispatch] = useStateValue()
  console.log(list)
  const push = () => {
    dispatch(actions.push('123'))
  }
  return (
    <div>
      list
      {
        list.map((o, i) => {
          return <div onClick={push} key={i}>{o}</div>
        })
      }
    </div>
  )
}
