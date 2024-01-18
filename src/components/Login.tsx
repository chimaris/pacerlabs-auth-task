"use client";

import { useDispatch } from "react-redux";
import { login } from "../store/slices/authSlice";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
	const dispatch = useDispatch();
	const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
	const error = useSelector((state: RootState) => state.auth.error);
	const router = useRouter();

	const handleLogin = (e) => {
		e.preventDefault();
		const res = dispatch(login({ username: "test", password: "test" }));
		console.log("Login Result ", res, error);
		if (error) {
			return toast.error(error);
		}
		if (isAuthenticated) {
			toast("Login Successfully...");
			setTimeout(() => {
				router.push("/dashboard");
			}, 2000);
		}
	};

	useEffect(() => {
		if (error) {
			toast.error(error);
		}
		if (isAuthenticated) {
			toast("Login Successfully...");
			setTimeout(() => {
				router.push("/dashboard");
			}, 2000);
		}
	}, [error, isAuthenticated]);

	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
				<h1 className="text-3xl font-semibold mb-4">Login</h1>
				<form onSubmit={handleLogin}>
					<div className="mb-4">
						<label htmlFor="username" className="block text-sm font-medium text-gray-600">
							Username:
						</label>
						<input type="text" id="username" name="username" className="mt-1 p-2 w-full border rounded-md" placeholder="Enter your username" />
					</div>
					<div className="mb-6">
						<label htmlFor="password" className="block text-sm font-medium text-gray-600">
							Password:
						</label>
						<input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md" placeholder="Enter your password" />
					</div>
					<button type="submit" className="bg-blue-500 text-white p-2 rounded-md w-full" onClick={handleLogin}>
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
