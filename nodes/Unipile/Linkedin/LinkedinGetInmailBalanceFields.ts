import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

export const linkedinGetInmailBalanceFields: INodeProperties[] = [
	accountIdField({ resource: 'linkedin', operation: 'linkedinGetInmailBalance' }),
];
