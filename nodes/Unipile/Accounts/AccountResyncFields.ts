import type { INodeProperties } from 'n8n-workflow';

export const accountResyncFields: INodeProperties[] = [
	{
		displayName: 'Account ID',
		name: 'accountId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['accountResync'],
			},
		},
	},
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
				type: 'number',
				default: 0,
				description: 'The start of the time span (highest Epoch time in ms)',
				typeOptions: { minValue: 1 },
				routing: { send: { type: 'query', property: 'after' } },
			},
			{
				displayName: 'Before',
				name: 'before',
				type: 'number',
				default: 0,
				description: 'The end of the time span (lowest Epoch time in ms)',
				typeOptions: { minValue: 1 },
				routing: { send: { type: 'query', property: 'before' } },
			},
			{
				displayName: 'Chunk Size',
				name: 'chunk_size',
				type: 'number',
				default: 0,
				description: 'Optional chunk size to use during resync',
				typeOptions: { minValue: 1 },
				routing: { send: { type: 'query', property: 'chunk_size' } },
			},
			{
				displayName: 'Linkedin Product',
				name: 'linkedin_product',
				type: 'string',
				default: '',
				description: 'The Linkedin messaging feature to synchronize',
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
