import type { INodeProperties } from 'n8n-workflow';

export const emailGetFields: INodeProperties[] = [
	{
		displayName: 'Email ID',
		name: 'emailId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['email'],
				operation: ['emailGet'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Account ID',
				name: 'accountId',
				type: 'string',
				default: '',
				description: 'The ID of the account (when using provider uid)',
				routing: { send: { type: 'query', property: 'account_id' } },
			},
			{
				displayName: 'Include Headers',
				name: 'includeHeaders',
				type: 'boolean',
				default: false,
				description: 'Whether to include headers in the response',
				routing: { send: { type: 'query', property: 'include_headers' } },
			},
		],
		displayOptions: {
			show: {
				resource: ['email'],
				operation: ['emailGet'],
			},
		},
	},
];
