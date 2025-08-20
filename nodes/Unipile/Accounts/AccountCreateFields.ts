import type { INodeProperties } from 'n8n-workflow';

export const accountCreateFields: INodeProperties[] = [
	{
		displayName: 'Body (JSON)',
		name: 'body',
		type: 'json',
		default: '{}',
		description: 'Raw JSON body to send when connecting an account',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['accountCreate'],
			},
		},
	},
];
