import type { INodeProperties } from 'n8n-workflow';

export const postCreateFields: INodeProperties[] = [
	{
		displayName: 'Body (JSON)',
		name: 'body',
		type: 'json',
		default: '{}',
		description: 'Raw JSON body to send when creating a post',
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['postCreate'],
			},
		},
	},
];
