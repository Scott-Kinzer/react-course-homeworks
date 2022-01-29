import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiIntance from '../../api/api.users';

const initialState= {
  users: [],
}

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
      const response = await apiIntance.usersFetch();
      return response;
    }
  )


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

  },

  extraReducers: {
    [fetchUsers.fulfilled]: (state, action) => {
      state.users = action.payload
  }
},


 
})

// Action creators are generated for each case reducer function
export const { addCar } = counterSlice.actions;

export default counterSlice.reducer;