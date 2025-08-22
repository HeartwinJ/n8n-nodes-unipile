import type { INodeProperties } from 'n8n-workflow';

export const linkedinSolveCheckpointFields: INodeProperties[] = [
	{
		displayName: 'Draft ID',
		name: 'draftId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['linkedin'],
				operation: ['linkedinSolveCheckpoint'],
			},
		},
	},
	{
		displayName: 'Account ID',
		name: 'accountId',
		type: 'string',
		default: '',
		required: true,
		routing: { send: { type: 'body', property: 'account_id' } },
		displayOptions: {
			show: {
				resource: ['linkedin'],
				operation: ['linkedinGetJobApplicantResume'],
			},
		},
	},
	{
		displayName: 'Input',
		name: 'input',
		type: 'string',
		default: '',
		required: true,
		routing: { send: { type: 'body', property: 'input' } },
		displayOptions: {
			show: {
				resource: ['linkedin'],
				operation: ['linkedinGetJobApplicantResume'],
			},
		},
	},
];
