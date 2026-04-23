import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

export const userGetMeFields: INodeProperties[] = [
	accountIdField({ resource: 'user', operation: 'userGetMe' }),
];
