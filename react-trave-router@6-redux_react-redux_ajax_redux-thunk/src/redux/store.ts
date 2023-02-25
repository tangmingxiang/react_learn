import { createStore, combineReducers } from 'redux'
import languageReducer from './language/languageReducer'
import recommendProductsReducer from './recommendProducts/recommendProductsReducer'

const store = createStore(combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer
}))

export type RootState = ReturnType<typeof store.getState>

export default store