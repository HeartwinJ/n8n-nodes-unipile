import type { INodeProperties } from 'n8n-workflow';

export const linkedinCloseJobPostingFields: INodeProperties[] = [
	{
		displayName: 'Job ID',
		name: 'jobId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['linkedin'],
				operation: ['linkedinCloseJobPosting'],
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
				operation: ['linkedinCloseJobPosting'],
			},
		},
	},
	{
		displayName: 'Service',
		name: 'service',
		type: 'string',
		default: '',
		routing: { send: { type: 'query', property: 'service' } },
		displayOptions: {
			show: {
				resource: ['linkedin'],
				operation: ['linkedinCloseJobPosting'],
			},
		},
	},
];
