import type { INodeProperties } from 'n8n-workflow';

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
	{
		displayName: 'Account ID',
		name: 'accountId',
		type: 'string',
		default: '',
		required: true,
		routing: { send: { type: 'query', property: 'account_id' } },
		displayOptions: {
			show: {
				resource: ['linkedin'],
				operation: ['linkedinGetJobApplicants'],
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
				type: 'string',
				default: '',
				description: 'The maximum number of applicants to return',
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
				description: 'The Linkedin service the applicant depends on',
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
