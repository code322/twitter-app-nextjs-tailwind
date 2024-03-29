import { useState, useEffect } from 'react';
import React from 'react';
import { Tweet } from '../typings';
import TimeAgo from 'react-timeago';
import {
	ChatAlt2Icon,
	HeartIcon,
	SwitchHorizontalIcon,
	UploadIcon,
} from '@heroicons/react/outline';
import { fetchComments } from '../utils/fetchComments';
import { Comment } from '../typings';
interface Props {
	tweet: Tweet;
}

const Tweets = ({ tweet }: Props) => {
	const [comments, setComments] = useState<Comment[]>([]);
	const refreshComments = async () => {
		const comment: Comment[] = await fetchComments(tweet._id);
		setComments(comment);
	};

	useEffect(() => {
		refreshComments();
	}, []);

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
			<div className='flex justify-between mt-5'>
				<div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
					<ChatAlt2Icon className='h-5 w-5' />
					<p>{comments.length}</p>
				</div>
				<div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
					<SwitchHorizontalIcon className='h-5 w-5' />
				</div>
				<div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
					<HeartIcon className='h-5 w-5' />
				</div>
				<div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
					<UploadIcon className='h-5 w-5' />
				</div>
			</div>
			{comments?.length > 0 && (
				<div className=' my-2 mt-5 max-h-44 space-y-5 overflow-y-scroll border-t border-gray-100 p-5'>
					{comments.map((posts) => {
						return (
							<div className='flex space-x-2 relative' key={posts._id}>
								<hr className='absolute h-8 left-5 top-10 border-x border-gray-200' />
								<img
									src={posts.profileImg}
									alt=''
									className='mt-2 h-7 w-7 rounded-full object-cover '
								/>
								<div>
									<div className='flex items-center space-x-1'>
										<p className='mr-1 font-bold'>{posts.username}</p>
										<p className='hidden text-sm text-gray-500 lg:inline'>
											@{posts.username.replace(/\s+/g, '').toLowerCase()}
										</p>
										<TimeAgo
											className='text-sm text-gray-500'
											date={posts._createdAt}
										/>
									</div>
									<p>{posts.comment}</p>
								</div>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default Tweets;
