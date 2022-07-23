import { createClient } from 'next-sanity';

const config = {
	dataset: process.env.NEXT_PUBLIC_DATASET || 'production',
	projectId: process.env.NEXT_PUBLIC_ID,
	apiVersion: '2021-03-25',
	useCdn: process.env.NODE_ENV === 'production',
};

export const sanityClient = createClient(config);
