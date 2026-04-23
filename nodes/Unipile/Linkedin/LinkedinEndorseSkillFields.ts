import type { INodeProperties } from 'n8n-workflow';
import { accountIdField } from '../shared/AccountIdField';

export const linkedinEndorseSkillFields: INodeProperties[] = [
	accountIdField({
		resource: 'linkedin',
		operation: 'linkedinEndorseSkill',
		sendMode: 'body',
	}),
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
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the skill to endorse on the profile',
		routing: { send: { type: 'body', property: 'skill_endorsement_id' } },
		displayOptions: {
			show: {
				resource: ['linkedin'],
				operation: ['linkedinEndorseSkill'],
			},
		},
	},
];
