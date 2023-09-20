import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { COUNTER } from '../constants/counter'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: COUNTER.DEFAULT,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    decrement: (state) => {
      if (state.value > COUNTER.MIN) {
        state.value -= 1
      }
    },
    increment: (state) => {
      if (state.value < COUNTER.MAX) {
        state.value += 1
      }
    },
    reset: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
  },
})

export const { decrement, increment, reset } = counterSlice.actions

export default counterSlice.reducer
