import type { INodeProperties } from 'n8n-workflow';

export const unipileMessagingOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['messaging'] } },
		options: [
			{
				name: 'Forward Message',
				value: 'messageForward',
				action: 'Forward a message',
				description: 'POST /messages/{messageId}/forward',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/messages/{{$parameter["messageId"]}}/forward',
					},
				},
			},
			{
				name: 'Get Attendee',
				value: 'attendeeGet',
				action: 'Retrieve an attendee',
				description: 'GET /chat_attendees/{attendeeId}',
				routing: {
					request: { method: 'GET', url: '=/api/v1/chat_attendees/{{$parameter["attendeeId"]}}' },
				},
			},
			{
				name: 'Get Attendee Picture',
				value: 'attendeeGetPicture',
				action: 'Download a chat attendee picture',
				description: 'GET /chat_attendees/{attendeeId}/picture',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/chat_attendees/{{$parameter["attendeeId"]}}/picture',
					},
				},
			},
			{
				name: 'Get Chat',
				value: 'chatGet',
				action: 'Retrieve a chat',
				description: 'GET /chats/{chatId}',
				routing: { request: { method: 'GET', url: '=/api/v1/chats/{{$parameter["chatId"]}}' } },
			},
			{
				name: 'Get Message',
				value: 'messageGet',
				action: 'Retrieve a message',
				description: 'GET /messages/{messageId}',
				routing: {
					request: { method: 'GET', url: '=/api/v1/messages/{{$parameter["messageId"]}}' },
				},
			},
			{
				name: 'Get Message Attachment',
				value: 'messageGetAttachment',
				action: 'Retrieve an attachment from a message',
				description: 'GET /messages/{messageId}/attachments/{attachmentId}',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/messages/{{$parameter["messageId"]}}/attachments/{{$parameter["attachmentId"]}}',
					},
				},
			},
			{
				name: 'List Attendee Chats',
				value: 'attendeeListChats',
				action: 'List all 1 to 1 chats for a given attendee',
				description: 'GET /chat_attendees/{attendeeId}/chats',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/chat_attendees/{{$parameter["attendeeId"]}}/chats',
					},
				},
			},
			{
				name: 'List Attendee Messages',
				value: 'attendeeListMessages',
				action: 'List all messages for a given attendee',
				description: 'GET /chat_attendees/{senderId}/messages',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/chat_attendees/{{$parameter["senderId"]}}/messages',
					},
				},
			},
			{
				name: 'List Attendees',
				value: 'attendeeList',
				action: 'List all attendees',
				description: 'GET /chat_attendees',
				routing: { request: { method: 'GET', url: '/api/v1/chat_attendees' } },
			},
			{
				name: 'List Chat Attendees',
				value: 'chatListAttendees',
				action: 'List all attendees from a chat',
				description: 'GET /chats/{chatId}/attendees',
				routing: {
					request: { method: 'GET', url: '=/api/v1/chats/{{$parameter["chatId"]}}/attendees' },
				},
			},
			{
				name: 'List Chat Messages',
				value: 'chatListMessages',
				action: 'List all messages from chat',
				description: 'GET /chats/{chatId}/messages',
				routing: {
					request: { method: 'GET', url: '=/api/v1/chats/{{$parameter["chatId"]}}/messages' },
				},
			},
			{
				name: 'List Chats',
				value: 'chatList',
				action: 'List all chats',
				description: 'GET /chats',
				routing: { request: { method: 'GET', url: '/api/v1/chats' } },
			},
			{
				name: 'List Messages',
				value: 'messageList',
				action: 'List all messages',
				description: 'GET /messages',
				routing: { request: { method: 'GET', url: '/api/v1/messages' } },
			},
			{
				name: 'Patch Chat',
				value: 'chatPatch',
				action: 'Perform an action on a chat',
				description: 'PATCH /chats/{chatId}',
				routing: {
					request: { method: 'PATCH', url: '=/api/v1/chats/{{$parameter["chatId"]}}' },
				},
			},
			{
				name: 'Send Message in Chat',
				value: 'chatSendMessage',
				action: 'Send a message in chat',
				description: 'POST /chats/{chatId}/messages',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/chats/{{$parameter["chatId"]}}/messages',
						body: '={{ JSON.parse($parameter["body"]) }}',
					},
				},
			},
			{
				name: 'Start Chat',
				value: 'chatStart',
				action: 'Start a new chat',
				description: 'POST /chats',
				routing: {
					request: {
						method: 'POST',
						url: '/api/v1/chats',
						body: '={{ JSON.parse($parameter["body"]) }}',
					},
				},
			},
			{
				name: 'Sync Chat From Start',
				value: 'chatSyncHistory',
				action: 'Synchronize a conversation from its beginning',
				description: 'GET /chats/{chatId}/sync',
				routing: {
					request: { method: 'GET', url: '=/api/v1/chats/{{$parameter["chatId"]}}/sync' },
				},
			},
		],
		default: 'chatList',
	},
];
