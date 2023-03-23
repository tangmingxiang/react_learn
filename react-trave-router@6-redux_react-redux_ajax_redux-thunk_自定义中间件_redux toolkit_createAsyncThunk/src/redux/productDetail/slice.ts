import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface StateType {
  loading: boolean,
  error: string | null,
  data: any
}

const initialState: StateType = {
  loading: true,
  error: null,
  data: null
}

// export const getProductDetail = createAsyncThunk(
//   "productDetail/getProductDetail",
//   async (touristRouteId:string, thunkAPI) => {
//     thunkAPI.dispatch(productDetailSlice.actions.fetchStart)
//     try {
//       const { data } = await axios.get(
//         `http://123.56.149.216:8080/api/touristRoutes/${touristRouteId}`
//       );
//       thunkAPI.dispatch(productDetailSlice.actions.fetchSuccess(data))
//     } catch (error) {
//       thunkAPI.dispatch(productDetailSlice.actions.fetchFail(error instanceof Error ? error.message : "error"))
//     }
//   }
// )

export const getProductDetail = createAsyncThunk(
  "productDetail/getProductDetail",
  async (touristRouteId:string) => {
    const { data } = await axios.get(
      `http://123.56.149.216:8080/api/touristRoutes/${touristRouteId}`
    );
    return data
  }
)

export const productDetailSlice = createSlice({
  name: 'productDetail',
  initialState,
  reducers: {
    // fetchStart: (state) => {
    //   state.loading = true
    // },
    // fetchSuccess: (state, action) => {
    //   state.loading = false
    //   state.data = action.payload
    //   state.error = null
    // },
    // fetchFail: (state, action:PayloadAction<string | null>) => {
    //   state.loading = false
    //   state.error = action.payload
    // }
  },
  extraReducers: {
    [getProductDetail.pending.type]: (state) => {
      state.loading = true
    },
    [getProductDetail.fulfilled.type]: (state, action) => {
      state.loading = false
      state.data = action.payload
      state.error = null
    },
    [getProductDetail.rejected.type]: (state, action) => {
      // console.log(action)
      state.loading = false
      state.error = action.error.message
    }
  }
})
