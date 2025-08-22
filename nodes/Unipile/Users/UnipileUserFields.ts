import type { INodeProperties } from 'n8n-workflow';
import { userCancelInvitationFields } from './UserCancelInvitationFields';
import { userHandleInvitationFields } from './UserHandleInvitationFields';
import { userEditMeFields } from './UserEditMeFields';
import { userGetMeFields } from './UserGetMeFields';
import { userGetByIdentifierFields } from './UserGetByIdentifierFields';
import { userListPostsFields } from './UserListPostsFields';
import { userListCommentsFields } from './UserListCommentsFields';
import { userListReactionsFields } from './UserListReactionsFields';
import { userListFollowersFields } from './UserListFollowersFields';
import { userListFollowingFields } from './UserListFollowingFields';
import { userListInvitationsReceivedFields } from './UserListInvitationsReceivedFields';
import { userListInvitationsSentFields } from './UserListInvitationsSentFields';
import { userListRelationsFields } from './UserListRelationsFields';
import { userSendInvitationFields } from './UserSendInvitationFields';

export const unipileUserFields: INodeProperties[] = [
	...userCancelInvitationFields,
	...userHandleInvitationFields,
	...userEditMeFields,
	...userGetMeFields,
	...userGetByIdentifierFields,
	...userListPostsFields,
	...userListCommentsFields,
	...userListReactionsFields,
	...userListFollowersFields,
	...userListFollowingFields,
	...userListInvitationsReceivedFields,
	...userListInvitationsSentFields,
	...userListRelationsFields,
	...userSendInvitationFields,
];
