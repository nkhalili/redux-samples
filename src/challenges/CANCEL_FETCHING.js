import C from '../constants'
import expect from 'expect'
import { fetching } from '../store/reducers'

const action = {
  type: C.CANCEL_FETCHING
}

const state = true
const expectedState = false

const result = fetching(state, action)

expect(result).toEqual(expectedState)

console.log(`
  CANCEL_FETCHING PASSED!
`)
