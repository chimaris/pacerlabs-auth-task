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
	// Hardcoded users for demo purposes
	users: [
		{ username: "admin", password: "admin" },
		{ username: "maris", password: "maris" },
		{ username: "idy", password: "1234" },
	],
	error: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state, action: PayloadAction<User>) => {
			state.user = action.payload;
			// state.error = null;

			// console.log("User state ", state.user);
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
		clearLoginError: (state) => {
			state.error = null;
		},
	},
});

export const { login, logout, clearLoginError } = authSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;

export default authSlice.reducer;
