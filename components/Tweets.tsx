import React from 'react';
import { Tweet } from '../typings';
import TimeAgo from 'react-timeago';
interface Props {
	tweet: Tweet;
}

const Tweets = ({ tweet }: Props) => {
	return (
		<div>
			<div>
				<img src={tweet.profileImage} alt='' />
				<div>
					<p>{tweet.username}</p>
					<p className='hidden text-sm text-gray-500'>
						@{tweet.username.replace(/\s+/g, '').toLocaleLowerCase()}
					</p>
					<TimeAgo className='text-sm text-gray-500' date={tweet._createdAt} />
				</div>
			</div>
		</div>
	);
};

export default Tweets;
