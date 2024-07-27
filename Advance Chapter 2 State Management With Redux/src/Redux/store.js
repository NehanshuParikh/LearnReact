import { createStore } from 'redux'
import ReducerCounter from './reducer'
const store = createStore(ReducerCounter)

export default store