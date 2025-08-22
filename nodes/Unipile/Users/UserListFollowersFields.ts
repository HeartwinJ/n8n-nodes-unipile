import type { INodeProperties } from 'n8n-workflow';

export const userListFollowersFields: INodeProperties[] = [
	{
		displayName: 'User ID',
		name: 'userId',
		type: 'string',
		default: '',
		required: true,
		routing: { send: { type: 'query', property: 'user_id' } },
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['userListFollowers'],
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
				operation: ['userListFollowers'],
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
				operation: ['userListFollowers'],
			},
		},
	},
];
