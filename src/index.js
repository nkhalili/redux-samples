import C from './constants'
import { allSkiDays } from './store/reducers'

const state = [
  {
    "resort": "Kirkwood",
    "date": "2016-10-11",
    "powder": true,
    "backcountry": false
  }
]

const action = {
  type: C.ADD_DAY,
  payload: {
    "resort": "Boreal",
    "date": "2016-10-20",
    "powder": false,
    "backcountry": false
  }
}

const nextState = allSkiDays(state, action)

console.log(`

  initial state: ${JSON.stringify(state)}
  action: ${JSON.stringify(action)}
  new state: ${JSON.stringify(nextState)}

`)
