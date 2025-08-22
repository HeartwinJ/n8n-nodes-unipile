import type { INodeProperties } from 'n8n-workflow';

export const attendeeGetPictureFields: INodeProperties[] = [
	{
		displayName: 'Attendee ID',
		name: 'attendeeId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['messaging'],
				operation: ['attendeeGetPicture'],
			},
		},
	},
];
