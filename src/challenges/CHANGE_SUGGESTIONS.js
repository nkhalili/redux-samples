import C from '../constants'
import expect from 'expect'
import { suggestions, fetching } from '../store/reducers'

const action = {
  type: C.CHANGE_SUGGESTIONS,
  payload: ['Heavenly Ski Resort', 'Heavens Sonohara']
}

const state = {
  fetching: true,
  suggestions: []
}

const expectedState = {
  fetching: false,
  suggestions: ['Heavenly Ski Resort', 'Heavens Sonohara']
}

const result = {
  fetching: fetching(state.fetching, action),
  suggestions: suggestions(state.suggestions, action)
}

expect(result.fetching).toEqual(expectedState.fetching)
expect(result.suggestions).toEqual(expectedState.suggestions)

console.log(`
  CHANGE_SUGGESTIONS PASSED!
`)
