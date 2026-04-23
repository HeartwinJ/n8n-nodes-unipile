import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

export const accountRestartFields: INodeProperties[] = [
	accountIdField({ resource: 'account', operation: 'accountRestart', sendMode: 'none' }),
];
