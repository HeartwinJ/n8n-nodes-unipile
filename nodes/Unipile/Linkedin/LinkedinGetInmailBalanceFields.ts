import type { INodeProperties } from 'n8n-workflow';

export const linkedinGetInmailBalanceFields: INodeProperties[] = [
	{
		displayName: 'Account ID',
		name: 'accountId',
		type: 'string',
		default: '',
		required: true,
		routing: { send: { type: 'query', property: 'account_id' } },
		displayOptions: {
			show: {
				resource: ['linkedin'],
				operation: ['linkedinGetInmailBalance'],
			},
		},
	},
];
