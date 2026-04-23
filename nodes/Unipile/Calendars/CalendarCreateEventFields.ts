import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

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
	accountIdField({ resource: 'calendar', operation: 'calendarCreateEvent' }),
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: '',
		required: true,
		routing: { send: { type: 'body', property: 'title' } },
		displayOptions: {
			show: {
				resource: ['calendar'],
				operation: ['calendarCreateEvent'],
			},
		},
	},
	{
		displayName: 'Start',
		name: 'start',
		type: 'string',
		default: '',
		required: true,
		description: 'Event start date/time (ISO 8601)',
		routing: { send: { type: 'body', property: 'start' } },
		displayOptions: {
			show: {
				resource: ['calendar'],
				operation: ['calendarCreateEvent'],
			},
		},
	},
	{
		displayName: 'End',
		name: 'end',
		type: 'string',
		default: '',
		required: true,
		description: 'Event end date/time (ISO 8601)',
		routing: { send: { type: 'body', property: 'end' } },
		displayOptions: {
			show: {
				resource: ['calendar'],
				operation: ['calendarCreateEvent'],
			},
		},
	},
	{
		displayName: 'Attendees (JSON Array)',
		name: 'attendees',
		type: 'json',
		default: '[]',
		required: true,
		description:
			'Array of attendee objects, e.g. [{"email":"jane@example.com","name":"Jane"}]',
		routing: { send: { type: 'body', property: 'attendees' } },
		displayOptions: {
			show: {
				resource: ['calendar'],
				operation: ['calendarCreateEvent'],
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
				displayName: 'Body',
				name: 'body',
				type: 'string',
				default: '',
				typeOptions: { rows: 4 },
				description: 'Event description / body',
				routing: { send: { type: 'body', property: 'body' } },
			},
			{
				displayName: 'Color',
				name: 'color',
				type: 'color',
				default: '',
				routing: { send: { type: 'body', property: 'color' } },
			},
			{
				displayName: 'Conference (JSON)',
				name: 'conference',
				type: 'json',
				default: '{}',
				description: 'Conference/video details object',
				routing: { send: { type: 'body', property: 'conference' } },
			},
			{
				displayName: 'Location',
				name: 'location',
				type: 'string',
				default: '',
				routing: { send: { type: 'body', property: 'location' } },
			},
			{
				displayName: 'Recurrence (JSON Array)',
				name: 'recurrence',
				type: 'json',
				default: '[]',
				description: 'RFC5545 recurrence rules as array of strings',
				routing: { send: { type: 'body', property: 'recurrence' } },
			},
			{
				displayName: 'Transparency',
				name: 'transparency',
				type: 'options',
				default: 'opaque',
				description: 'Opaque blocks calendar time; transparent does not',
				options: [
					{ name: 'Opaque', value: 'opaque' },
					{ name: 'Transparent', value: 'transparent' },
				],
				routing: { send: { type: 'body', property: 'transparency' } },
			},
			{
				displayName: 'Visibility',
				name: 'visibility',
				type: 'string',
				default: '',
				routing: { send: { type: 'body', property: 'visibility' } },
			},
		],
		displayOptions: {
			show: {
				resource: ['calendar'],
				operation: ['calendarCreateEvent'],
			},
		},
	},
];
