import type { INodeProperties } from 'n8n-workflow';

export const linkedinGetJobApplicantResumeFields: INodeProperties[] = [
	{
		displayName: 'Applicant ID',
		name: 'applicantId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['linkedin'],
				operation: ['linkedinGetJobApplicantResume'],
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
				operation: ['linkedinGetJobApplicantResume'],
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
				displayName: 'Service',
				name: 'service',
				type: 'string',
				default: '',
				description: 'The Linkedin service the applicant depends on',
				routing: { send: { type: 'query', property: 'service' } },
			},
		],
		displayOptions: {
			show: {
				resource: ['linkedin'],
				operation: ['linkedinGetJobApplicantResume'],
			},
		},
	},
];
