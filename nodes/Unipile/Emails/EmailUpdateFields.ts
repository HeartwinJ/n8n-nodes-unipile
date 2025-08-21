import type { INodeProperties } from 'n8n-workflow';

export const emailUpdateFields: INodeProperties[] = [
	{
		displayName: 'Email ID',
		name: 'emailId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['email'],
				operation: ['emailUpdate'],
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
				displayName: 'Body (JSON)',
				name: 'body',
				type: 'json',
				default: '{}',
				description: 'Raw JSON body to send when updating an email',
			},
		],
		displayOptions: {
			show: {
				resource: ['email'],
				operation: ['emailUpdate'],
			},
		},
	},
];
