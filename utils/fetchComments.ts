import { Comment } from '../typings';

export const fetchComments = async (tweetId: string) => {
	const res = await fetch(`/api/getComments?tweetId=${tweetId}`);

	const comment: Comment[] = await res.json();
};
