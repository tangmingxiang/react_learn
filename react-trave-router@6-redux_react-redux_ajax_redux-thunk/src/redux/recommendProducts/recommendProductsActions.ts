import { ThunkAction } from "redux-thunk/es/types"
import { RootState } from "../store"
import axios from "axios"
export const FETCH_RECOMMEND_PRODUCTS_START = 'FETCH_RECOMMEND_PRODUCTS_START'
export const FETCH_RECOMMEND_PRODUCTS_SUCCESS = 'FETCH_RECOMMEND_PRODUCTS_SUCCESS'
export const FETCH_RECOMMEND_PRODUCTS_ERROR = 'FETCH_RECOMMEND_PRODUCTS_ERROR'

interface FetchRecommendProductsStartAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_START
}

interface FetchRecommendProductsSuccessAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_SUCCESS,
  payload: any[]
}

interface FetchRecommendProductsErrorAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_ERROR,
  payload: any
}

export type FETCH_PRODUCTS_ACTION =
  | FetchRecommendProductsStartAction
  | FetchRecommendProductsSuccessAction
  | FetchRecommendProductsErrorAction

export const fetchRecommendProductsStartActionCreator = (): FetchRecommendProductsStartAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_START
  }
}

export const fetchRecommendProductsSuccessActionCreator = (data: any): FetchRecommendProductsSuccessAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_SUCCESS,
    payload: data
  }
}

export const fetchRecommendProductsErrorActionCreator = (error: any): FetchRecommendProductsErrorAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_ERROR,
    payload: error
  }
}

// thunk 可以返回一个函数，而不一定是js对象
// 在一个thunk action中可以完成一些列连续的action操作，并可以处理异步逻辑
// 业务逻辑可以从ui层面挪到这里，代码分层会更清晰
// <void, RootState, unknown, FETCH_PRODUCTS_ACTION>：
//    void: giveMeDataActionCreator 返回一个函数类型，所以最终输出是 void，也就是没有任何数据的输出
//    RootState: Store 的 State，即 State 的类型 RootState
//    unknown: 因为没有使用到额外的参数，所以可以写 unknown 或 undefined
//    FETCH_PRODUCTS_ACTION： 在返回的函数中会触发的 action 类型
export const giveMeDataActionCreator = (): ThunkAction<void, RootState, unknown, FETCH_PRODUCTS_ACTION> => async (dispatch, getState) => {
  dispatch(fetchRecommendProductsStartActionCreator())
  try {
    const { data } = await axios.get('/productCollections')
    dispatch(fetchRecommendProductsSuccessActionCreator(data))
  } catch (error) {
    dispatch(fetchRecommendProductsErrorActionCreator(error instanceof Error ? error.message : "error"))
  }
}
