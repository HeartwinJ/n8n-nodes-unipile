import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

export const emailGetFields: INodeProperties[] = [
	{
		displayName: 'Email ID',
		name: 'emailId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['email'],
				operation: ['emailGet'],
			},
		},
	},
	{
		...accountIdField({
			resource: 'email',
			operation: 'emailGet',
			required: false,
			description: 'The ID of the account (required when using provider uid)',
		}),
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Include Headers',
				name: 'includeHeaders',
				type: 'boolean',
				default: false,
				description: 'Whether to include headers in the response',
				routing: { send: { type: 'query', property: 'include_headers' } },
			},
		],
		displayOptions: {
			show: {
				resource: ['email'],
				operation: ['emailGet'],
			},
		},
	},
];
