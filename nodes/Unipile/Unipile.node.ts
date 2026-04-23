import type {
	ILoadOptionsFunctions,
	INodePropertyOptions,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
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
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
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

	methods = {
		loadOptions: {
			async getAccounts(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				const response = (await this.helpers.httpRequestWithAuthentication.call(
					this,
					'unipileApi',
					{
						method: 'GET',
						baseURL: (await this.getCredentials('unipileApi')).dsn as string,
						url: '/api/v1/accounts',
						qs: { limit: 250 },
						json: true,
					},
				)) as { items?: Array<Record<string, unknown>> } | Array<Record<string, unknown>>;

				const items = Array.isArray(response) ? response : response.items ?? [];

				return items.map((account) => {
					const id = String(account.id ?? '');
					const provider = account.type ?? account.provider ?? '';
					const user =
						(account.name as string | undefined) ??
						(account.user_login as string | undefined) ??
						(account.connection_params as { username?: string } | undefined)?.username ??
						'';
					const label = user
						? `${user}${provider ? ` (${provider})` : ''}`
						: provider
							? `${provider} — ${id}`
							: id;
					return { name: label, value: id, description: id };
				});
			},
		},
	};
}
