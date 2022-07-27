import {
	CalendarIcon,
	EmojiHappyIcon,
	LocationMarkerIcon,
	PhotographIcon,
	SearchCircleIcon,
} from '@heroicons/react/outline';
import React, { useRef, useState } from 'react';

function TweetBox() {
	const [input, setInput] = useState<string>('');
	const [imageUrlBoxIsOpen, setImageUrlBoxIsOpen] = useState<boolean>(false);
	const [image, setImage] = useState<string>();

	const imageInputRef = useRef<HTMLInputElement>(null);
	const addImageToTweet = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		if (!imageInputRef.current?.value) return;
		setImage(imageInputRef.current.value);
		imageInputRef.current.value = '';
		setImageUrlBoxIsOpen(false);
	};

	return (
		<div className='flex space-x-2 p-5'>
			<img
				className='h-14 w-14 rounded-full object-cover mt-4'
				src='https://links.papareact.com/gll'
				alt=''
			/>

			<div className='flex flex-1 pl-2'>
				<form className='flex flex-1 flex-col'>
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						type='text'
						placeholder="What's happening"
						className='h-24 w-full text-xl outline-none placeholder:text-xl'
					/>
					<div className='flex items-center'>
						<div className='flex space-x-2 flex-1 text-twitter'>
							<PhotographIcon
								onClick={() => setImageUrlBoxIsOpen(!imageUrlBoxIsOpen)}
								className='h-5 w-5 transition-transform duration-150 ease-out hover:scale-150'
							/>
							<SearchCircleIcon className='h-5 w-5' />
							<EmojiHappyIcon className='h-5 w-5' />
							<CalendarIcon className='h-5 w-5' />
							<LocationMarkerIcon className='h-5 w-5' />
						</div>
						<button
							disabled={!input}
							className='bg-twitter px-5 py-2 font-bold text-white rounded-full disabled:opacity-40'
						>
							Tweet
						</button>
					</div>

					{imageUrlBoxIsOpen && (
						<form className='mt-5 flex rounded-lg bg-twitter/80 py-2 px-4'>
							<input
								ref={imageInputRef}
								className='flex-1 bg-transparent p-2 outline-none placeholder:text-white text-white'
								type='text'
								placeholder='Enter Image URL...'
							/>
							<button
								className='font-bold text-white'
								onClick={addImageToTweet}
							>
								add image
							</button>
						</form>
					)}
					{image && (
						<img
							className='mt-10 h-40 w-fll rounded-xl object-contain shadow-lg'
							src={image}
						/>
					)}
				</form>
			</div>
		</div>
	);
}

export default TweetBox;
