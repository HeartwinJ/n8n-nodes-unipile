import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

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
	accountIdField({ resource: 'user', operation: 'userCancelInvitation' }),
];
