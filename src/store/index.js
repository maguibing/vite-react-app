import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/count'

export default configureStore({
  reducer: {
    counterReducer
  },
})
