import C from './constants'
import appReducer from './store/reducers'
import initialState from './initialState.json'
import { createStore } from 'redux'

// To create the store with initial state
const store = createStore(appReducer, initialState)

// To read the current state
console.log('initial state', store.getState())

// to mutate the state
store.dispatch({
  type: C.ADD_DAY,
  payload: {
    "resort": "Mt Shasta",
    "date": "2016-10-28",
    "powder": false,
    "backcountry" : true
  }
})

console.log('next state', store.getState())
