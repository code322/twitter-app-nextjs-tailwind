import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Feed from '../components/Feed';
import SideBar from '../components/SideBar';
import Widgets from '../components/Widgets';

const Home: NextPage = () => {
	return (
		<div className=''>
			<Head>
				<title>Twitter</title>
			</Head>
			<main className='grid grid-cols-9'>
				{/* sidebar */}
				<SideBar />

				{/* feed */}
				<Feed />
				{/* widgets */}

				<Widgets />
			</main>
		</div>
	);
};

export default Home;
