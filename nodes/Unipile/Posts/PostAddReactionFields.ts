import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

export const postAddReactionFields: INodeProperties[] = [
	accountIdField({
		resource: 'post',
		operation: 'postAddReaction',
		sendMode: 'body',
	}),
	{
		displayName: 'Post ID',
		name: 'postId',
		type: 'string',
		default: '',
		required: true,
		routing: { send: { type: 'body', property: 'post_id' } },
		displayOptions: {
			show: { resource: ['post'], operation: ['postAddReaction'] },
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'As Organization',
				name: 'asOrganization',
				type: 'string',
				default: '',
				description: 'LinkedIn organization ID to react on behalf of',
				routing: { send: { type: 'body', property: 'as_organization' } },
			},
			{
				displayName: 'Comment ID',
				name: 'commentId',
				type: 'string',
				default: '',
				description: 'ID of the comment to react to (instead of the post)',
				routing: { send: { type: 'body', property: 'comment_id' } },
			},
			{
				displayName: 'Reaction Type',
				name: 'reactionType',
				type: 'options',
				default: 'like',
				options: [
					{ name: 'Celebrate', value: 'celebrate' },
					{ name: 'Funny', value: 'funny' },
					{ name: 'Insightful', value: 'insightful' },
					{ name: 'Like', value: 'like' },
					{ name: 'Love', value: 'love' },
					{ name: 'Support', value: 'support' },
				],
				description: 'Instagram supports only "like"',
				routing: { send: { type: 'body', property: 'reaction_type' } },
			},
		],
		displayOptions: {
			show: { resource: ['post'], operation: ['postAddReaction'] },
		},
	},
];
