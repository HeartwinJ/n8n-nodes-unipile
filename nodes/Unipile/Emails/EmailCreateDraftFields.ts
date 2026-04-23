import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

export const emailCreateDraftFields: INodeProperties[] = [
	accountIdField({ resource: 'email', operation: 'emailCreateDraft', sendMode: 'body' }),
	{
		displayName: 'To (JSON Array)',
		name: 'to',
		type: 'json',
		default: '[]',
		required: true,
		description:
			'Recipients as an array of email objects, e.g. [{"identifier":"jane@example.com"}]',
		routing: { send: { type: 'body', property: 'to' } },
		displayOptions: { show: { resource: ['email'], operation: ['emailCreateDraft'] } },
	},
	{
		displayName: 'Subject',
		name: 'subject',
		type: 'string',
		default: '',
		routing: { send: { type: 'body', property: 'subject' } },
		displayOptions: { show: { resource: ['email'], operation: ['emailCreateDraft'] } },
	},
	{
		displayName: 'Body',
		name: 'body',
		type: 'string',
		default: '',
		required: true,
		typeOptions: { rows: 6 },
		description: 'Draft body content (HTML or plain text)',
		routing: { send: { type: 'body', property: 'body' } },
		displayOptions: { show: { resource: ['email'], operation: ['emailCreateDraft'] } },
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Bcc (JSON Array)',
				name: 'bcc',
				type: 'json',
				default: '[]',
				routing: { send: { type: 'body', property: 'bcc' } },
			},
			{
				displayName: 'Cc (JSON Array)',
				name: 'cc',
				type: 'json',
				default: '[]',
				routing: { send: { type: 'body', property: 'cc' } },
			},
			{
				displayName: 'From (JSON)',
				name: 'from',
				type: 'json',
				default: '{}',
				routing: { send: { type: 'body', property: 'from' } },
			},
		],
		displayOptions: { show: { resource: ['email'], operation: ['emailCreateDraft'] } },
	},
];
