import type { INodeProperties } from 'n8n-workflow';

export const messageGetFields: INodeProperties[] = [
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['messaging'],
				operation: ['messageGet'],
			},
		},
	},
];
