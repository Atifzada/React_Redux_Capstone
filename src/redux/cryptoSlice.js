import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const BASE_URL = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=20&currency=USD';

export const getCrypto = createAsyncThunk(
  'getData',
  async () => {
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  },
);

const initialState = {
  cryptoArray: [],
  isLoading: false,
};

const cryptoSlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCrypto.pending, (state) => ({
      ...state, isLoading: true,
    }));

    builder.addCase(getCrypto.fulfilled, (state, action) => ({
      ...state, isLoading: false, cryptoArray: action.payload.coins,
    }));
  },
});

export default cryptoSlice.reducer;
