import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

export const userEditMeFields: INodeProperties[] = [
	accountIdField({
		resource: 'user',
		operation: 'userEditMe',
		sendMode: 'none',
	}),
	{
		displayName: 'Type',
		name: 'type',
		type: 'options',
		default: 'LINKEDIN',
		required: true,
		options: [{ name: 'LinkedIn', value: 'LINKEDIN' }],
		displayOptions: {
			show: { resource: ['user'], operation: ['userEditMe'] },
		},
	},
	{
		displayName: 'Body (JSON)',
		name: 'body',
		type: 'json',
		default: '{}',
		description:
			'Profile fields to update (headline, summary, skills, etc.). See Unipile docs for full schema.',
		displayOptions: {
			show: { resource: ['user'], operation: ['userEditMe'] },
		},
	},
];
