import type { INodeProperties } from 'n8n-workflow';

export const linkedinEndorseSkillFields: INodeProperties[] = [
	{
		displayName: 'Account ID',
		name: 'accountId',
		type: 'string',
		default: '',
		required: true,
		routing: { send: { type: 'body', property: 'account_id' } },
		displayOptions: {
			show: {
				resource: ['linkedin'],
				operation: ['linkedinEndorseSkill'],
			},
		},
	},
	{
		displayName: 'Profile ID',
		name: 'profileId',
		type: 'string',
		default: '',
		required: true,
		routing: { send: { type: 'body', property: 'profile_id' } },
		displayOptions: {
			show: {
				resource: ['linkedin'],
				operation: ['linkedinEndorseSkill'],
			},
		},
	},
	{
		displayName: 'Skill Endorsement ID',
		name: 'skillEndorsementId',
		type: 'number',
		default: 0,
		required: true,
		routing: { send: { type: 'body', property: 'skill_endorsement_id' } },
		displayOptions: {
			show: {
				resource: ['linkedin'],
				operation: ['linkedinEndorseSkill'],
			},
		},
	},
];
