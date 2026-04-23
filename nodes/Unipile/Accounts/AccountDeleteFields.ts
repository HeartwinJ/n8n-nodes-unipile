import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

export const accountDeleteFields: INodeProperties[] = [
	accountIdField({ resource: 'account', operation: 'accountDelete', sendMode: 'none' }),
];
