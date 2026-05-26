import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://fitness-backend-67fy.onrender.com/';

function setAuthHeader(token: string) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function clearAuthHeader() {
  axios.defaults.headers.common.Authorization = ``;
}

export const registration = createAsyncThunk('api/auth/register', async (credentials, thunkApi) => {
  try {
    const { data } = await axios.post('api/auth/register', credentials);
    console.log(data.data);

    setAuthHeader(data.data.token);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const login = createAsyncThunk('api/auth/login', async (credentials, thunkApi) => {
  console.log(credentials);

  try {
    const { data } = await axios.post('api/auth/login', credentials);
    console.log(data.data);

    setAuthHeader(data.data.token);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('api/auth/logout', async (credentials, thunkApi) => {
  try {
    const { data } = await axios.post('api/auth/logout', credentials);
    clearAuthHeader();
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
