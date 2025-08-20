import type { INodeProperties } from 'n8n-workflow';

export const accountResendCheckpointFields: INodeProperties[] = [
	{
		displayName: 'Account ID',
		name: 'accountId',
		type: 'string',
		default: '',
		required: true,
		routing: { send: { type: 'body', property: 'account_id' } },
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['accountResendCheckpoint'],
			},
		},
	},
	{
		displayName: 'Provider',
		name: 'provider',
		type: 'string',
		default: '',
		required: true,
		routing: { send: { type: 'body', property: 'provider' } },
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['accountResendCheckpoint'],
			},
		},
	},
];
