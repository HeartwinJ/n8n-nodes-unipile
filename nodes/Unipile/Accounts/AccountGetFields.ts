import type { INodeProperties } from 'n8n-workflow';

export const accountGetFields: INodeProperties[] = [
	{
		displayName: 'Account ID',
		name: 'accountId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['accountGet'],
			},
		},
	},
];
