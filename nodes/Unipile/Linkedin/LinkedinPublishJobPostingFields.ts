import type { INodeProperties } from 'n8n-workflow';

export const linkedinPublishJobPostingFields: INodeProperties[] = [
	{
		displayName: 'Draft ID',
		name: 'draftId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['linkedin'],
				operation: ['linkedinPublishJobPosting'],
			},
		},
	},
	{
		displayName: 'Body (JSON)',
		name: 'body',
		type: 'json',
		default: '{}',
		displayOptions: {
			show: {
				resource: ['linkedin'],
				operation: ['linkedinPublishJobPosting'],
			},
		},
	},
];
