import type { INodeProperties } from 'n8n-workflow';
import { unipileAccountFields } from './Accounts/UnipileAccountFields';
import { unipileCalendarFields } from './Calendars/UnipileCalendarFields';
import { unipileEmailFields } from './Emails/UnipileEmailFields';
import { unipileLinkedinFields } from './Linkedin/UnipileLinkedinFields';
import { unipileMessagingFields } from './Messaging/UnipileMessagingFields';
import { unipilePostFields } from './Posts/UnipilePostFields';
import { unipileUserFields } from './Users/UnipileUserFields';
import { unipileWebhookFields } from './Webhooks/UnipileWebhookFields';

export const unipileFields: INodeProperties[] = [
	...unipileAccountFields,
	...unipileCalendarFields,
	...unipileEmailFields,
	...unipileLinkedinFields,
	...unipileMessagingFields,
	...unipilePostFields,
	...unipileUserFields,
	...unipileWebhookFields,
];
