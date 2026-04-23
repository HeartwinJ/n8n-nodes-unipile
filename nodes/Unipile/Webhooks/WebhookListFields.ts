import type { INodeProperties } from 'n8n-workflow';
import { returnAllFields } from '../shared/pagination';

export const webhookListFields: INodeProperties[] = [
	...returnAllFields({ resource: 'webhook', operation: 'webhookList' }),
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
				description: 'A cursor for pagination purposes (ignored when Return All is enabled)',
				routing: { send: { type: 'query', property: 'cursor' } },
			},
		],
		displayOptions: {
			show: {
				resource: ['webhook'],
				operation: ['webhookList'],
				returnAll: [false],
			},
		},
	},
];
