import type { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { NodeConnectionType } from 'n8n-workflow';
import { unipileOperations } from './UnipileOperations';
import { unipileFields } from './UnipileFields';

export class Unipile implements INodeType {
	description: INodeTypeDescription = {
		name: 'unipile',
		displayName: 'Unipile',
		icon: 'file:unipile.svg',
		group: ['transform'],
		version: 1,
		description: 'Interact with Unipile API',
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		defaults: {
			name: 'Unipile',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		credentials: [
			{
				name: 'unipileApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{$credentials.dsn}}',
			url: '',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			// Resource selector
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{ name: 'Account', value: 'account' },
					{ name: 'Calendar', value: 'calendar' },
					{ name: 'Email', value: 'email' },
					{ name: 'LinkedIn', value: 'linkedin' },
					{ name: 'Messaging', value: 'messaging' },
					{ name: 'Post', value: 'post' },
					{ name: 'User', value: 'user' },
					{ name: 'Webhook', value: 'webhook' },
				],
				default: 'account',
			},
			...unipileOperations,
			...unipileFields,
		],
	};
}
