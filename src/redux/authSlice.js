import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signup: (state, action) => {
      const { email, password } = action.payload;
      localStorage.setItem('user', JSON.stringify({ email, password }));
      state.user = { email, password };
    },
    login: (state, action) => {
      const { email, password } = action.payload;
      const storedUser = JSON.parse(localStorage.getItem('user'));

      if (storedUser && storedUser.email === email && storedUser.password === password) {
        state.isAuthenticated = true;
        state.user = storedUser;
        state.error = null;
      } else {
        state.error = 'Invalid email or password';
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('user');
    },
  },
});

export const { signup, login, logout } = authSlice.actions;
export default authSlice.reducer;
