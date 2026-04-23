import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

export const linkedinGetJobPostingsFields: INodeProperties[] = [
	accountIdField({ resource: 'linkedin', operation: 'linkedinGetJobPostings' }),
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Category',
				name: 'category',
				type: 'string',
				default: '',
				description: 'The state of the requested job postings',
				routing: { send: { type: 'query', property: 'category' } },
			},
			{
				displayName: 'Cursor',
				name: 'cursor',
				type: 'string',
				default: '',
				description: 'The cursor for pagination',
				routing: { send: { type: 'query', property: 'cursor' } },
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				typeOptions: { minValue: 1 },
				default: 50,
				description: 'Max number of results to return',
				routing: { send: { type: 'query', property: 'limit' } },
			},
		],
		displayOptions: {
			show: {
				resource: ['linkedin'],
				operation: ['linkedinGetJobPostings'],
			},
		},
	},
];
