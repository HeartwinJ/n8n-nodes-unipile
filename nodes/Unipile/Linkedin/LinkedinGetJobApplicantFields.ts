import type { INodeProperties } from 'n8n-workflow';

export const linkedinGetJobApplicantFields: INodeProperties[] = [
	{
		displayName: 'Applicant ID',
		name: 'applicantId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['linkedin'],
				operation: ['linkedinGetJobApplicant'],
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
				operation: ['linkedinGetJobApplicant'],
			},
		},
	},
];
