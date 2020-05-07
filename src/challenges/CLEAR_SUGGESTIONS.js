import C from '../constants'
import expect from 'expect'
import { suggestions } from '../store/reducers'

const action = {
  type: C.CLEAR_SUGGESTIONS
}

const state = ['Heavenly Ski Resort', 'Heavens Sonohara']

const expectedState = []

const result = suggestions(state, action)

expect(result).toEqual(expectedState)

console.log(`
  CLEAR_SUGGESTIONS PASSED!
`)
