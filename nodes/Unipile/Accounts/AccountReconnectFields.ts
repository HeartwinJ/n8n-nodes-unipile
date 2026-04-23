import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

export const accountReconnectFields: INodeProperties[] = [
	accountIdField({ resource: 'account', operation: 'accountReconnect', sendMode: 'none' }),
	{
		displayName: 'Body (JSON)',
		name: 'body',
		type: 'json',
		default: '{}',
		description: 'Raw JSON body to send when reconnecting an account',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['accountReconnect'],
			},
		},
	},
];
