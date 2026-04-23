import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

export const emailDeleteFields: INodeProperties[] = [
	{
		displayName: 'Email ID',
		name: 'emailId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['email'],
				operation: ['emailDelete'],
			},
		},
	},
	accountIdField({
		resource: 'email',
		operation: 'emailDelete',
		required: false,
	}),
];
