import "@styles/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: "400", subsets: ["latin"] });
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
			<body className={poppins.className}>{children}</body>
		</html>
	);
}
