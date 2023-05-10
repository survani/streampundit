'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import clsx from 'clsx';
import { Lato } from 'next/font/google';
import Footer from './components/footer';
import Navigation from './components/navigation';
import './globals.css';

const queryClient = new QueryClient();

const lato = Lato({
	subsets: ['latin'],
	weight: ['400', '700', '900'],
	variable: '--font-lato',
});

export const metadata = {
	title: 'StreamPundit',
	description: 'A platform that lets you vote for your favorite streamer.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={clsx('bg-cover bg-no-repeat', lato.variable)}>
				<QueryClientProvider client={queryClient}>
					<Navigation />
					{children}
					<Footer />
					<ReactQueryDevtools initialIsOpen={false} />
				</QueryClientProvider>
			</body>
		</html>
	);
}
