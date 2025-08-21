import type { INodeProperties } from 'n8n-workflow';

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
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Account ID',
				name: 'accountId',
				type: 'string',
				default: '',
				description: 'The ID of the account (when using provider uid)',
				routing: { send: { type: 'query', property: 'account_id' } },
			},
		],
		displayOptions: {
			show: {
				resource: ['email'],
				operation: ['emailGetAttachment'],
			},
		},
	},
];
