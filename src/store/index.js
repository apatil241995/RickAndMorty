import allReducers from '../Redux files/reducers'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const store = createStore(
  allReducers,
  applyMiddleware(thunk)
)

export default (store)