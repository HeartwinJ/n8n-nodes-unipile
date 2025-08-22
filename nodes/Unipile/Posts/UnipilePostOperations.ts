import type { INodeProperties } from 'n8n-workflow';

export const unipilePostOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['post'] } },
		options: [
			{
				name: 'Add Reaction',
				value: 'postAddReaction',
				action: 'Add a reaction to a post',
				description: 'POST /posts/reaction',
				routing: {
					request: {
						method: 'POST',
						url: '/api/v1/posts/reaction',
						body: '={{ JSON.parse($parameter["body"]) }}',
					},
				},
			},
			{
				name: 'Comment Post',
				value: 'postComment',
				action: 'Comment a post',
				description: 'POST /posts/{postId}/comments',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/posts/{{$parameter["postId"]}}/comments',
						body: '={{ JSON.parse($parameter["body"]) }}',
					},
				},
			},
			{
				name: 'Create Post',
				value: 'postCreate',
				action: 'Create a post',
				description: 'POST /posts',
				routing: {
					request: {
						method: 'POST',
						url: '/api/v1/posts',
						body: '={{ JSON.parse($parameter["body"]) }}',
					},
				},
			},
			{
				name: 'Get Post',
				value: 'postGet',
				action: 'Retrieve a post',
				description: 'GET /posts/{postId}',
				routing: {
					request: { method: 'GET', url: '=/api/v1/posts/{{$parameter["postId"]}}' },
				},
			},
			{
				name: 'List Post Comments',
				value: 'postListComments',
				action: 'List all comments from a post',
				description: 'GET /posts/{postId}/comments',
				routing: {
					request: { method: 'GET', url: '=/api/v1/posts/{{$parameter["postId"]}}/comments' },
				},
			},
			{
				name: 'List Post Reactions',
				value: 'postListReactions',
				action: 'List all reactions from a post',
				description: 'GET /posts/{postId}/reactions',
				routing: {
					request: { method: 'GET', url: '=/api/v1/posts/{{$parameter["postId"]}}/reactions' },
				},
			},
		],
		default: 'postGet',
	},
];
