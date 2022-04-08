import { RootState } from '../store';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CardModel } from '../../interfaces/card.interface';

const initialState: CardModel = {
	loading: false,
	hasErrors: false,
	data: [],
};

export const fetchData = createAsyncThunk('card/fetchData', async (_, { rejectWithValue }) => {
	try {
		const response = await fetch('https://zoo-animal-api.herokuapp.com/animals/rand/10');
		if (!response.ok) {
			throw new Error('Server Error!');
		}
		const data = await response.json();
		return data;
	} catch (error) {
		return rejectWithValue(error);
	}
});

export const cardSlice = createSlice({
	name: 'card',
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchData.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchData.fulfilled, (state, { payload }) => {
			state.data = payload;
			state.loading = false;
			state.hasErrors = false;
		});
		builder.addCase(fetchData.rejected, (state) => {
			state.loading = false;
			state.hasErrors = true;
		});
	},
});

export const cardSelector = (state: RootState) => state.card;

export default cardSlice.reducer;
