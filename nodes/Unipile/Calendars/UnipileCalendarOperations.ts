import type { INodeProperties } from 'n8n-workflow';

export const unipileCalendarOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['calendar'] } },
		options: [
			{
				name: 'Create Event',
				value: 'calendarCreateEvent',
				action: 'Create an event',
				description: 'POST /calendars/{calendarId}/events',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/calendars/{{$parameter["calendarId"]}}/events',
						body: '={{ JSON.parse($parameter["body"]) }}',
					},
				},
			},
			{
				name: 'Delete Event',
				value: 'calendarDeleteEvent',
				action: 'Delete an event',
				description: 'DELETE /calendars/{calendarId}/events/{eventId}',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/api/v1/calendars/{{$parameter["calendarId"]}}/events/{{$parameter["eventId"]}}',
					},
				},
			},
			{
				name: 'Edit Event',
				value: 'calendarEditEvent',
				action: 'Edit an event',
				description: 'PATCH /calendars/{calendarId}/events/{eventId}',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/api/v1/calendars/{{$parameter["calendarId"]}}/events/{{$parameter["eventId"]}}',
						body: '={{ JSON.parse($parameter["body"]) }}',
					},
				},
			},
			{
				name: 'Get Calendar',
				value: 'calendarGet',
				action: 'Retrieve a calendar',
				description: 'GET /calendars/{calendarId}',
				routing: {
					request: { method: 'GET', url: '=/api/v1/calendars/{{$parameter["calendarId"]}}' },
				},
			},
			{
				name: 'Get Event',
				value: 'calendarGetEvent',
				action: 'Retrieve an event',
				description: 'GET /calendars/{calendarId}/events/{eventId}',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/calendars/{{$parameter["calendarId"]}}/events/{{$parameter["eventId"]}}',
					},
				},
			},
			{
				name: 'List Calendars',
				value: 'calendarList',
				action: 'List all calendars',
				description: 'GET /calendars',
				routing: { request: { method: 'GET', url: '/api/v1/calendars' } },
			},
			{
				name: 'List Events',
				value: 'calendarListEvents',
				action: 'Retrieve all events from a calendar',
				description: 'GET /calendars/{calendarId}/events',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/calendars/{{$parameter["calendarId"]}}/events',
					},
				},
			},
		],
		default: 'calendarList',
	},
];
