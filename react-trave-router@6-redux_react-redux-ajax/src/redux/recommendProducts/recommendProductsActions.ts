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

