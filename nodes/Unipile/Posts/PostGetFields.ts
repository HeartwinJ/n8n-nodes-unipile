import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

export const postGetFields: INodeProperties[] = [
	{
		displayName: 'Post ID',
		name: 'postId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['postGet'],
			},
		},
	},
	accountIdField({ resource: 'post', operation: 'postGet' }),
];
