import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

export const calendarGetEventFields: INodeProperties[] = [
	{
		displayName: 'Event ID',
		name: 'eventId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['calendar'],
				operation: ['calendarGetEvent'],
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
				operation: ['calendarGetEvent'],
			},
		},
	},
	accountIdField({ resource: 'calendar', operation: 'calendarGetEvent' }),
];
