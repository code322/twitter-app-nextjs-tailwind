import React from 'react';
import { Tweet } from '../typings';

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
					<p></p>
				</div>
			</div>
		</div>
	);
};

export default Tweets;
