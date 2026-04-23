import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

export const calendarEditEventFields: INodeProperties[] = [
	{
		displayName: 'Event ID',
		name: 'eventId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['calendar'],
				operation: ['calendarEditEvent'],
			},
		},
	},
	{
		displayName: 'Calendar ID',
		name: 'calendarId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['calendar'],
				operation: ['calendarEditEvent'],
			},
		},
	},
	accountIdField({ resource: 'calendar', operation: 'calendarEditEvent' }),
	{
		displayName: 'Body (JSON)',
		name: 'body',
		type: 'json',
		default: '{}',
		description: 'Partial event object with fields to update',
		displayOptions: {
			show: {
				resource: ['calendar'],
				operation: ['calendarEditEvent'],
			},
		},
	},
];
