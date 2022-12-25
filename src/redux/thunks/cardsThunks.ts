import { createAsyncThunk } from "@reduxjs/toolkit";
import { CardsApi } from "../../API/CardsApi";

export const fetchCards = createAsyncThunk("fetch_cards", async (_, thunk) => {
  try {
    const data = await CardsApi.fetchCards();
    return data;
  } catch (err: any) {
    return thunk.rejectWithValue(err.response?.data.message);
  }
});
