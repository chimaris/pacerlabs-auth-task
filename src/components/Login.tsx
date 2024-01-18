"use client";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearLoginError, login } from "../store/slices/authSlice";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Login = () => {
	const dispatch = useDispatch();
	const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
	const error = useSelector((state: RootState) => state.auth.error);
	const router = useRouter();

	// State variables for username and password
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = (e) => {
		e.preventDefault();
		dispatch(login({ username, password }));

		if (error) {
			toast.error(error);
			dispatch(clearLoginError());
		}

		if (isAuthenticated) {
			toast("Login Successfully...");
			setTimeout(() => {
				router.push("/dashboard");
			}, 1000);
		}
	};

	useEffect(() => {
		if (error) {
			toast.error(error);
			dispatch(clearLoginError());
		}
		if (isAuthenticated) {
			toast("Login Successfully...");
			setTimeout(() => {
				router.push("/dashboard");
			}, 1000);
		}
	}, [error, isAuthenticated]);

	return (
		<div className="pt-32 flex items-center justify-center">
			<div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
				<h1 className="text-3xl font-semibold mb-4 text-center">Login</h1>
				<form onSubmit={handleLogin}>
					<div className="mb-4">
						<label htmlFor="username" className="block text-sm font-medium text-gray-600">
							Username:
						</label>
						<input
							type="text"
							id="username"
							name="username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							className="mt-1 p-2 w-full border rounded-md"
							placeholder="Enter your username"
						/>
					</div>
					<div className="mb-6">
						<label htmlFor="password" className="block text-sm font-medium text-gray-600">
							Password:
						</label>
						<input
							type="password"
							id="password"
							name="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="mt-1 p-2 w-full border rounded-md"
							placeholder="Enter your password"
						/>
					</div>
					<button type="submit" className="bg-purple-700 text-white p-2 rounded-md w-full">
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
