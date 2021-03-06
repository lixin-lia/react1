import {createStore, combineReducers} from 'redux'
import homedata from './home.js'
import kinddata from './kind.js'

const render = combineReducers({
  homedata,
  kinddata
})

const store = createStore(render)

export default store