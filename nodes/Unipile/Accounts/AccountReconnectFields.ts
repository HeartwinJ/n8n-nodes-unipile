import type { INodeProperties } from 'n8n-workflow';

export const accountReconnectFields: INodeProperties[] = [
	{
		displayName: 'Account ID',
		name: 'accountId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['accountReconnect'],
			},
		},
	},
	{
		displayName: 'Body (JSON)',
		name: 'body',
		type: 'json',
		default: '{}',
		description: 'Raw JSON body to send when connecting an account',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['accountReconnect'],
			},
		},
	},
];
