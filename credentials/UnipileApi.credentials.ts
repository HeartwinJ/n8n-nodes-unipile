import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class UnipileApi implements ICredentialType {
	name = 'unipileApi';
	displayName = 'Unipile API';
	documentationUrl = 'https://developer.unipile.com/docs/api-usage';

	properties: INodeProperties[] = [
		{
			displayName: 'Access Token',
			name: 'accessToken',
			description: 'Your Unipile Access Token from the dashboard',
			type: 'string',
			default: '',
			typeOptions: {
				password: true,
			},
			required: true,
		},
		{
			displayName: 'DSN (Base URL)',
			name: 'dsn',
			description:
				'Base URL with protocol and port, e.g. https://api1.unipile.com:13111. You can copy it from your Unipile dashboard.',
			type: 'string',
			default: 'https://api1.unipile.com:13111',
			required: true,
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'X-API-KEY': '={{$credentials.accessToken}}',
				accept: 'application/json',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.dsn}}',
			url: '/api/v1/accounts',
			method: 'GET',
		},
	};
}
