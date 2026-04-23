import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

const sendEmailCommon: INodeProperties[] = [
	{
		displayName: 'To (JSON Array)',
		name: 'to',
		type: 'json',
		default: '[]',
		required: true,
		description:
			'Recipients as an array of email objects, e.g. [{"identifier":"jane@example.com","display_name":"Jane"}]',
		routing: { send: { type: 'body', property: 'to' } },
	},
	{
		displayName: 'Subject',
		name: 'subject',
		type: 'string',
		default: '',
		routing: { send: { type: 'body', property: 'subject' } },
	},
	{
		displayName: 'Body',
		name: 'body',
		type: 'string',
		default: '',
		required: true,
		typeOptions: { rows: 6 },
		description: 'Email body content (HTML or plain text)',
		routing: { send: { type: 'body', property: 'body' } },
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Attachments (JSON)',
				name: 'attachments',
				type: 'json',
				default: '[]',
				description: 'Array of attachment objects (see Unipile docs for structure)',
				routing: { send: { type: 'body', property: 'attachments' } },
			},
			{
				displayName: 'Bcc (JSON Array)',
				name: 'bcc',
				type: 'json',
				default: '[]',
				description: 'Bcc recipients as array of email objects',
				routing: { send: { type: 'body', property: 'bcc' } },
			},
			{
				displayName: 'Cc (JSON Array)',
				name: 'cc',
				type: 'json',
				default: '[]',
				description: 'Cc recipients as array of email objects',
				routing: { send: { type: 'body', property: 'cc' } },
			},
			{
				displayName: 'Custom Headers (JSON)',
				name: 'customHeaders',
				type: 'json',
				default: '{}',
				description: 'Object of X-prefixed custom headers',
				routing: { send: { type: 'body', property: 'custom_headers' } },
			},
			{
				displayName: 'From (JSON)',
				name: 'from',
				type: 'json',
				default: '{}',
				description: 'Override sender as object, e.g. {"identifier":"me@example.com","display_name":"Me"}',
				routing: { send: { type: 'body', property: 'from' } },
			},
			{
				displayName: 'Reply To',
				name: 'replyTo',
				type: 'string',
				default: '',
				description: 'Provider ID of the email being replied to',
				routing: { send: { type: 'body', property: 'reply_to' } },
			},
			{
				displayName: 'Tracking Options (JSON)',
				name: 'trackingOptions',
				type: 'json',
				default: '{}',
				description: 'Email tracking configuration object',
				routing: { send: { type: 'body', property: 'tracking_options' } },
			},
		],
	},
];

export const emailSendFields: INodeProperties[] = [
	accountIdField({ resource: 'email', operation: 'emailSend', sendMode: 'body' }),
	...sendEmailCommon.map((f) => ({
		...f,
		displayOptions: { show: { resource: ['email'], operation: ['emailSend'] } },
	})),
];
