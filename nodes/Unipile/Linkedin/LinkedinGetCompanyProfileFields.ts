import type { INodeProperties } from 'n8n-workflow';

export const linkedinGetCompanyProfileFields: INodeProperties[] = [
	{
		displayName: 'Identifier',
		name: 'companyIdentifier',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['linkedin'],
				operation: ['linkedinGetCompanyProfile'],
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
				resource: ['linkedin'],
				operation: ['linkedinGetCompanyProfile'],
			},
		},
	},
];
