import type { INodeProperties } from 'n8n-workflow';

export const chatPatchFields: INodeProperties[] = [
	{
		displayName: 'Chat ID',
		name: 'chatId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['messaging'],
				operation: ['chatPatch'],
			},
		},
	},
	{
		displayName: 'Action',
		name: 'action',
		type: 'string',
		default: 'setReadStatus',
		required: true,
		routing: { send: { type: 'body', property: 'action' } },
		displayOptions: {
			show: {
				resource: ['messaging'],
				operation: ['chatPatch'],
			},
		},
	},
	{
		displayName: 'Value',
		name: 'value',
		type: 'string',
		default: 'true',
		required: true,
		routing: { send: { type: 'body', property: 'value' } },
		displayOptions: {
			show: {
				resource: ['messaging'],
				operation: ['chatPatch'],
			},
		},
	},
];
