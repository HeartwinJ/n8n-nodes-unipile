import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

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
	accountIdField({ resource: 'linkedin', operation: 'linkedinGetCompanyProfile' }),
];
