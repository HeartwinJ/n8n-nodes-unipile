import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

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
	accountIdField({
		resource: 'linkedin',
		operation: 'linkedinSolveCheckpoint',
		sendMode: 'body',
	}),
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
				operation: ['linkedinSolveCheckpoint'],
			},
		},
	},
];
