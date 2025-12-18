import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { pageAPI } from '../services/api';

export const fetchPage = createAsyncThunk(
  'content/fetchPage',
  async (slug, { rejectWithValue }) => {
    try {
      const response = await pageAPI.getPage(slug);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch page');
    }
  }
);

const contentSlice = createSlice({
  name: 'content',
  initialState: {
    pages: {},
    currentPage: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearContentError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPage.fulfilled, (state, action) => {
        state.loading = false;
        state.currentPage = action.payload.page;
        state.pages[action.payload.page.slug] = action.payload.page;
      })
      .addCase(fetchPage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearContentError } = contentSlice.actions;
export default contentSlice.reducer;