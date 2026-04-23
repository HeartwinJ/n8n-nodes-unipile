import type { INodeProperties } from 'n8n-workflow';

type AccountIdSendMode = 'query' | 'body' | 'none';

interface BuildOptions {
	resource: string;
	operation: string;
	required?: boolean;
	sendMode?: AccountIdSendMode;
	sendProperty?: string;
}

/**
 * Unified Account ID field: rendered as a dropdown populated by the node's
 * getAccounts loadOptions method, with n8n's built-in Expression mode for
 * dynamic values. Use sendMode to control how the value is sent to Unipile.
 */
export function accountIdField(opts: BuildOptions): INodeProperties {
	const {
		resource,
		operation,
		required = true,
		sendMode = 'query',
		sendProperty = 'account_id',
	} = opts;

	const base: INodeProperties = {
		displayName: 'Account Name or ID',
		name: 'accountId',
		type: 'options',
		default: '',
		required,
		description:
			'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
		typeOptions: { loadOptionsMethod: 'getAccounts' },
		displayOptions: { show: { resource: [resource], operation: [operation] } },
	};

	if (sendMode !== 'none') {
		base.routing = { send: { type: sendMode, property: sendProperty } };
	}

	return base;
}
