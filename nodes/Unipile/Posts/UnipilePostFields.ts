import type { INodeProperties } from 'n8n-workflow';
import { postCreateFields } from './PostCreateFields';
import { postGetFields } from './PostGetFields';
import { postListCommentsFields } from './PostListCommentsFields';
import { postCommentFields } from './PostCommentFields';
import { postListReactionsFields } from './PostListReactionsFields';
import { postAddReactionFields } from './PostAddReactionFields';

export const unipilePostFields: INodeProperties[] = [
	...postCreateFields,
	...postGetFields,
	...postListCommentsFields,
	...postCommentFields,
	...postListReactionsFields,
	...postAddReactionFields,
];
