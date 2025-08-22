import type { INodeProperties } from 'n8n-workflow';

export const linkedinGetRawDataFields: INodeProperties[] = [
	{
		displayName: 'Body (JSON)',
		name: 'body',
		type: 'json',
		default: '{}',
		description: 'Raw JSON payload for the generic LinkedIn endpoint',
		displayOptions: {
			show: {
				resource: ['linkedin'],
				operation: ['linkedinGetRawData'],
			},
		},
	},
];
