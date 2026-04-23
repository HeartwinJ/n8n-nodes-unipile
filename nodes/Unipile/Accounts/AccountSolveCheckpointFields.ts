import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

export const accountSolveCheckpointFields: INodeProperties[] = [
	accountIdField({
		resource: 'account',
		operation: 'accountSolveCheckpoint',
		sendMode: 'body',
	}),
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
