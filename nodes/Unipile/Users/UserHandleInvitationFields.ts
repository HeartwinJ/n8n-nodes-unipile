import type { INodeProperties } from 'n8n-workflow';

export const userHandleInvitationFields: INodeProperties[] = [
	{
		displayName: 'Invitation ID',
		name: 'invitationId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['userHandleInvitation'],
			},
		},
	},
	{
		displayName: 'Body (JSON)',
		name: 'body',
		type: 'json',
		default: '{}',
		description: 'Raw JSON body to handle the invitation',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['userHandleInvitation'],
			},
		},
	},
];
