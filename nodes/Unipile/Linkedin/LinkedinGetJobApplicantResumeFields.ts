import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

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
	accountIdField({ resource: 'linkedin', operation: 'linkedinGetJobApplicantResume' }),
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
				description: 'The LinkedIn service the applicant depends on',
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
