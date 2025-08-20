import type { INodeProperties } from 'n8n-workflow';

export const unipileWebhookOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['webhook'] } },
		options: [
			{
				name: 'Create Webhook',
				value: 'webhookCreate',
				action: 'Create a webhook',
				description: 'POST /webhooks',
				routing: { request: { method: 'POST', url: '/api/v1/webhooks' } },
			},
			{
				name: 'Delete Webhook',
				value: 'webhookDelete',
				action: 'Delete a webhook',
				description: 'DELETE /webhooks/{webhookId}',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/api/v1/webhooks/{{$parameter["webhookId"]}}',
					},
				},
			},
			{
				name: 'List Webhooks',
				value: 'webhookList',
				action: 'List all webhooks',
				description: 'GET /webhooks',
				routing: { request: { method: 'GET', url: '/api/v1/webhooks' } },
			},
		],
		default: 'webhookList',
	},
];
