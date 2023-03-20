import { configureStore } from '@reduxjs/toolkit'
import addGroupReducer from '../features/addGroupSlice'


export const store = configureStore({
    reducer: {
        add_group: addGroupReducer,
    },
})