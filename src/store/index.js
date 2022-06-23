import allReducers from '../Redux files/reducers'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const composedEnhancer = compose(applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const store = createStore(
  allReducers,
  composedEnhancer
)

export default (store)