import type { INodeProperties } from 'n8n-workflow';

export const chatGetFields: INodeProperties[] = [
	{
		displayName: 'Chat ID',
		name: 'chatId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['messaging'],
				operation: ['chatGet'],
			},
		},
	},
	{
		displayName: 'Account ID',
		name: 'accountId',
		type: 'string',
		default: '',
		routing: { send: { type: 'query', property: 'accountId' } },
		displayOptions: {
			show: {
				resource: ['messaging'],
				operation: ['chatGet'],
			},
		},
	},
];
