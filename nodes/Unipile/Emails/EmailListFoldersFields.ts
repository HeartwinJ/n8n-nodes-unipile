import type { INodeProperties } from 'n8n-workflow';

export const emailListFoldersFields: INodeProperties[] = [
	{
		displayName: 'Account ID',
		name: 'accountId',
		type: 'string',
		default: '',
		description: 'The ID of the account to use',
		routing: { send: { type: 'query', property: 'account_id' } },
		displayOptions: {
			show: {
				resource: ['email'],
				operation: ['emailListFolders'],
			},
		},
	},
];
