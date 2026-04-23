import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

export const linkedinEditJobPostingFields: INodeProperties[] = [
	{
		displayName: 'Job ID',
		name: 'jobId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['linkedin'],
				operation: ['linkedinEditJobPosting'],
			},
		},
	},
	accountIdField({ resource: 'linkedin', operation: 'linkedinEditJobPosting' }),
	{
		displayName: 'Body (JSON)',
		name: 'body',
		type: 'json',
		default: '{}',
		displayOptions: {
			show: {
				resource: ['linkedin'],
				operation: ['linkedinEditJobPosting'],
			},
		},
	},
];
