import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthApi, IUpdateUserData } from "../../API/AuthApi";

export const fetchLoginUser = createAsyncThunk(
  "fetch_logined",
  async (payload: { login: string; password: string }, thunk) => {
    try {
      const data = await AuthApi.getLoginUser(payload);
      return data;
    } catch (err: any) {
      return thunk.rejectWithValue(err.response?.data.message);
    }
  }
);

export const updateAuthUser = createAsyncThunk("update_authUser", async (payload: IUpdateUserData, thunk) => {
  try {
    const data = await AuthApi.updateAuthUser(payload);
    return data;
  } catch (err: any) {
    return thunk.rejectWithValue(err.response?.data.message);
  }
});
