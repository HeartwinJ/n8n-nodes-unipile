import type { INodeProperties } from 'n8n-workflow';

export const postAddReactionFields: INodeProperties[] = [
	{
		displayName: 'Body (JSON)',
		name: 'body',
		type: 'json',
		default: '{}',
		description: 'Raw JSON body to send when adding a reaction',
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['postAddReaction'],
			},
		},
	},
];
