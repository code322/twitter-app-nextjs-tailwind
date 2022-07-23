import type { NextApiRequest, NextApiResponse } from 'next';
import { Tweet } from '../../typings';

type Data = {
	tweets: Tweet[];
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	res.status(200).json({ tweets: [] });
}
