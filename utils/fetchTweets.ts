import { Tweet } from '../typings';
const { URL } = process.env;
export const fetchTweets = async () => {
	let URL = 'http://localhost:3000';
	const res = await fetch(URL + '/api/getTweets');

	const data = await res.json();
	const tweets: Tweet[] = data.tweets;
	console.log(URL, tweets);

	return tweets;
};
