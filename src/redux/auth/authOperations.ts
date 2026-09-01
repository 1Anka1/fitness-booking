import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { Club, Pass } from '../../utils/types/types';
import type { RootState } from '../store';

type LoginCredentials = {
  email: string;
  password: string;
};

type RegistrationCredentials = LoginCredentials & {
  fullName: string;
  role: string;
  selectedClub: Club | null;
  selectedPass: Pass | null;
  includeAllClubs: boolean;
  passStartDate: string | null;
  finalPrice: number | null;
};

type AuthData = {
  id: string;
  email: string;
  fullName: string;
  role: string;
  avatar: string | null;
  token: string;
  selectedClub: Club | null;
  selectedPass: Pass | null;
  includeAllClubs: boolean | null;
  passStartDate: string | null;
  finalPrice: number | null;
};

type AuthResponse = {
  message: string;
  data: AuthData;
};

type ThunkConfig = {
  state: RootState;
  rejectValue: string;
};

// axios.defaults.baseURL = 'https://fitness-backend-67fy.onrender.com/';
axios.defaults.baseURL = 'http://localhost:3000/';

function setAuthHeader(token: string) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function clearAuthHeader() {
  axios.defaults.headers.common.Authorization = ``;
}

const getErrorMessage = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    return (
      error.response?.data?.message ||
      error.response?.data?.error ||
      error.message ||
      'Something went wrong'
    );
  }

  return 'Something went wrong';
};

export const registration = createAsyncThunk<AuthResponse, RegistrationCredentials, ThunkConfig>(
  'api/auth/register',
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.post<AuthResponse>('api/auth/register', credentials);

      setAuthHeader(data.data.token);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(getErrorMessage(error));
    }
  },
);

export const login = createAsyncThunk<AuthResponse, LoginCredentials, ThunkConfig>(
  'api/auth/login',
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.post<AuthResponse>('api/auth/login', credentials);
      setAuthHeader(data.data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(getErrorMessage(error));
    }
  },
);

export const refresh = createAsyncThunk<AuthResponse, void, ThunkConfig>(
  'api/auth/refresh',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistToken = state.auth.token;

    if (!persistToken) {
      return thunkApi.rejectWithValue("Can't get token");
    }

    setAuthHeader(persistToken);

    try {
      const { data } = await axios.get<AuthResponse>('api/auth/refresh');

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(getErrorMessage(error));
    }
  },
);

export const logout = createAsyncThunk<unknown, void, ThunkConfig>(
  'api/auth/logout',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.post('api/auth/logout');

      clearAuthHeader();

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(getErrorMessage(error));
    }
  },
);
// export const login = createAsyncThunk('api/auth/login', async (credentials, thunkApi) => {
//   console.log('login', credentials);

//   try {
//     const { data } = await axios.post('api/auth/login', credentials);
//     console.log(data.data);

//     setAuthHeader(data.data.token);
//     return data;
//   } catch (error) {
//     return thunkApi.rejectWithValue(getErrorMessage(error));
//   }
// });

// export const registration = createAsyncThunk('api/auth/register', async (credentials, thunkApi) => {
//   console.log('registration credentials', credentials);

//   try {
//     const { data } = await axios.post('api/auth/register', credentials);
//     console.log('data.data', data.data);

//     setAuthHeader(data.data.token);
//     return data;
//   } catch (error) {
//     return thunkApi.rejectWithValue(getErrorMessage(error));
//   }
// });

// export const logout = createAsyncThunk('api/auth/logout', async (credentials, thunkApi) => {
//   try {
//     const { data } = await axios.post('api/auth/logout', credentials);
//     clearAuthHeader();
//     return data;
//   } catch (error) {
//     return thunkApi.rejectWithValue(getErrorMessage(error));
//   }
// });

// export const refresh = createAsyncThunk('api/auth/refresh', async (credentials, thunkApi) => {
//   const store = thunkApi.getState();
//   const persistToken = store.auth.token;

//   if (persistToken) {
//     setAuthHeader(persistToken);

//     try {
//       const { data } = await axios.get('api/auth/refresh', credentials);
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(getErrorMessage(error));
//     }
//   }
//   return thunkApi.rejectWithValue("Can't get token");
// });
