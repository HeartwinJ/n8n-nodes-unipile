import type { INodeProperties } from 'n8n-workflow';

export const webhookDeleteFields: INodeProperties[] = [
	{
		displayName: 'Webhook ID',
		name: 'webhookId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['webhook'],
				operation: ['webhookDelete'],
			},
		},
	},
];
