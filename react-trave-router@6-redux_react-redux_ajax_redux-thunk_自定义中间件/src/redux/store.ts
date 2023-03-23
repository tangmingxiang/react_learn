import { createStore, combineReducers, applyMiddleware } from 'redux'
import languageReducer from './language/languageReducer'
import recommendProductsReducer from './recommendProducts/recommendProductsReducer'
import thunk from 'redux-thunk'
import addLog from './middlewares/addLog'

const rootReducers = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer
})

const store = createStore(rootReducers, applyMiddleware(thunk, addLog))

export type RootState = ReturnType<typeof store.getState>

export default store