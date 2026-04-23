import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

export const userListCommentsFields: INodeProperties[] = [
	{
		displayName: 'Identifier',
		name: 'identifier',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['userListComments'],
			},
		},
	},
	accountIdField({ resource: 'user', operation: 'userListComments' }),
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
		],
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['userListComments'],
			},
		},
	},
];
