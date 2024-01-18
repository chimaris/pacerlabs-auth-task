"use client";
import React from "react";
import Link from "next/link";
import { selectIsAuthenticated, logout } from "../store/slices/authSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

const Navbar: React.FC = () => {
	const isAuthenticated = useAppSelector(selectIsAuthenticated);
	const dispatch = useAppDispatch();

	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<nav>
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
