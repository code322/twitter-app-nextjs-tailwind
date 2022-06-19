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
		<div>
			<img className='h-10 w-10' src='https://links.papareact.com/drg' alt='' />

			<SideBarRow Icon={HomeIcon} title='home' />
			<SideBarRow Icon={HashtagIcon} title='Explore' />
			<SideBarRow Icon={BellIcon} title='Notification' />
			<SideBarRow Icon={MailIcon} title='Messages' />
			<SideBarRow Icon={BookmarkIcon} title='Bookmarks' />
			<SideBarRow Icon={CollectionIcon} title='Lists' />
		</div>
	);
}

export default SideBar;
