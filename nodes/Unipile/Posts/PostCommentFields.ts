import type { INodeProperties } from 'n8n-workflow';

export const postCommentFields: INodeProperties[] = [
	{
		displayName: 'Post ID',
		name: 'postId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['postComment'],
			},
		},
	},
	{
		displayName: 'Body (JSON)',
		name: 'body',
		type: 'json',
		default: '{}',
		description: 'Raw JSON body to send when adding a comment',
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['postComment'],
			},
		},
	},
];
