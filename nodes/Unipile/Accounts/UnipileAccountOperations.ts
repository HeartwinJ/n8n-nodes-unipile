import type { INodeProperties } from 'n8n-workflow';

export const unipileAccountsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['account'] } },
		options: [
			{
				name: 'Create Account (Native)',
				value: 'accountCreate',
				action: 'Connect an account',
				description: 'POST /accounts',
				routing: {
					request: {
						method: 'POST',
						url: '/api/v1/accounts',
						body: '={{ JSON.parse($parameter["body"]) }}',
					},
				},
			},
			{
				name: 'Delete Account',
				value: 'accountDelete',
				action: 'Delete an account',
				description: 'DELETE /accounts/{accountId}',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/api/v1/accounts/{{$parameter["accountId"]}}',
					},
				},
			},
			{
				name: 'Get Account',
				value: 'accountGet',
				action: 'Retrieve an account',
				description: 'GET /accounts/{accountId}',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/accounts/{{$parameter["accountId"]}}',
					},
				},
			},
			{
				name: 'Hosted Link',
				value: 'accountHostedLink',
				action: 'Connect account via hosted auth',
				description: 'POST /hosted/accounts/link',
				routing: {
					request: {
						method: 'POST',
						url: '/api/v1/hosted/accounts/link',
						body: '={{ JSON.parse($parameter["body"]) }}',
					},
				},
			},
			{
				name: 'List Accounts',
				value: 'accountList',
				action: 'List all accounts',
				description: 'GET /accounts',
				routing: { request: { method: 'GET', url: '/api/v1/accounts' } },
			},
			{
				name: 'Reconnect Account',
				value: 'accountReconnect',
				action: 'Reconnect an account',
				description: 'POST /accounts/{accountId}',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/accounts/{{$parameter["accountId"]}}',
						body: '={{ JSON.parse($parameter["body"]) }}',
					},
				},
			},
			{
				name: 'Resend Checkpoint',
				value: 'accountResendCheckpoint',
				action: 'Resend checkpoint notification',
				description: 'POST /accounts/checkpoint/resend',
				routing: { request: { method: 'POST', url: '/api/v1/accounts/checkpoint/resend' } },
			},
			{
				name: 'Restart Account',
				value: 'accountRestart',
				action: 'Restart an account',
				description: 'POST /accounts/{accountId}/restart',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/accounts/{{$parameter["accountId"]}}/restart',
					},
				},
			},
			{
				name: 'Resync Account',
				value: 'accountResync',
				action: 'Resynchronize account messaging data',
				description: 'GET /accounts/{accountId}/sync',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/accounts/{{$parameter["accountId"]}}/sync',
					},
				},
			},
			{
				name: 'Solve Checkpoint',
				value: 'accountSolveCheckpoint',
				action: 'Solve a code checkpoint',
				description: 'POST /accounts/checkpoint',
				routing: { request: { method: 'POST', url: '/api/v1/accounts/checkpoint' } },
			},
		],
		default: 'accountList',
	},
];
