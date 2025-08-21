import type { INodeProperties } from 'n8n-workflow';

export const unipileEmailOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['email'] } },
		options: [
			{
				name: 'Create Draft',
				value: 'emailCreateDraft',
				action: 'Create a draft',
				description: 'POST /drafts',
				routing: {
					request: {
						method: 'POST',
						url: '/api/v1/drafts',
						body: '={{ JSON.parse($parameter["body"]) }}',
					},
				},
			},
			{
				name: 'Delete Email',
				value: 'emailDelete',
				action: 'Delete an email',
				description: 'DELETE /emails/{emailId}',
				routing: {
					request: { method: 'DELETE', url: '=/api/v1/emails/{{$parameter["emailId"]}}' },
				},
			},
			{
				name: 'Get Attachment',
				value: 'emailGetAttachment',
				action: 'Retrieve an attachment from an email',
				description: 'GET /emails/{emailId}/attachments/{emailAttachmentId}',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/emails/{{$parameter["emailId"]}}/attachments/{{$parameter["emailAttachmentId"]}}',
					},
				},
			},
			{
				name: 'Get Email',
				value: 'emailGet',
				action: 'Retrieve an email',
				description: 'GET /emails/{emailId}',
				routing: {
					request: { method: 'GET', url: '=/api/v1/emails/{{$parameter["emailId"]}}' },
				},
			},
			{
				name: 'Get Folder',
				value: 'emailGetFolder',
				action: 'Retrieve a folder',
				description: 'GET /folders/{folderId}',
				routing: {
					request: { method: 'GET', url: '=/api/v1/folders/{{$parameter["folderId"]}}' },
				},
			},
			{
				name: 'List Emails',
				value: 'emailList',
				action: 'List all emails',
				description: 'GET /emails',
				routing: { request: { method: 'GET', url: '/api/v1/emails' } },
			},
			{
				name: 'List Folders',
				value: 'emailListFolders',
				action: 'List all folders',
				description: 'GET /folders',
				routing: { request: { method: 'GET', url: '/api/v1/folders' } },
			},
			{
				name: 'Send Email',
				value: 'emailSend',
				action: 'Send an email',
				description: 'POST /emails',
				routing: {
					request: {
						method: 'POST',
						url: '/api/v1/emails',
						body: '={{ JSON.parse($parameter["body"]) }}',
					},
				},
			},
			{
				name: 'Update Email',
				value: 'emailUpdate',
				action: 'Update an email',
				description: 'PUT /emails/{emailId}',
				routing: {
					request: {
						method: 'PUT',
						url: '=/api/v1/emails/{{$parameter["emailId"]}}',
						body: '={{ JSON.parse($parameter["body"]) }}',
					},
				},
			},
		],
		default: 'emailList',
	},
];
