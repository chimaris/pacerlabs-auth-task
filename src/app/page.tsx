import { RootState } from "@/store/store";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Home() {
	// const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
	return (
		<div>
			<h1>Home Page</h1>
			{/* <p>User is {isAuthenticated ? "logged in" : "not logged in"}</p> */}
			<Link href="/login">Login</Link>
			<br />
			<Link href="/logout">Logout</Link>
		</div>
	);
}
