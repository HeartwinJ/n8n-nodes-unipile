import type { INodeProperties } from 'n8n-workflow';

export const userEditMeFields: INodeProperties[] = [
	{
		displayName: 'Body (JSON)',
		name: 'body',
		type: 'json',
		default: '{}',
		description: 'Raw JSON body to edit your profile',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['userEditMe'],
			},
		},
	},
];
