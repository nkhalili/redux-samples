import C from '../constants'
import appReducer from './reducers'
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'

// const consoleMessages = function(store) {
//   return function(next){
//     return function(action){

//     }
//   }
// }

// Short form of consoleMessages middleware
const consoleMessages = store => next => action => {
  
  let result
  
  console.groupCollapsed(`dispatching action => ${action.type}`)
  console.log('ski days', store.getState().allSkiDays.length)

  // Call the next dispatch method in the middleware chain.
  result = next(action)

  let {allSkiDays, goal, errors, resortNames } = store.getState()

  console.log(`

      ski days: ${allSkiDays.length}
      goal: ${goal}
      fetching: ${resortNames.fetching}
      suggestions: ${resortNames.suggestions}
      errors: ${errors.length}
      
  `)
  console.groupEnd()

  // This will likely be the action itself, unless
  // a middleware further in chain changed it.
  return result

}

export default (initialState={}) => {
  return applyMiddleware(thunk, consoleMessages)(createStore)(appReducer, initialState)
}
