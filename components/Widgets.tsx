import { SearchIcon } from '@heroicons/react/outline';
import React from 'react';
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';

function Widgets() {
	return (
		<div className='mt-2 px-2 col-span-2 hidden lg:inline'>
			{/* Search */}
			<div className='flex items-center space-x-2 bg-gray-100 p-3'>
				<SearchIcon className='h-5 w-5 text-gray-400' />
				<input
					type='text'
					placeholder='Search Twitter'
					className='bg-transparent flex-1 outline-none'
				/>
			</div>
			<div>
				<TwitterTimelineEmbed
					sourceType='profile'
					screenName='nextjs'
					options={{ height: 400 }}
				/>
			</div>
		</div>
	);
}

export default Widgets;
