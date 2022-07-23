import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Feed from '../components/Feed';
import SideBar from '../components/SideBar';
import Widgets from '../components/Widgets';

const Home: NextPage = () => {
	return (
		<div className='mx-auto lg:max-w-6xl max-h-screen overflow-hidden'>
			<Head>
				<title>Twitter</title>
			</Head>
			<main className='grid grid-cols-9'>
				<SideBar />
				<Feed />
				<Widgets />
			</main>
		</div>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
	return {
		props: {},
	};
};
