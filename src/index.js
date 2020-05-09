import storeFactory from './store'
import { randomGoals } from './actions'

const store = storeFactory()

// Even though we called randomGoals twice, it will run once!

store.dispatch(randomGoals())

store.dispatch(randomGoals())
