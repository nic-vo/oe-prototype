import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			<Head>
				<title>Open Ephys Prototype</title>
				<meta name="description" content="Prototype for a new Open Ephys storefront" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1>Hello there!</h1>
			</main>
		</>
	);
};
