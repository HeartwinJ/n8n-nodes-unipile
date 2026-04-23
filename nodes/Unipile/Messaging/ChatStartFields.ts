import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

export const chatStartFields: INodeProperties[] = [
	accountIdField({
		resource: 'messaging',
		operation: 'chatStart',
		sendMode: 'body',
	}),
	{
		displayName: 'Attendees IDs (JSON Array)',
		name: 'attendeesIds',
		type: 'json',
		default: '[]',
		required: true,
		description:
			'Provider internal IDs of attendees (LinkedIn: ACo/ACw/AE prefixes; Instagram: messaging ID; WhatsApp: phone format)',
		routing: { send: { type: 'body', property: 'attendees_ids' } },
		displayOptions: { show: { resource: ['messaging'], operation: ['chatStart'] } },
	},
	{
		displayName: 'Text',
		name: 'text',
		type: 'string',
		default: '',
		typeOptions: { rows: 3 },
		description: 'Opening message. Supports some HTML tags for LinkedIn Recruiter.',
		routing: { send: { type: 'body', property: 'text' } },
		displayOptions: { show: { resource: ['messaging'], operation: ['chatStart'] } },
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'LinkedIn Options (JSON)',
				name: 'linkedin',
				type: 'json',
				default: '{}',
				description:
					'LinkedIn-specific options object, e.g. {"api":"classic","inmail":false}',
				routing: { send: { type: 'body', property: 'linkedin' } },
			},
			{
				displayName: 'Subject',
				name: 'subject',
				type: 'string',
				default: '',
				description: 'Conversation subject line',
				routing: { send: { type: 'body', property: 'subject' } },
			},
		],
		displayOptions: { show: { resource: ['messaging'], operation: ['chatStart'] } },
	},
];
