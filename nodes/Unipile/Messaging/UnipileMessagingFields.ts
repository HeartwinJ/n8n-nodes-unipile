import type { INodeProperties } from 'n8n-workflow';
import { attendeeGetFields } from './AttendeeGetFields';
import { attendeeGetPictureFields } from './AttendeeGetPictureFields';
import { attendeeListChatsFields } from './AttendeeListChatsFields';
import { attendeeListMessagesFields } from './AttendeeListMessagesFields';
import { attendeeListFields } from './AttendeeListFields';
import { chatGetFields } from './ChatGetFields';
import { chatListFields } from './ChatListFields';
import { chatListMessagesFields } from './ChatListMessagesFields';
import { chatListAttendeesFields } from './ChatListAttendeesFields';
import { chatPatchFields } from './ChatPatchFields';
import { chatSendMessageFields } from './ChatSendMessageFields';
import { chatStartFields } from './ChatStartFields';
import { chatSyncHistoryFields } from './ChatSyncHistoryFields';
import { messageGetFields } from './MessageGetFields';
import { messageListFields } from './MessageListFields';
import { messageForwardFields } from './MessageForwardFields';
import { messageGetAttachmentFields } from './MessageGetAttachmentFields';

export const unipileMessagingFields: INodeProperties[] = [
	...attendeeGetFields,
	...attendeeGetPictureFields,
	...attendeeListChatsFields,
	...attendeeListMessagesFields,
	...attendeeListFields,
	...chatGetFields,
	...chatListFields,
	...chatListMessagesFields,
	...chatListAttendeesFields,
	...chatPatchFields,
	...chatSendMessageFields,
	...chatStartFields,
	...chatSyncHistoryFields,
	...messageGetFields,
	...messageListFields,
	...messageForwardFields,
	...messageGetAttachmentFields,
];
