import { RefreshIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import { Tweet } from '../typings';
import { fetchTweets } from '../utils/fetchTweets';
import TweetBox from './TweetBox';
import TweetComponent from './Tweets';
import toast, { Toaster } from 'react-hot-toast';
interface Props {
	tweets: Tweet[];
}
function Feed({ tweets: tweetsProp }: Props) {
	const [tweets, setTweets] = useState<Tweet[]>(tweetsProp);
	const handleRefresh = async () => {
		const refreshToast = toast.loading('refreshing...');
		const tweets = await fetchTweets();
		setTweets(tweets);
		toast.success('Feed updated', {
			id: refreshToast,
		});
	};

	return (
		<div className='col-span-7 lg:col-span-5 border-x'>
			<div className='flex items-center justify-between'>
				<h1 className='p-5 pb-0 text-xl font-bold'>Home</h1>
				<RefreshIcon
					onClick={handleRefresh}
					className='mr-5 h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125'
				/>
			</div>

			<div>
				<TweetBox />
			</div>

			<div>
				{/* Feed */}
				{tweetsProp.map((tweet) => (
					<TweetComponent key={tweet._id} tweet={tweet} />
				))}
			</div>
			<Toaster />
		</div>
	);
}

export default Feed;
