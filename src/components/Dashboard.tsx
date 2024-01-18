"use client";
import React from "react";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const Dashboard = () => {
	const user = useSelector((state: RootState) => state.auth.user);

	return (
		<div className="pt-32 flex items-center justify-center bg-gray-100">
			<div className="bg-white p-8 rounded-lg shadow-md w-full md:w-2/3 lg:w-1/2">
				<h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
				<div className="mt-8 text-center">
					<p className="text-gray-600 text-3xl">Welcome to your dashboard {user?.username.toUpperCase()}!</p>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
