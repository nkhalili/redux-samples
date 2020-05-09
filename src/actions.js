import C from './constants'

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
