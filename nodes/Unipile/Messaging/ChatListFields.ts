import type { INodeProperties } from 'n8n-workflow';

export const chatListFields: INodeProperties[] = [
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Account ID',
				name: 'account_id',
				type: 'string',
				default: '',
				routing: { send: { type: 'query', property: 'account_id' } },
			},
			{
				displayName: 'Account Type',
				name: 'account_type',
				type: 'string',
				default: '',
				routing: { send: { type: 'query', property: 'account_type' } },
			},
			{
				displayName: 'After',
				name: 'after',
				type: 'string',
				default: '',
				routing: { send: { type: 'query', property: 'after' } },
			},
			{
				displayName: 'Before',
				name: 'before',
				type: 'string',
				default: '',
				routing: { send: { type: 'query', property: 'before' } },
			},
			{
				displayName: 'Cursor',
				name: 'cursor',
				type: 'string',
				default: '',
				routing: { send: { type: 'query', property: 'cursor' } },
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				default: 50,
				description: 'Max number of results to return',
				typeOptions: { minValue: 1 },
				routing: { send: { type: 'query', property: 'limit' } },
			},
			{
				displayName: 'Unread',
				name: 'unread',
				type: 'boolean',
				default: false,
				routing: { send: { type: 'query', property: 'unread' } },
			},
		],
		displayOptions: {
			show: {
				resource: ['messaging'],
				operation: ['chatList'],
			},
		},
	},
];
