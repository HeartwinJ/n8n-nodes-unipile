import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

export const calendarListFields: INodeProperties[] = [
	accountIdField({ resource: 'calendar', operation: 'calendarList' }),
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Cursor',
				name: 'cursor',
				type: 'string',
				default: '',
				description: 'A cursor used for pagination',
				routing: { send: { type: 'query', property: 'cursor' } },
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				default: 50,
				description: 'Max number of results to return',
				typeOptions: { minValue: 1 },
				routing: { send: { type: 'query', property: 'limit' } },
			},
			{
				displayName: 'Offset',
				name: 'offset',
				type: 'number',
				default: 0,
				description: 'Offset for pagination',
				typeOptions: { minValue: 0 },
				routing: { send: { type: 'query', property: 'offset' } },
			},
		],
		displayOptions: {
			show: {
				resource: ['calendar'],
				operation: ['calendarList'],
			},
		},
	},
];
