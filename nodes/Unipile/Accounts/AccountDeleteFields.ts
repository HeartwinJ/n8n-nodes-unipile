import type { INodeProperties } from 'n8n-workflow';

export const accountDeleteFields: INodeProperties[] = [
	{
		displayName: 'Account ID',
		name: 'accountId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['accountDelete'],
			},
		},
	},
];
