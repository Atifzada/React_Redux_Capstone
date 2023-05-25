import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const BaseUrl = 'https://api.coinstats.app/public/v1/coins/';

export const getDetails = createAsyncThunk(
  'getDetails',
  async (id) => {
    try {
      const response = await fetch(`${BaseUrl}${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  },
);

const initialState = {
  cryptoDetails: {},
  isLoading: false,
};

const detailsSlice = createSlice({
  name: 'cryptoDetails',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getDetails.pending, (state) => ({
      ...state,
      isLoading: true,
    }));

    builder.addCase(getDetails.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      cryptoDetails: action.payload.coin,
    }));
  },
});

export default detailsSlice.reducer;
