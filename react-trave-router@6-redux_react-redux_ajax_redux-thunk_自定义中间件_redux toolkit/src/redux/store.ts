// import { createStore, applyMiddleware } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import languageReducer from './language/languageReducer'
import recommendProductsReducer from './recommendProducts/recommendProductsReducer'
import thunk from 'redux-thunk'
import addLog from './middlewares/addLog'
import { combineReducers } from '@reduxjs/toolkit'
import { productDetailSlice } from './productDetail/slice'

const rootReducers = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
  productDetail: productDetailSlice.reducer
})

const store = createStore(rootReducers, applyMiddleware(thunk, addLog))

export type RootState = ReturnType<typeof store.getState>

export default store