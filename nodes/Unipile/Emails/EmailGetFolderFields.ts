import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

export const emailGetFolderFields: INodeProperties[] = [
	{
		displayName: 'Folder ID',
		name: 'folderId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['email'],
				operation: ['emailGetFolder'],
			},
		},
	},
	{
		...accountIdField({
			resource: 'email',
			operation: 'emailGetFolder',
			required: false,
			description: 'The ID of the account (required when using provider uid)',
		}),
	},
];
