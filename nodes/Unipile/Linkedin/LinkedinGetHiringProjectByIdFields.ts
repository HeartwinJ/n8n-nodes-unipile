import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

export const linkedinGetHiringProjectByIdFields: INodeProperties[] = [
	{
		displayName: 'Project ID',
		name: 'projectId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['linkedin'],
				operation: ['linkedinGetHiringProjectById'],
			},
		},
	},
	accountIdField({ resource: 'linkedin', operation: 'linkedinGetHiringProjectById' }),
];
