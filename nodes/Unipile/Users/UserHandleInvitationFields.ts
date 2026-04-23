import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

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
	accountIdField({
		resource: 'user',
		operation: 'userHandleInvitation',
		sendMode: 'body',
	}),
	{
		displayName: 'Action',
		name: 'action',
		type: 'options',
		default: 'accept',
		required: true,
		options: [
			{ name: 'Accept', value: 'accept', action: 'Accept the invitation' },
			{ name: 'Decline', value: 'decline', action: 'Decline the invitation' },
		],
		routing: { send: { type: 'body', property: 'action' } },
		displayOptions: {
			show: { resource: ['user'], operation: ['userHandleInvitation'] },
		},
	},
	{
		displayName: 'Provider',
		name: 'provider',
		type: 'options',
		default: 'LINKEDIN',
		required: true,
		options: [{ name: 'LinkedIn', value: 'LINKEDIN' }],
		routing: { send: { type: 'body', property: 'provider' } },
		displayOptions: {
			show: { resource: ['user'], operation: ['userHandleInvitation'] },
		},
	},
	{
		displayName: 'Shared Secret',
		name: 'sharedSecret',
		type: 'string',
		typeOptions: { password: true },
		default: '',
		required: true,
		description:
			'Token from LinkedIn retrieved alongside the invitation via List all invitations received',
		routing: { send: { type: 'body', property: 'shared_secret' } },
		displayOptions: {
			show: { resource: ['user'], operation: ['userHandleInvitation'] },
		},
	},
];
