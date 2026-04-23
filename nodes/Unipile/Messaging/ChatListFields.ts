import type { INodeProperties } from 'n8n-workflow';
import { returnAllFields } from '../shared/pagination';

export const chatListFields: INodeProperties[] = [
	...returnAllFields({ resource: 'messaging', operation: 'chatList' }),
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
				routing: { send: { type: 'query', property: 'account_id' } },
			},
			{
				displayName: 'Account Type',
				name: 'accountType',
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
				description: 'Ignored when Return All is enabled',
				routing: { send: { type: 'query', property: 'cursor' } },
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
