import type { INodeProperties } from 'n8n-workflow';

export const webhookCreateFields: INodeProperties[] = [
	{
		displayName: 'Request URL',
		name: 'requestUrl',
		type: 'string',
		default: '',
		required: true,
		description: 'The URL that will receive webhook events',
		routing: { send: { type: 'body', property: 'request_url' } },
		displayOptions: {
			show: { resource: ['webhook'], operation: ['webhookCreate'] },
		},
	},
	{
		displayName: 'Source',
		name: 'source',
		type: 'options',
		default: 'messaging',
		required: true,
		description: 'The kind of data to receive',
		options: [
			{ name: 'Messaging', value: 'messaging' },
			{ name: 'Account Status', value: 'account_status' },
			{ name: 'Users', value: 'users' },
			{ name: 'Email', value: 'email' },
			{ name: 'Email Tracking', value: 'email_tracking' },
			{ name: 'Calendar Event', value: 'calendar_event' },
		],
		routing: { send: { type: 'body', property: 'source' } },
		displayOptions: {
			show: { resource: ['webhook'], operation: ['webhookCreate'] },
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
				displayName: 'Account IDs (JSON Array)',
				name: 'accountIds',
				type: 'json',
				default: '[]',
				description:
					'Optional array of account IDs to target. If omitted, applies to all accounts.',
				routing: { send: { type: 'body', property: 'account_ids' } },
			},
			{
				displayName: 'Enabled',
				name: 'enabled',
				type: 'boolean',
				default: true,
				routing: { send: { type: 'body', property: 'enabled' } },
			},
			{
				displayName: 'Events (JSON Array)',
				name: 'events',
				type: 'json',
				default: '[]',
				description:
					'Optional array of event strings (e.g. ["message_received"]) to trigger the webhook',
				routing: { send: { type: 'body', property: 'events' } },
			},
			{
				displayName: 'Format',
				name: 'format',
				type: 'options',
				default: 'json',
				options: [
					{ name: 'JSON', value: 'json' },
					{ name: 'Form', value: 'form' },
				],
				routing: { send: { type: 'body', property: 'format' } },
			},
			{
				displayName: 'Headers (JSON)',
				name: 'headers',
				type: 'json',
				default: '[]',
				description: 'Array of header objects to include when calling your endpoint',
				routing: { send: { type: 'body', property: 'headers' } },
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Helper label to match this webhook to your user',
				routing: { send: { type: 'body', property: 'name' } },
			},
		],
		displayOptions: {
			show: { resource: ['webhook'], operation: ['webhookCreate'] },
		},
	},
];
