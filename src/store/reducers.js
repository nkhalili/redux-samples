import C from '../constants'

export const goal = (state=10, action) => 
  (action.type === C.SET_GOAL) ?
    parseInt(action.payload) : 
    state

export const skiDay = (state=null, action) =>
  (action.type === C.ADD_DAY) ?
   action.payload :
   state

export const error = (state=[], action) => {

  switch(action.type) {

    case C.ADD_ERROR:
      
      // by doing this we are mutate the incoming state array, always keep the state immutable
      // state.push(action.payload)

      // using spread ... operator to spread state array into new array, also add our new value
      return [
        ...state, 
        action.payload
      ]

    case C.CLEAR_ERROR:

      // filter will create a new array for us (the state stays immutable)
      // needs a callback function
      // this function is predicate it returns either true or false. 
      // if returns true it will add the item to our new array
      return state.filter((message, i) => i !== action.payload)

    default:
      return state
  } 
}

export const allSkiDays = (state=[], action) => {

  switch(action.type) {

    case C.ADD_DAY:

      const hasDay = state.some(skiDay => skiDay.date === action.payload.date)

      return hasDay ?
        state :
        [
          ...state,
          skiDay(null, action)
        ]

    case C.REMOVE_DAY:

      return state.filter(skiDay => skiDay.date !== action.payload)

    default:
      return state
  }
}
