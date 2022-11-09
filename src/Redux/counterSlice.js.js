import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    counterValue: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
        console.log(state.counterValue)
      state.counterValue += 1
    },
    decrement: (state) => {
        console.log(state.counterValue)
      state.counterValue -= 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer