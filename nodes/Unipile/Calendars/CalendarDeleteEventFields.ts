import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

export const calendarDeleteEventFields: INodeProperties[] = [
	{
		displayName: 'Event ID',
		name: 'eventId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['calendar'],
				operation: ['calendarDeleteEvent'],
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
				operation: ['calendarDeleteEvent'],
			},
		},
	},
	accountIdField({ resource: 'calendar', operation: 'calendarDeleteEvent' }),
];
