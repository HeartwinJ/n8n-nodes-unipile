import type { INodeProperties } from 'n8n-workflow';
import { emailGetFields } from './EmailGetFields';
import { emailListFields } from './EmailListFields';
import { emailSendFields } from './EmailSendFields';
import { emailUpdateFields } from './EmailUpdateFields';
import { emailDeleteFields } from './EmailDeleteFields';
import { emailGetAttachmentFields } from './EmailGetAttachmentFields';
import { emailListFoldersFields } from './EmailListFoldersFields';
import { emailGetFolderFields } from './EmailGetFolderFields';
import { emailCreateDraftFields } from './EmailCreateDraftFields';

export const unipileEmailFields: INodeProperties[] = [
	...emailCreateDraftFields,
	...emailGetFields,
	...emailGetAttachmentFields,
	...emailGetFolderFields,
	...emailListFields,
	...emailListFoldersFields,
	...emailSendFields,
	...emailUpdateFields,
	...emailDeleteFields,
];
