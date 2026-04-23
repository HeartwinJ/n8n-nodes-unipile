import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

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
	accountIdField({ resource: 'linkedin', operation: 'linkedinGetJobPosting' }),
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
