import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { ReactNode } from 'react'

import './globals.css'
import { Providers } from './providers'

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
})
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
})

export const metadata: Metadata = {
	title: 'PoC Blob storage',
	description: 'PoC Blob storage',
}

interface RootLayoutProps {
	children: ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased p-8 min-h-screen flex flex-col justify-center items-center`}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
