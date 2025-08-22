import type { INodeProperties } from 'n8n-workflow';

export const chatStartFields: INodeProperties[] = [
	{
		displayName: 'Body (JSON)',
		name: 'body',
		type: 'json',
		default: '{}',
		description: 'Raw JSON body to start a new chat',
		displayOptions: { show: { resource: ['messaging'], operation: ['chatStart'] } },
	},
];
