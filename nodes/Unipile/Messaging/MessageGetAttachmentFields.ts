import type { INodeProperties } from 'n8n-workflow';

export const messageGetAttachmentFields: INodeProperties[] = [
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['messaging'],
				operation: ['messageGetAttachment'],
			},
		},
	},
	{
		displayName: 'Attachment ID',
		name: 'attachmentId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['messaging'],
				operation: ['messageGetAttachment'],
			},
		},
	},
];
