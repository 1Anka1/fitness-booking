import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { updateByID } from '../../api/userData';

// axios.defaults.baseURL = 'https://fitness-backend-67fy.onrender.com/';
axios.defaults.baseURL = 'http://localhost:3000/';

export interface UpdateUserParams {
  name?: string;
  email?: string;
  password?: string;
}

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (
    {
      userId,
      params,
    }: {
      userId: string;
      params: UpdateUserParams;
    },
    thunkApi,
  ) => {
    console.log('params', params);

    try {
      const data = await updateByID(userId, params);
      console.log('userdata', data);

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkApi.rejectWithValue(error.response?.data?.message || 'Failed to update user');
      }
    }
  },
);
