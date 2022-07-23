export default {
	name: 'Tweet',
	title: 'Tweet',
	type: 'document',
	fields: [
		{
			name: 'text',
			title: 'Text in Tweet',
			type: 'string',
		},
		{
			name: 'blockTweet',
			title: 'Block Tweet',
			description: 'ADMIN Controls: Toggle if Tweet is deemed inappropriate',
			type: 'boolean',
		},

		{
			name: 'username',
			title: 'Username',
			type: 'string',
			to: { type: 'author' },
		},
		{
			name: 'profileImg',
			title: 'Profile Image',
			type: 'string',
		},
		{
			name: 'image',
			title: 'Tweet Image',
			type: 'string',
		},
	],

	preview: {
		select: {
			title: 'title',
			author: 'author.name',
			media: 'mainImage',
		},
		prepare(selection) {
			const { author } = selection;
			return Object.assign({}, selection, {
				subtitle: author && `by ${author}`,
			});
		},
	},
};
