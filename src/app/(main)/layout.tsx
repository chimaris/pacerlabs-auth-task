import React from "react";
import ProtectedRoutes from "../../components/ProtectRoutes";
import DashboardPage from "./dashboard/page";

const layout = () => {
	return (
		<ProtectedRoutes>
			<DashboardPage />
		</ProtectedRoutes>
	);
};

export default layout;
