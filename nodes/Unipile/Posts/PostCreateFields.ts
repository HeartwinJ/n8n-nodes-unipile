import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

export const postCreateFields: INodeProperties[] = [
	accountIdField({
		resource: 'post',
		operation: 'postCreate',
		sendMode: 'body',
	}),
	{
		displayName: 'Text',
		name: 'text',
		type: 'string',
		default: '',
		required: true,
		typeOptions: { rows: 4 },
		description:
			'Post content. LinkedIn mentions use {{index}}; Instagram mentions use @username.',
		routing: { send: { type: 'body', property: 'text' } },
		displayOptions: {
			show: { resource: ['post'], operation: ['postCreate'] },
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
				displayName: 'As Organization',
				name: 'asOrganization',
				type: 'string',
				default: '',
				description: 'LinkedIn organization ID to post on behalf of',
				routing: { send: { type: 'body', property: 'as_organization' } },
			},
			{
				displayName: 'External Link',
				name: 'externalLink',
				type: 'string',
				default: '',
				description: 'LinkedIn preview card URL (must also appear in text)',
				routing: { send: { type: 'body', property: 'external_link' } },
			},
			{
				displayName: 'Include Job Posting',
				name: 'includeJobPosting',
				type: 'string',
				default: '',
				description: 'LinkedIn job posting ID for preview card',
				routing: { send: { type: 'body', property: 'include_job_posting' } },
			},
			{
				displayName: 'Location',
				name: 'location',
				type: 'string',
				default: '',
				description: 'Instagram location tag',
				routing: { send: { type: 'body', property: 'location' } },
			},
			{
				displayName: 'Mentions (JSON)',
				name: 'mentions',
				type: 'json',
				default: '[]',
				description: 'Array of LinkedIn user mention objects',
				routing: { send: { type: 'body', property: 'mentions' } },
			},
			{
				displayName: 'Repost',
				name: 'repost',
				type: 'string',
				default: '',
				description: 'LinkedIn post ID to republish',
				routing: { send: { type: 'body', property: 'repost' } },
			},
		],
		displayOptions: {
			show: { resource: ['post'], operation: ['postCreate'] },
		},
	},
];
