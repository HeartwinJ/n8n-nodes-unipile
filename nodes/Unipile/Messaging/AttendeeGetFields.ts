import type { INodeProperties } from 'n8n-workflow';

export const attendeeGetFields: INodeProperties[] = [
	{
		displayName: 'Attendee ID',
		name: 'attendeeId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['messaging'],
				operation: ['attendeeGet'],
			},
		},
	},
];
