import type { INodeProperties } from 'n8n-workflow';

export const userGetByIdentifierFields: INodeProperties[] = [
	{
		displayName: 'Identifier',
		name: 'identifier',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['userGetByIdentifier'],
			},
		},
	},
	{
		displayName: 'Account ID',
		name: 'accountId',
		type: 'string',
		default: '',
		required: true,
		routing: { send: { type: 'query', property: 'account_id' } },
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['userGetByIdentifier'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFieldsReactions',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Linkedin API',
				name: 'linkedinApi',
				type: 'string',
				default: '',
				description:
					'The LinkedIn API that should be used to get the profile, if different from classic',
				routing: { send: { type: 'query', property: 'linkedin_api' } },
			},
			{
				displayName: 'Linkedin Sections',
				name: 'linkedinSections',
				type: 'string',
				default: '',
				description: 'The sections that should be synchronized on Linkedin calls',
				routing: { send: { type: 'query', property: 'linkedin_sections' } },
			},
			{
				displayName: 'Notify',
				name: 'notify',
				type: 'boolean',
				default: false,
				description: 'Whether the profile visit should be notified to the viewee or not',
				routing: { send: { type: 'query', property: 'notify' } },
			},
		],
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['userGetByIdentifier'],
			},
		},
	},
];
