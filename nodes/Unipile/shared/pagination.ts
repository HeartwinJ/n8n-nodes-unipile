import type { INodeProperties } from 'n8n-workflow';

/**
 * Standard pagination collection-option fields for Unipile list endpoints.
 * Emit inside an `additionalFields` collection's `options` array.
 */
export const paginationOptionFields: INodeProperties[] = [
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
];
