import characterReduser from './charecterData'
import favouriteReduser from './favorite'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  character: characterReduser,
  favourite: favouriteReduser
})

export default (allReducers)