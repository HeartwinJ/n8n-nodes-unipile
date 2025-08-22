import type { INodeProperties } from 'n8n-workflow';

export const userSendInvitationFields: INodeProperties[] = [
	{
		displayName: 'Body (JSON)',
		name: 'body',
		type: 'json',
		default: '{}',
		description: 'Raw JSON body to send an invitation',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['userSendInvitation'],
			},
		},
	},
];
