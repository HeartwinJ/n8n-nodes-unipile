import type { INodeProperties } from 'n8n-workflow';
import { accountGetFields } from './AccountGetFields';
import { accountReconnectFields } from './AccountReconnectFields';
import { accountDeleteFields } from './AccountDeleteFields';
import { accountResyncFields } from './AccountResyncFields';
import { accountRestartFields } from './AccountRestartFields';
import { accountHostedLinkFields } from './AccountHostedLinkFields';
import { accountListFields } from './AccountListFields';
import { accountCreateFields } from './AccountCreateFields';
import { accountResendCheckpointFields } from './AccountResendCheckpointFields';
import { accountSolveCheckpointFields } from './AccountSolveCheckpointFields';

export const unipileAccountFields: INodeProperties[] = [
	...accountGetFields,
	...accountReconnectFields,
	...accountDeleteFields,
	...accountResyncFields,
	...accountRestartFields,
	...accountHostedLinkFields,
	...accountListFields,
	...accountCreateFields,
	...accountResendCheckpointFields,
	...accountSolveCheckpointFields,
];
