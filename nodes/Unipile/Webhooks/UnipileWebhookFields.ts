import type { INodeProperties } from 'n8n-workflow';
import { webhookCreateFields } from './WebhookCreateFields';
import { webhookDeleteFields } from './WebhookDeleteFields';
import { webhookListFields } from './WebhookListFields';

export const unipileWebhookFields: INodeProperties[] = [
	...webhookCreateFields,
	...webhookDeleteFields,
	...webhookListFields,
];
