import type { INodeProperties } from 'n8n-workflow';

export const linkedinPerformActionOnMemberFields: INodeProperties[] = [
	{
		displayName: 'User ID',
		name: 'userId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['linkedin'],
				operation: ['linkedinPerformActionOnMember'],
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
				operation: ['linkedinPerformActionOnMember'],
			},
		},
	},
];
