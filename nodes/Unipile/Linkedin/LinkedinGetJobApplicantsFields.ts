import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

export const linkedinGetJobApplicantsFields: INodeProperties[] = [
	{
		displayName: 'Job ID',
		name: 'jobId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['linkedin'],
				operation: ['linkedinGetJobApplicants'],
			},
		},
	},
	accountIdField({ resource: 'linkedin', operation: 'linkedinGetJobApplicants' }),
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
				description: 'The cursor for pagination',
				routing: { send: { type: 'query', property: 'cursor' } },
			},
			{
				displayName: 'Keywords',
				name: 'keywords',
				type: 'string',
				default: '',
				description: 'The keywords to filter applicants',
				routing: { send: { type: 'query', property: 'keywords' } },
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
				displayName: 'Ratings',
				name: 'ratings',
				type: 'string',
				default: '',
				description: 'One or more ratings separated by commas',
				routing: { send: { type: 'query', property: 'ratings' } },
			},
			{
				displayName: 'Service',
				name: 'service',
				type: 'string',
				default: '',
				description: 'The LinkedIn service the applicant depends on',
				routing: { send: { type: 'query', property: 'service' } },
			},
		],
		displayOptions: {
			show: {
				resource: ['linkedin'],
				operation: ['linkedinGetJobApplicants'],
			},
		},
	},
];
