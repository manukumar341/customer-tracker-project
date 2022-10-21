import { configureStore } from '@reduxjs/toolkit'
import customerReducer from '../Customers/CustomersSlice'

const store = configureStore({
  reducer: {
    customer:customerReducer
  }
})

export default store
export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch
