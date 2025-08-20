import type { INodeProperties } from 'n8n-workflow';

export const webhookCreateFields: INodeProperties[] = [
	{
		displayName: 'Body (JSON)',
		name: 'body',
		type: 'json',
		default: '{}',
		description: 'Raw JSON body to send when creating a webhook',
		displayOptions: {
			show: {
				resource: ['webhook'],
				operation: ['webhookCreate'],
			},
		},
	},
];
