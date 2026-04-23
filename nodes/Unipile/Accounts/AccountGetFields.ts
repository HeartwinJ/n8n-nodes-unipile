import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

export const accountGetFields: INodeProperties[] = [
	accountIdField({ resource: 'account', operation: 'accountGet', sendMode: 'none' }),
];
