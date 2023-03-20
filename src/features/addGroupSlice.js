import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const addGroupSlice = createSlice({
    name: 'add_group',
    initialState,
    reducers: {
        createGroup: (state, action) => {
            state.value = [...state.value, action.payload];
            localStorage.setItem('groups', JSON.stringify(state.value))
            console.log(state.value)
        }
    },
})

// Action creators are generated for each case reducer function
export const { createGroup } = addGroupSlice.actions

export default addGroupSlice.reducer