import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

export const postListCommentsFields: INodeProperties[] = [
	{
		displayName: 'Post ID',
		name: 'postId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['postListComments'],
			},
		},
	},
	accountIdField({ resource: 'post', operation: 'postListComments' }),
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Comment ID',
				name: 'commentId',
				type: 'string',
				default: '',
				description: 'ID of the comment to get replies from',
				routing: { send: { type: 'query', property: 'comment_id' } },
			},
			{
				displayName: 'Cursor',
				name: 'cursor',
				type: 'string',
				default: '',
				description: 'A cursor used for pagination',
				routing: { send: { type: 'query', property: 'cursor' } },
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				default: 50,
				description: 'Max number of results to return',
				typeOptions: { minValue: 1 },
				routing: { send: { type: 'query', property: 'limit' } },
			},
		],
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['postListComments'],
			},
		},
	},
];
