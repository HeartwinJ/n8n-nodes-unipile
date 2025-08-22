import type { INodeProperties } from 'n8n-workflow';
import { linkedinCloseJobPostingFields } from './LinkedinCloseJobPostingFields';
import { linkedinCreateJobPostingFields } from './LinkedinCreateJobPostingFields';
import { linkedinEditJobPostingFields } from './LinkedinEditJobPostingFields';
import { linkedinEndorseSkillFields } from './LinkedinEndorseSkillFields';
import { linkedinGetCompanyProfileFields } from './LinkedinGetCompanyProfileFields';
import { linkedinGetHiringProjectByIdFields } from './LinkedinGetHiringProjectByIdFields';
import { linkedinGetHiringProjectsFields } from './LinkedinGetHiringProjectsFields';
import { linkedinGetInmailBalanceFields } from './LinkedinGetInmailBalanceFields';
import { linkedinGetJobApplicantFields } from './LinkedinGetJobApplicantFields';
import { linkedinGetJobApplicantResumeFields } from './LinkedinGetJobApplicantResumeFields';
import { linkedinGetJobApplicantsFields } from './LinkedinGetJobApplicantsFields';
import { linkedinGetJobPostingFields } from './LinkedinGetJobPostingFields';
import { linkedinGetJobPostingsFields } from './LinkedinGetJobPostingsFields';
import { linkedinGetRawDataFields } from './LinkedinGetRawDataFields';
import { linkedinPerformActionOnMemberFields } from './LinkedinPerformActionOnMemberFields';
import { linkedinPublishJobPostingFields } from './LinkedinPublishJobPostingFields';
import { linkedinSearchFields } from './LinkedinSearchFields';
import { linkedinGetSearchParametersListFields } from './LinkedinGetSearchParametersListFields';
import { linkedinSolveCheckpointFields } from './LinkedinSolveCheckpointFields';

export const unipileLinkedinFields: INodeProperties[] = [
	...linkedinCloseJobPostingFields,
	...linkedinCreateJobPostingFields,
	...linkedinEditJobPostingFields,
	...linkedinEndorseSkillFields,
	...linkedinGetCompanyProfileFields,
	...linkedinGetHiringProjectByIdFields,
	...linkedinGetHiringProjectsFields,
	...linkedinGetInmailBalanceFields,
	...linkedinGetJobApplicantFields,
	...linkedinGetJobApplicantResumeFields,
	...linkedinGetJobApplicantsFields,
	...linkedinGetJobPostingFields,
	...linkedinGetJobPostingsFields,
	...linkedinGetRawDataFields,
	...linkedinPerformActionOnMemberFields,
	...linkedinPublishJobPostingFields,
	...linkedinSearchFields,
	...linkedinGetSearchParametersListFields,
	...linkedinSolveCheckpointFields,
];
