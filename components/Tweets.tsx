import React from 'react';
import { Tweet } from '../typings';
import TimeAgo from 'react-timeago';
interface Props {
	tweet: Tweet;
}

const Tweets = ({ tweet }: Props) => {
	console.log(tweet.profileImg);
	return (
		<div className='flex flex-col space-x-3 border-y p-5 border-gray-100'>
			<div className='flex space-x-3'>
				<img
					className='h-10 w-10 rounded-full '
					src={tweet.profileImg}
					alt='profile'
				/>
				<div>
					<div className='flex items-center space-x-1'>
						<p className='mr-1 font-bold'>{tweet.username}</p>
						<p className=' text-sm text-gray-500'>
							@{tweet.username.replace(/\s+/g, '').toLocaleLowerCase()}
						</p>
						<TimeAgo
							className='text-sm text-gray-500'
							date={tweet._createdAt}
						/>
					</div>
					<p className='pt-1'>{tweet.text}</p>
					{tweet.image && (
						<img
							className='m-5 ml-0 max-h-60 rounded-lg object-cover shadow-sm'
							src={tweet.image}
							alt=''
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default Tweets;
