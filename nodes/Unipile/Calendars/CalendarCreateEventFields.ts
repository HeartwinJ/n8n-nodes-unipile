import type { INodeProperties } from 'n8n-workflow';

export const calendarCreateEventFields: INodeProperties[] = [
	{
		displayName: 'Calendar ID',
		name: 'calendarId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['calendar'],
				operation: ['calendarCreateEvent'],
			},
		},
	},
	{
		displayName: 'Account ID',
		name: 'accountId',
		type: 'string',
		default: '',
		required: true,
		routing: { send: { type: 'query', property: 'account_id' } },
		displayOptions: {
			show: {
				resource: ['calendar'],
				operation: ['calendarCreateEvent'],
			},
		},
	},
	{
		displayName: 'Body (JSON)',
		name: 'body',
		type: 'json',
		default: '{}',
		description: 'Raw JSON body to send when creating an event',
		displayOptions: {
			show: {
				resource: ['calendar'],
				operation: ['calendarCreateEvent'],
			},
		},
	},
];
