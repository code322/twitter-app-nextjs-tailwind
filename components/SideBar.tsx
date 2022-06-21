import React from 'react';
import {
	BellIcon,
	HashtagIcon,
	BookmarkIcon,
	CollectionIcon,
	DotsCircleHorizontalIcon,
	MailIcon,
	UserIcon,
	HomeIcon,
} from '@heroicons/react/outline';
import SideBarRow from './SideBarRow';
function SideBar() {
	return (
		<div className='flex flex-col'>
			<img className='h-10 w-10' src='https://links.papareact.com/drg' alt='' />
			<SideBarRow Icon={HomeIcon} title='home' />
			<SideBarRow Icon={HashtagIcon} title='Explore' />
			<SideBarRow Icon={BellIcon} title='Notification' />
			<SideBarRow Icon={MailIcon} title='Messages' />
			<SideBarRow Icon={BookmarkIcon} title='Bookmarks' />
			<SideBarRow Icon={CollectionIcon} title='Lists' />
			<SideBarRow Icon={UserIcon} title='Sign In' />
			<SideBarRow Icon={DotsCircleHorizontalIcon} title='More' />
		</div>
	);
}

export default SideBar;