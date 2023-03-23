// import { createStore, applyMiddleware } from 'redux'
import languageReducer from './language/languageReducer'
import recommendProductsReducer from './recommendProducts/recommendProductsReducer'
// import thunk from 'redux-thunk'
import addLog from './middlewares/addLog'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { productDetailSlice } from './productDetail/slice'
import { productSearchSlice } from './productSearch/slice'
import { userSlice } from './user/slice'
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,  // 配置存储于 localStorage 中
  whitelist: ["user"] // user 指向 user: userSlice.reducer
}

const rootReducers = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
  productDetail: productDetailSlice.reducer,
  productSearch: productSearchSlice.reducer,
  user: userSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducers)

// 使用 createAsyncThunk，则必须使用 configStore 取代 createStore
// const store = createStore(rootReducers, applyMiddleware(thunk, addLog))
const store = configureStore({
  // reducer: rootReducers,
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(addLog),
  devTools: true
})

const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

const defaultStore = { store, persistor };

export default defaultStore
