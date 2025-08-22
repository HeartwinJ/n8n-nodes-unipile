import type { INodeProperties } from 'n8n-workflow';

export const messageForwardFields: INodeProperties[] = [
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['messaging'],
				operation: ['messageForward'],
			},
		},
	},
	{
		displayName: 'Chat ID',
		name: 'chatId',
		type: 'string',
		default: '',
		required: true,
		routing: { send: { type: 'body', property: 'chat_id' } },
		displayOptions: {
			show: {
				resource: ['messaging'],
				operation: ['messageForward'],
			},
		},
	},
];
