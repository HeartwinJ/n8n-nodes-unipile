import type { INodeProperties } from 'n8n-workflow';
import { unipileAccountsOperations } from './Accounts/UnipileAccountOperations';
import { unipileMessagingOperations } from './Messaging/UnipileMessagingOperations';
import { unipileUserOperations } from './Users/UnipileUserOperations';
import { unipilePostOperations } from './Posts/UnipilePostOperations';
import { unipileLinkedinOperations } from './Linkedin/UnipileLinkedinOperations';
import { unipileEmailOperations } from './Emails/UnipileEmailOperations';
import { unipileWebhookOperations } from './Webhooks/UnipileWebhookOperations';
import { unipileCalendarOperations } from './Calendars/UnipileCalendarOperations';

export const unipileOperations: INodeProperties[] = [
	...unipileAccountsOperations,
	...unipileMessagingOperations,
	...unipileUserOperations,
	...unipilePostOperations,
	...unipileLinkedinOperations,
	...unipileEmailOperations,
	...unipileWebhookOperations,
	...unipileCalendarOperations,
];
