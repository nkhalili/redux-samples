import C from './constants'
import { error } from './store/reducers'

const state = [
  "error #1",
  "error #2"
]

const action = {
  type: C.ADD_ERROR,
  payload: "error #3"
}

const nextState = error(state, action)

console.log(`

  initial state: ${state}
  action: ${JSON.stringify(action)}
  new state: ${JSON.stringify(nextState)}

`)
