import './globals.css'
import { AppInfo } from './info'

export const metadata = {
	title: AppInfo.name,
	description: AppInfo.nameDescription,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
