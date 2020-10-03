//importar composeWithDevTools si se hizo el paso opcional numero 6
import { composeWithDevTools } from 'redux-devtools-extension'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {GamesReducer, SearchReducer } from './reducer'

// DefaultState
export const defaultGamesState = {
    pokemon: 50,
}
export const initialStateSearch = {
    loading: false,
    pokemon: [],
    error: ''
}

const rootReducers = combineReducers({
    games: GamesReducer,
    seeker: SearchReducer
})

const store = createStore(rootReducers, composeWithDevTools(
    applyMiddleware(thunk)
))

export default store;