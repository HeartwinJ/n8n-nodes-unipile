import type { INodeProperties } from 'n8n-workflow';

export const chatSyncHistoryFields: INodeProperties[] = [
	{
		displayName: 'Chat ID',
		name: 'chatId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['messaging'],
				operation: ['chatSyncHistory'],
			},
		},
	},
];
