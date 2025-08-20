import type { INodeProperties } from 'n8n-workflow';

export const accountSolveCheckpointFields: INodeProperties[] = [
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
				operation: ['accountSolveCheckpoint'],
			},
		},
	},
	{
		displayName: 'Code',
		name: 'code',
		type: 'string',
		default: '',
		required: true,
		routing: { send: { type: 'body', property: 'code' } },
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['accountSolveCheckpoint'],
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
				operation: ['accountSolveCheckpoint'],
			},
		},
	},
];
