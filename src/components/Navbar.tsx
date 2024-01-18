"use client";
import React from "react";
import Link from "next/link";
import { selectIsAuthenticated, logout } from "../store/slices/authSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
	const isAuthenticated = useAppSelector(selectIsAuthenticated);
	const dispatch = useAppDispatch();
	const router = useRouter();

	const handleLogout = () => {
		dispatch(logout());
		router.push("/login");
	};

	return (
		<nav className="flex justify-between p-5">
			<h1>LogoImage</h1>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				{isAuthenticated ? (
					<li>
						<button onClick={handleLogout}>Logout</button>
					</li>
				) : (
					<li>
						<Link href="/login">Login</Link>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default Navbar;
