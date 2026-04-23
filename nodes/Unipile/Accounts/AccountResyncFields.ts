import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

export const accountResyncFields: INodeProperties[] = [
	accountIdField({ resource: 'account', operation: 'accountResync', sendMode: 'none' }),
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'After',
				name: 'after',
				type: 'string',
				default: '',
				description: 'The start of the time span (highest Epoch time in ms)',
				routing: { send: { type: 'query', property: 'after' } },
			},
			{
				displayName: 'Before',
				name: 'before',
				type: 'string',
				default: '',
				description: 'The end of the time span (lowest Epoch time in ms)',
				routing: { send: { type: 'query', property: 'before' } },
			},
			{
				displayName: 'Chunk Size',
				name: 'chunkSize',
				type: 'number',
				default: 100,
				description: 'Optional chunk size to use during resync',
				typeOptions: { minValue: 1 },
				routing: { send: { type: 'query', property: 'chunk_size' } },
			},
			{
				displayName: 'LinkedIn Product',
				name: 'linkedinProduct',
				type: 'string',
				default: '',
				description: 'The LinkedIn messaging feature to synchronize',
				routing: { send: { type: 'query', property: 'linkedin_product' } },
			},
			{
				displayName: 'Partial',
				name: 'partial',
				type: 'boolean',
				default: false,
				description: 'Whether to perform a partial resync',
				routing: { send: { type: 'query', property: 'partial' } },
			},
		],
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['accountResync'],
			},
		},
	},
];
