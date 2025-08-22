import type { INodeProperties } from 'n8n-workflow';

export const linkedinCreateJobPostingFields: INodeProperties[] = [
	{
		displayName: 'Body (JSON)',
		name: 'body',
		type: 'json',
		default: '{}',
		displayOptions: {
			show: {
				resource: ['linkedin'],
				operation: ['linkedinCreateJobPosting'],
			},
		},
	},
];
