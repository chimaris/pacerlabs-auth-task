// redux/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface User {
	username: string;
	password: string;
}

interface AuthState {
	user: User | null;
	isAuthenticated: boolean;
	users: User[];
	error: string | null;
}

const initialState: AuthState = {
	user: null,
	isAuthenticated: false,
	users: [
		{ username: "admin", password: "admin" },
		{ username: "test", password: "test" },
	],
	error: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state, action: PayloadAction<User>) => {
			state.user = action.payload;
			state.error = null; // Reset error when attempting login

			console.log("User state ", state.user);
			if (state.user) {
				state.isAuthenticated = state.users?.some((user) => user.username === state.user?.username && user.password === state.user?.password);
			}
			if (!state.isAuthenticated) {
				state.user = null;
				state.error = "Invalid username or password";
			}
		},
		logout: (state) => {
			state.user = null;
			state.isAuthenticated = false;
		},
	},
});

export const { login, logout } = authSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;

export default authSlice.reducer;
