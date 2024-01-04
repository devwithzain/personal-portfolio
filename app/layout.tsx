import "@styles/globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Muhammad Zain",
	description: "My Personal Portfolio",
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-[#E1E1E1] overflow-hidden font-montreal">
				{children}
			</body>
		</html>
	);
}
