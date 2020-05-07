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

    default:
      return state
  } 
}
