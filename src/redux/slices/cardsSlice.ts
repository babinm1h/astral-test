import { createSlice } from "@reduxjs/toolkit";
import { ICard } from "../../types/entities";
import { fetchCards } from "../thunks/cardsThunks";

export interface ICardsState {
  cards: ICard[];
  isLoading: boolean;
}

const initialState: ICardsState = {
  cards: [],
  isLoading: true,
};

const cardsSlice = createSlice({
  initialState,
  name: "cards",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCards.fulfilled, (state, action) => {
      state.cards = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchCards.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCards.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default cardsSlice.reducer;
