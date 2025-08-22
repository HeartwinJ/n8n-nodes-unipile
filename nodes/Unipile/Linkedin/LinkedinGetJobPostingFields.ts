import type { INodeProperties } from 'n8n-workflow';

export const linkedinGetJobPostingFields: INodeProperties[] = [
	{
		displayName: 'Job ID',
		name: 'jobId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['linkedin'],
				operation: ['linkedinGetJobPosting'],
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
				operation: ['linkedinGetJobPosting'],
			},
		},
	},
	{
		displayName: 'Service',
		name: 'service',
		type: 'string',
		default: '',
		required: true,
		routing: { send: { type: 'query', property: 'service' } },
		displayOptions: {
			show: {
				resource: ['linkedin'],
				operation: ['linkedinGetJobPosting'],
			},
		},
	},
];
