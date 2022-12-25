import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types/entities";
import { fetchLoginUser, updateAuthUser } from "../thunks/authThunks";

export interface IUserState {
  user: null | IUser;
  loginError: string;
  updateError: string;
}

const initialState: IUserState = {
  user: null,
  loginError: ``,
  updateError: ``,
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    setUser(state, action: PayloadAction<null | IUser>) {
      state.user = action.payload as IUser;
    },
    userLogout(state) {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLoginUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(fetchLoginUser.rejected, (state, action) => {
      state.loginError = action.payload as string;
    });

    builder.addCase(updateAuthUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(updateAuthUser.rejected, (state, action) => {
      state.updateError = action.payload as string;
    });
  },
});

export default authSlice.reducer;
export const { setUser, userLogout } = authSlice.actions;
