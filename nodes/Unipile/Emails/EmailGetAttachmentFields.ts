import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

export const emailGetAttachmentFields: INodeProperties[] = [
	{
		displayName: 'Email ID',
		name: 'emailId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['email'],
				operation: ['emailGetAttachment'],
			},
		},
	},
	{
		displayName: 'Attachment ID',
		name: 'emailAttachmentId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['email'],
				operation: ['emailGetAttachment'],
			},
		},
	},
	accountIdField({
		resource: 'email',
		operation: 'emailGetAttachment',
		required: false,
	}),
];
