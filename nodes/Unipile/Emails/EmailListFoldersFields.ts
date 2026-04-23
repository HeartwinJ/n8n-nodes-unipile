import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

export const emailListFoldersFields: INodeProperties[] = [
	accountIdField({ resource: 'email', operation: 'emailListFolders' }),
];
