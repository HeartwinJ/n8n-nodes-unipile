import type { INodeProperties } from 'n8n-workflow';

export const userListPostsFields: INodeProperties[] = [
	{
		displayName: 'Identifier',
		name: 'identifier',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['userListPosts'],
			},
		},
	},
	{
		displayName: 'Account ID',
		name: 'accountId',
		type: 'string',
		default: '',
		required: true,
		routing: { send: { type: 'query', property: 'account_id' } },
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['userListPosts'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFieldsReactions',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Cursor',
				name: 'cursor',
				type: 'string',
				default: '',
				description: 'A cursor used for pagination',
				routing: { send: { type: 'query', property: 'cursor' } },
			},
			{
				displayName: 'Is Company',
				name: 'isCompany',
				type: 'boolean',
				default: false,
				description: 'Whether the posts are from a company',
				routing: { send: { type: 'query', property: 'is_company' } },
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				default: 50,
				description: 'Max number of results to return',
				typeOptions: { minValue: 1 },
				routing: { send: { type: 'query', property: 'limit' } },
			},
		],
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['userListPosts'],
			},
		},
	},
];
