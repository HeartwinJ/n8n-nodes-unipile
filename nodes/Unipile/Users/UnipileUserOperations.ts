import type { INodeProperties } from 'n8n-workflow';

export const unipileUserOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['user'] } },
		options: [
			{
				name: 'Cancel Invitation',
				value: 'userCancelInvitation',
				action: 'Cancel an invitation',
				description: 'DELETE /users/invite/sent/{invitationId}',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/api/v1/users/invite/sent/{{$parameter["invitationId"]}}',
					},
				},
			},
			{
				name: 'Edit Own Profile',
				value: 'userEditMe',
				action: 'Edit own profile',
				description: 'PATCH /users/me/edit',
				routing: {
					request: {
						method: 'PATCH',
						url: '/api/v1/users/me/edit',
						body: '={{ JSON.parse($parameter["body"]) }}',
					},
				},
			},
			{
				name: 'Get Own Profile',
				value: 'userGetMe',
				action: 'Retrieve own profile',
				description: 'GET /users/me',
				routing: { request: { method: 'GET', url: '/api/v1/users/me' } },
			},
			{
				name: 'Get Profile by Identifier',
				value: 'userGetByIdentifier',
				action: 'Retrieve a profile',
				description: 'GET /users/{identifier}',
				routing: {
					request: { method: 'GET', url: '=/api/v1/users/{{$parameter["identifier"]}}' },
				},
			},
			{
				name: 'Handle Invitation Received',
				value: 'userHandleInvitation',
				action: 'Handle a received invitation',
				description: 'POST /users/invite/received/{invitationId}',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/users/invite/received/{{$parameter["invitationId"]}}',
						body: '={{ JSON.parse($parameter["body"]) }}',
					},
				},
			},
			{
				name: 'List Comments',
				value: 'userListComments',
				action: 'List all comments',
				description: 'GET /users/{identifier}/comments',
				routing: {
					request: { method: 'GET', url: '=/api/v1/users/{{$parameter["identifier"]}}/comments' },
				},
			},
			{
				name: 'List Followers',
				value: 'userListFollowers',
				action: 'List all followers',
				description: 'GET /users/followers',
				routing: { request: { method: 'GET', url: '/api/v1/users/followers' } },
			},
			{
				name: 'List Following',
				value: 'userListFollowing',
				action: 'List all followed accounts',
				description: 'GET /users/following',
				routing: { request: { method: 'GET', url: '/api/v1/users/following' } },
			},
			{
				name: 'List Invitations Received',
				value: 'userListInvitationsReceived',
				action: 'List all invitations received',
				description: 'GET /users/invite/received',
				routing: { request: { method: 'GET', url: '/api/v1/users/invite/received' } },
			},
			{
				name: 'List Invitations Sent',
				value: 'userListInvitationsSent',
				action: 'List all invitations sent',
				description: 'GET /users/invite/sent',
				routing: { request: { method: 'GET', url: '/api/v1/users/invite/sent' } },
			},
			{
				name: 'List Posts',
				value: 'userListPosts',
				action: 'List all posts',
				description: 'GET /users/{identifier}/posts',
				routing: {
					request: { method: 'GET', url: '=/api/v1/users/{{$parameter["identifier"]}}/posts' },
				},
			},
			{
				name: 'List Reactions',
				value: 'userListReactions',
				action: 'List all reactions',
				description: 'GET /users/{identifier}/reactions',
				routing: {
					request: { method: 'GET', url: '=/api/v1/users/{{$parameter["identifier"]}}/reactions' },
				},
			},
			{
				name: 'List Relations',
				value: 'userListRelations',
				action: 'List all relations',
				description: 'GET /users/relations',
				routing: { request: { method: 'GET', url: '/api/v1/users/relations' } },
			},
			{
				name: 'Send Invitation',
				value: 'userSendInvitation',
				action: 'Send an invitation',
				description: 'POST /users/invite',
				routing: {
					request: {
						method: 'POST',
						url: '/api/v1/users/invite',
						body: '={{ JSON.parse($parameter["body"]) }}',
					},
				},
			},
		],
		default: 'userGetMe',
	},
];
