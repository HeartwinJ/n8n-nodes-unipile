import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

export const accountResendCheckpointFields: INodeProperties[] = [
	accountIdField({
		resource: 'account',
		operation: 'accountResendCheckpoint',
		sendMode: 'body',
	}),
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
