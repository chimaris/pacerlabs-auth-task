import Link from "next/link";

export default function Home() {
	return (
		<main className="hero mt-32 text-center flex flex-col items-center justify-center gap-20">
			<div className="hero-content text-shadow-lg">
				<h1 className="text-4xl font-bold mb-0">Welcome to Maris App</h1>
				<p className="text-lg mb-10">Explore and enjoy the content of the application.</p>
				<Link
					href="/login"
					className="cta-button inline-block bg-purple-700 text-white px-4 py-2 rounded-md text-decoration-none font-bold text-base transition duration-300 hover:bg-purple-600">
					Get Started
				</Link>
			</div>
		</main>
	);
}
