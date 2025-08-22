import type { INodeProperties } from 'n8n-workflow';

export const chatSendMessageFields: INodeProperties[] = [
	{
		displayName: 'Chat ID',
		name: 'chatId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['messaging'],
				operation: ['chatSendMessage'],
			},
		},
	},
	{
		displayName: 'Body (JSON)',
		name: 'body',
		type: 'json',
		default: '{}',
		description: 'Raw JSON body to send a message in the chat',
		displayOptions: {
			show: {
				resource: ['messaging'],
				operation: ['chatSendMessage'],
			},
		},
	},
];
