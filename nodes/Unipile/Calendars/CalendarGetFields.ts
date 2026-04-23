import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

export const calendarGetFields: INodeProperties[] = [
	{
		displayName: 'Calendar ID',
		name: 'calendarId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['calendar'],
				operation: ['calendarGet'],
			},
		},
	},
	accountIdField({ resource: 'calendar', operation: 'calendarGet' }),
];
