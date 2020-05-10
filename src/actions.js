import C from './constants'
import fetch from 'isomorphic-fetch'

export function addDay(resort, date, powder=false, backcountry=false) {

  // Add app logic here... Those which we are not allowed to write them in reducers

  return {
    type: C.ADD_DAY,
    payload: {
      resort,
      date,
      powder,
      backcountry
    }
  }
}

export const removeDay = function(date) {
  return {
    type: C.REMOVE_DAY,
    payload: date
  }
}

export const setGoal = (goal) => ({
  type: C.SET_GOAL,
  payload: goal
})

export const addError = message => ({
  type: C.ADD_ERROR,
  payload: message
})

export const clearError = index => ({
  type: C.CLEAR_ERROR,
  payload: index
})

export const changeSuggestions = suggestions => ({
  type: C.CHANGE_SUGGESTIONS,
  payload: suggestions
})

export const clearSuggestions = () => ({
  type: C.CLEAR_SUGGESTIONS
})

// Thunk sample
// Thunks don't return action object directly, they return another function
// This function gets the store's dispatch method, and store's getState method
export const randomGoals = () => (dispatch, getState) => {

  if(!getState().resortNames.fetching) {
    dispatch({
      type: C.FETCH_RESORT_NAMES
    })

    setTimeout(() => {
      dispatch({
        type: C.CANCEL_FETCHING
      })

    }, 1500)
  }
  
}

export const suggestResortNames = value => dispatch => {

  dispatch({
    type: C.FETCH_RESORT_NAMES
  })

  // isomorphic-fetch library returns a promise
  // meaning that you can wait for async response
  fetch('http://localhost:3333/resorts/' + value)
    .then(response => response.json()) // uses response from fetch()
    .then(suggestions => {  // uses return values from previous .then() callback function
      
      dispatch({ // dispatching action object
        type: C.CHANGE_SUGGESTIONS,
        payload: suggestions
      })

    })
    .catch(error => {  // handles any errors to notify user
      
      dispatch(addError(error.message)) // using addError() action creator

      dispatch({ // if any errors happen we must cancel the fetching
        type: C.CANCEL_FETCHING
      })

    })

}
