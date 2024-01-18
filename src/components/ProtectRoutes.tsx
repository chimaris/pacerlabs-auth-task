"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/store/hooks";

const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
	const router = useRouter();
	const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

	useEffect(() => {
		if (!isAuthenticated) {
			router.replace("/login");
		} else {
			router.push("/dashboard");
		}
	}, [isAuthenticated]);

	return isAuthenticated ? <div>{children}</div> : <div> </div>;
};

export default ProtectedRoutes;
