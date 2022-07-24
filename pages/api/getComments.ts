import { groq } from 'next-sanity';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '../../sanity';

const commentQuery = groq`
*[_type == "comment" && references(*[_type=='tweet' && _id ==$tweetId]._id)]{
  _id, 
  ...
} | order(_createAt desc)
`;
//2a240158-f416-47d0-a12f-71fa4f2b1b6d
type Data = Comment[];

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const { tweetId } = req.body;
	const comments: Comment[] = await sanityClient.fetch(commentQuery, {
		tweetId,
	});

	console.log(comments);
	res.status(200).json(comments);
}
