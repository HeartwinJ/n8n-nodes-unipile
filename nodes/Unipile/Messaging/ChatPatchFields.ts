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
		description: 'Action to perform on the chat. Value semantics depend on the action.',
		options: [
			{ name: 'Set Read Status', value: 'setReadStatus', description: 'Mark chat read/unread (boolean value). WhatsApp & LinkedIn.' },
			{ name: 'Set Mute Status', value: 'setMuteStatus', description: 'Mute/unmute chat (boolean value). WhatsApp & LinkedIn.' },
			{ name: 'Set Archive Status', value: 'setArchiveStatus', description: 'Archive/unarchive chat (boolean value). WhatsApp only.' },
			{ name: 'Set Pinned Status', value: 'setPinnedStatus', description: 'Pin/unpin chat (boolean value). WhatsApp only.' },
			{ name: 'Add Participant', value: 'addParticipant', description: 'Add a participant by provider ID (string value). WhatsApp only.' },
			{ name: 'Remove Participant', value: 'removeParticipant', description: 'Remove a participant by provider ID (string value). WhatsApp only.' },
			{ name: 'Set Label', value: 'setLabel', description: 'Apply a label (string value, created if needed). WhatsApp only.' },
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
