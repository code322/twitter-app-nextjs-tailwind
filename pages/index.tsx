import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import SideBar from '../components/SideBar';

const Home: NextPage = () => {
	return (
		<div className=''>
			<Head>
				<title>Twitter</title>
			</Head>
			<h1>hello world</h1>

			<main>
				{/* sidebar */}
				<SideBar />

				{/* feed */}

				{/* widgets */}
			</main>
		</div>
	);
};

export default Home;
