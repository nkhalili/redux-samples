import storeFactory from './store'
import { addError, clearError, changeSuggestions, clearSuggestions } from './actions'

const store = storeFactory()

store.dispatch(
  addError("Error")
)

store.dispatch(
  clearError(0)
)

store.dispatch(
  changeSuggestions(['One', 'Two', 'Three'])
)

store.dispatch(clearSuggestions())
