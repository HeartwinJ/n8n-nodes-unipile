import type { INodeProperties } from 'n8n-workflow';

export const userCancelInvitationFields: INodeProperties[] = [
	{
		displayName: 'Invitation ID',
		name: 'invitationId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['userCancelInvitation'],
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
				resource: ['user'],
				operation: ['userCancelInvitation'],
			},
		},
	},
];
