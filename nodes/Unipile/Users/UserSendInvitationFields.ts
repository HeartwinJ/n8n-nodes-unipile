import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

export const userSendInvitationFields: INodeProperties[] = [
	accountIdField({
		resource: 'user',
		operation: 'userSendInvitation',
		sendMode: 'body',
	}),
	{
		displayName: 'Provider ID',
		name: 'providerId',
		type: 'string',
		default: '',
		required: true,
		description:
			"The recipient's provider-specific user ID (for Instagram, username may be used)",
		routing: { send: { type: 'body', property: 'provider_id' } },
		displayOptions: {
			show: { resource: ['user'], operation: ['userSendInvitation'] },
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Message',
				name: 'message',
				type: 'string',
				default: '',
				typeOptions: { rows: 3 },
				description: 'Optional invitation message (max 300 characters)',
				routing: { send: { type: 'body', property: 'message' } },
			},
			{
				displayName: 'User Email',
				name: 'userEmail',
				type: 'string',
				default: '',
				description: "Required for LinkedIn invitations in some cases",
				routing: { send: { type: 'body', property: 'user_email' } },
			},
		],
		displayOptions: {
			show: { resource: ['user'], operation: ['userSendInvitation'] },
		},
	},
];
