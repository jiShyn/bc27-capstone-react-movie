import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "apis/authAPI";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isLoading: false,
  error: null,
};

export const login = createAsyncThunk(
  "authentication/auth/login",
  async (values, { rejectWithValue }) => {
    try {
      const data = await authAPI.login(values);
      // thành công lưu thông tin vào localStorate
      localStorage.setItem("user", JSON.stringify(data));
      console.log("đã lưu vào localStorage");
      //
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("user");
      state.user = null;
      console.log("loged out");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
