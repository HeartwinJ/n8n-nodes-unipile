import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';
import { returnAllFields } from '../shared/pagination';

export const calendarListFields: INodeProperties[] = [
	accountIdField({ resource: 'calendar', operation: 'calendarList' }),
	...returnAllFields({ resource: 'calendar', operation: 'calendarList' }),
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
				description: 'Ignored when Return All is enabled',
				routing: { send: { type: 'query', property: 'cursor' } },
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
