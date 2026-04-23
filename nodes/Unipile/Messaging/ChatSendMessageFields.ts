import type { INodeProperties } from 'n8n-workflow';

export const chatSendMessageFields: INodeProperties[] = [
	{
		displayName: 'Chat ID',
		name: 'chatId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['messaging'],
				operation: ['chatSendMessage'],
			},
		},
	},
	{
		displayName: 'Text',
		name: 'text',
		type: 'string',
		default: '',
		required: true,
		typeOptions: { rows: 4 },
		routing: { send: { type: 'body', property: 'text' } },
		displayOptions: {
			show: { resource: ['messaging'], operation: ['chatSendMessage'] },
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
				description: 'Enforce send only in chats belonging to this account',
				routing: { send: { type: 'body', property: 'account_id' } },
			},
			{
				displayName: 'Quote ID',
				name: 'quoteId',
				type: 'string',
				default: '',
				description: 'Provider ID of the message being quoted/replied to',
				routing: { send: { type: 'body', property: 'quote_id' } },
			},
			{
				displayName: 'Thread ID',
				name: 'threadId',
				type: 'string',
				default: '',
				description: 'Slack threading only',
				routing: { send: { type: 'body', property: 'thread_id' } },
			},
			{
				displayName: 'Typing Duration',
				name: 'typingDuration',
				type: 'string',
				default: '',
				description: 'WhatsApp only; duration in milliseconds',
				routing: { send: { type: 'body', property: 'typing_duration' } },
			},
		],
		displayOptions: {
			show: { resource: ['messaging'], operation: ['chatSendMessage'] },
		},
	},
];
