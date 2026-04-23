import type { INodeProperties } from 'n8n-workflow';

export const chatPatchFields: INodeProperties[] = [
	{
		displayName: 'Chat ID',
		name: 'chatId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['messaging'],
				operation: ['chatPatch'],
			},
		},
	},
	{
		displayName: 'Action',
		name: 'action',
		type: 'options',
		default: 'setReadStatus',
		required: true,
		options: [
			{
				name: 'Add Participant',
				value: 'addParticipant',
				action: 'Add a participant',
				description: 'WhatsApp only; value is a provider ID',
			},
			{
				name: 'Remove Participant',
				value: 'removeParticipant',
				action: 'Remove a participant',
				description: 'WhatsApp only; value is a provider ID',
			},
			{
				name: 'Set Archive Status',
				value: 'setArchiveStatus',
				action: 'Set archive status',
				description: 'WhatsApp only; value is a boolean',
			},
			{
				name: 'Set Label',
				value: 'setLabel',
				action: 'Set a label',
				description: 'WhatsApp only; value is a label name (created if needed)',
			},
			{
				name: 'Set Mute Status',
				value: 'setMuteStatus',
				action: 'Set mute status',
				description: 'WhatsApp and LinkedIn; value is a boolean',
			},
			{
				name: 'Set Pinned Status',
				value: 'setPinnedStatus',
				action: 'Set pinned status',
				description: 'WhatsApp only; value is a boolean',
			},
			{
				name: 'Set Read Status',
				value: 'setReadStatus',
				action: 'Set read status',
				description: 'WhatsApp and LinkedIn; value is a boolean',
			},
		],
		routing: { send: { type: 'body', property: 'action' } },
		displayOptions: {
			show: {
				resource: ['messaging'],
				operation: ['chatPatch'],
			},
		},
	},
	{
		displayName: 'Value',
		name: 'value',
		type: 'string',
		default: '',
		required: true,
		description:
			'Value for the chosen action. Boolean-style actions accept "true" or "false"; participant/label actions take a provider ID or label name.',
		routing: { send: { type: 'body', property: 'value' } },
		displayOptions: {
			show: {
				resource: ['messaging'],
				operation: ['chatPatch'],
			},
		},
	},
];
