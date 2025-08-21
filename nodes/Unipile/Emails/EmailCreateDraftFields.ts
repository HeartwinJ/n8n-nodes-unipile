import type { INodeProperties } from 'n8n-workflow';

export const emailCreateDraftFields: INodeProperties[] = [
	{
		displayName: 'Body (JSON)',
		name: 'body',
		type: 'json',
		default: '{}',
		description: 'Raw JSON body to send when creating a draft',
		displayOptions: {
			show: {
				resource: ['email'],
				operation: ['emailCreateDraft'],
			},
		},
	},
];
