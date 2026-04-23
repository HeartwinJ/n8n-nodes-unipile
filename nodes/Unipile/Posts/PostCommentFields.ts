import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

export const postCommentFields: INodeProperties[] = [
	{
		displayName: 'Post ID',
		name: 'postId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: { resource: ['post'], operation: ['postComment'] },
		},
	},
	accountIdField({
		resource: 'post',
		operation: 'postComment',
		sendMode: 'body',
	}),
	{
		displayName: 'Text',
		name: 'text',
		type: 'string',
		default: '',
		required: true,
		typeOptions: { rows: 3 },
		description: 'Comment body (1-1250 characters)',
		routing: { send: { type: 'body', property: 'text' } },
		displayOptions: {
			show: { resource: ['post'], operation: ['postComment'] },
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
				description: 'LinkedIn organization ID to comment on behalf of',
				routing: { send: { type: 'body', property: 'as_organization' } },
			},
			{
				displayName: 'Comment ID',
				name: 'commentId',
				type: 'string',
				default: '',
				description: 'ID of the comment being replied to',
				routing: { send: { type: 'body', property: 'comment_id' } },
			},
			{
				displayName: 'External Link',
				name: 'externalLink',
				type: 'string',
				default: '',
				routing: { send: { type: 'body', property: 'external_link' } },
			},
			{
				displayName: 'Mentions (JSON)',
				name: 'mentions',
				type: 'json',
				default: '[]',
				description: 'Array of mention objects with name and profile_id',
				routing: { send: { type: 'body', property: 'mentions' } },
			},
		],
		displayOptions: {
			show: { resource: ['post'], operation: ['postComment'] },
		},
	},
];
