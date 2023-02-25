import { FETCH_PRODUCTS_ACTION, FETCH_RECOMMEND_PRODUCTS_START, FETCH_RECOMMEND_PRODUCTS_SUCCESS, FETCH_RECOMMEND_PRODUCTS_ERROR } from './recommendProductsActions'

interface RecommendProductsState {
  productList: any[];
  loading: boolean;
  error: string | null;
}

const defaultState:RecommendProductsState  = {
  loading: true,
  error: null,
  productList: []
}
const recommendProductsActions = (state=defaultState, action: FETCH_PRODUCTS_ACTION): RecommendProductsState => {
  switch (action.type){
    case FETCH_RECOMMEND_PRODUCTS_START:
      return { ...state, loading: true }
    case FETCH_RECOMMEND_PRODUCTS_SUCCESS:
      return { loading: false, error: null, productList: action.payload }
    case FETCH_RECOMMEND_PRODUCTS_ERROR:
      return { ...state, error: action.payload, loading: false }
    default:
      return state
  }
}

export default recommendProductsActions
