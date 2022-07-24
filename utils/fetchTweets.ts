import { Tweet } from '../typings';
const { URL } = process.env;
export const fetchTweets = async () => {
	const res = await fetch(URL + '/api/getTweets');

	const data = await res.json();
	const tweets: Tweet[] = data.tweets;

	return tweets;
};
