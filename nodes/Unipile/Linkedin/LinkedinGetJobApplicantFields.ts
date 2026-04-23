import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

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
	accountIdField({ resource: 'linkedin', operation: 'linkedinGetJobApplicant' }),
];
