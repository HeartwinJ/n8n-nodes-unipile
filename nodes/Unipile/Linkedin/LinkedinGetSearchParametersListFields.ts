import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

export const linkedinGetSearchParametersListFields: INodeProperties[] = [
	accountIdField({ resource: 'linkedin', operation: 'linkedinGetSearchParametersList' }),
	{
		displayName: 'Type',
		name: 'type',
		type: 'string',
		default: '',
		required: true,
		routing: { send: { type: 'query', property: 'type' } },
		displayOptions: {
			show: {
				resource: ['linkedin'],
				operation: ['linkedinGetSearchParametersList'],
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
				displayName: 'Keywords',
				name: 'keywords',
				type: 'string',
				default: '',
				description: 'Keywords to search for in job postings',
				routing: { send: { type: 'query', property: 'keywords' } },
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
				operation: ['linkedinGetSearchParametersList'],
			},
		},
	},
];
