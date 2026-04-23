import type { INodeProperties, INodePropertyRouting } from 'n8n-workflow';

interface BuildPaginationFieldsOptions {
	resource: string;
	operation: string;
}

/**
 * Standard "Return All" + "Limit" top-level field pair for list operations.
 * Pair with `paginationOperationRouting` on the operation's routing block.
 */
export function returnAllFields(opts: BuildPaginationFieldsOptions): INodeProperties[] {
	const { resource, operation } = opts;
	return [
		{
			displayName: 'Return All',
			name: 'returnAll',
			type: 'boolean',
			default: false,
			description: 'Whether to return all results or only up to a given limit',
			displayOptions: { show: { resource: [resource], operation: [operation] } },
		},
		{
			displayName: 'Limit',
			name: 'limit',
			type: 'number',
			default: 50,
			description: 'Max number of results to return',
			typeOptions: { minValue: 1 },
			routing: { send: { type: 'query', property: 'limit' } },
			displayOptions: {
				show: {
					resource: [resource],
					operation: [operation],
					returnAll: [false],
				},
			},
		},
	];
}

/**
 * Operation-level routing snippet that enables cursor-based auto-pagination.
 * Controlled by the `returnAll` parameter added by `returnAllFields`.
 * Merge into `routing: { request, send, operations }` of the operation.
 */
export const paginationOperationRouting: Pick<INodePropertyRouting, 'send' | 'operations'> = {
	send: { paginate: '={{ $parameter["returnAll"] }}' },
	operations: {
		pagination: {
			type: 'generic',
			properties: {
				continue: '={{ !!$response.body?.cursor }}',
				request: {
					qs: { cursor: '={{ $response.body?.cursor }}' },
				},
			},
		},
	},
};
