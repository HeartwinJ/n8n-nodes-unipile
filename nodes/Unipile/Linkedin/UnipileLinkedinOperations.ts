import type { INodeProperties } from 'n8n-workflow';

export const unipileLinkedinOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['linkedin'] } },
		options: [
			{
				name: 'Close Job Posting',
				value: 'linkedinCloseJobPosting',
				action: 'Close a job posting',
				description: 'POST /linkedin/jobs/{jobId}/close',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/linkedin/jobs/{{$parameter["jobId"]}}/close',
					},
				},
			},
			{
				name: 'Create Job Posting',
				value: 'linkedinCreateJobPosting',
				action: 'Create a job posting',
				description: 'POST /linkedin/jobs',
				routing: {
					request: {
						method: 'POST',
						url: '/api/v1/linkedin/jobs',
						body: '={{ JSON.parse($parameter["body"]) }}',
					},
				},
			},
			{
				name: 'Download Applicant Resume',
				value: 'linkedinGetJobApplicantResume',
				action: 'Download a job applicant resume',
				description: 'GET /linkedin/jobs/applicants/{applicantId}/resume',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/linkedin/jobs/applicants/{{$parameter["applicantId"]}}/resume',
					},
				},
			},
			{
				name: 'Edit Job Posting',
				value: 'linkedinEditJobPosting',
				action: 'Edit a job posting',
				description: 'PATCH /linkedin/jobs/{jobId}',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/api/v1/linkedin/jobs/{{$parameter["jobId"]}}',
						body: '={{ JSON.parse($parameter["body"]) }}',
					},
				},
			},
			{
				name: 'Endorse Skill',
				value: 'linkedinEndorseSkill',
				action: 'Endorse a specific skill on a user profile',
				description: 'POST /linkedin/profile/endorse',
				routing: {
					request: {
						method: 'POST',
						url: '/api/v1/linkedin/profile/endorse',
					},
				},
			},
			{
				name: 'Get Company Profile',
				value: 'linkedinGetCompanyProfile',
				action: 'Retrieve a company profile',
				description: 'GET /linkedin/company/{identifier}',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/linkedin/company/{{$parameter["companyIdentifier"]}}',
					},
				},
			},
			{
				name: 'Get Hiring Project by ID',
				value: 'linkedinGetHiringProjectById',
				action: 'Retrieve recruiter hiring project from id',
				description: 'GET /linkedin/projects/{projectId}',
				routing: {
					request: { method: 'GET', url: '=/api/v1/linkedin/projects/{{$parameter["projectId"]}}' },
				},
			},
			{
				name: 'Get Hiring Projects',
				value: 'linkedinGetHiringProjects',
				action: 'Retrieve recruiter hiring projects',
				description: 'GET /linkedin/projects',
				routing: { request: { method: 'GET', url: '/api/v1/linkedin/projects' } },
			},
			{
				name: 'Get Inmail Balance',
				value: 'linkedinGetInmailBalance',
				action: 'Get inmail credit balance',
				description: 'GET /linkedin/inmail_balance',
				routing: { request: { method: 'GET', url: '/api/v1/linkedin/inmail_balance' } },
			},
			{
				name: 'Get Job Applicant',
				value: 'linkedinGetJobApplicant',
				action: 'Get a specific applicant to a job posting',
				description: 'GET /linkedin/jobs/applicants/{applicantId}',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/linkedin/jobs/applicants/{{$parameter["applicantId"]}}',
					},
				},
			},
			{
				name: 'Get Job Applicants',
				value: 'linkedinGetJobApplicants',
				action: 'List all applicants to a job posting',
				description: 'GET /linkedin/jobs/{jobId}/applicants',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/linkedin/jobs/{{$parameter["jobId"]}}/applicants',
					},
				},
			},
			{
				name: 'Get Job Offer',
				value: 'linkedinGetJobPosting',
				action: 'Get job offer',
				description: 'GET /linkedin/jobs/{jobId}',
				routing: {
					request: { method: 'GET', url: '=/api/v1/linkedin/jobs/{{$parameter["jobId"]}}' },
				},
			},
			{
				name: 'Get Job Postings',
				value: 'linkedinGetJobPostings',
				action: 'List all job postings',
				description: 'GET /linkedin/jobs',
				routing: { request: { method: 'GET', url: '/api/v1/linkedin/jobs' } },
			},
			{
				name: 'Get Raw Data',
				value: 'linkedinGetRawData',
				action: 'Get raw data from any endpoint',
				description: 'POST /linkedin',
				routing: {
					request: {
						method: 'POST',
						url: '/api/v1/linkedin',
						body: '={{ JSON.parse($parameter["body"]) }}',
					},
				},
			},
			{
				name: 'Perform Action on Member',
				value: 'linkedinPerformActionOnMember',
				action: 'Perform an action with a user profile',
				description: 'POST /linkedin/user/{userId}',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/linkedin/user/{{$parameter["userId"]}}',
						body: '={{ JSON.parse($parameter["body"]) }}',
					},
				},
			},
			{
				name: 'Publish Job Posting',
				value: 'linkedinPublishJobPosting',
				action: 'Publish a job posting',
				description: 'POST /linkedin/jobs/{draftId}/publish',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/linkedin/jobs/{{$parameter["draftId"]}}/publish',
						body: '={{ JSON.parse($parameter["body"]) }}',
					},
				},
			},
			{
				name: 'Search',
				value: 'linkedinSearch',
				action: 'Perform linkedin search',
				description: 'POST /linkedin/search',
				routing: {
					request: {
						method: 'POST',
						url: '/api/v1/linkedin/search',
						body: '={{ JSON.parse($parameter["body"]) }}',
					},
				},
			},
			{
				name: 'Search Parameters',
				value: 'linkedinGetSearchParametersList',
				action: 'Retrieve linkedin search parameters',
				description: 'GET /linkedin/search/parameters',
				routing: { request: { method: 'GET', url: '/api/v1/linkedin/search/parameters' } },
			},
			{
				name: 'Solve Job Publishing Checkpoint',
				value: 'linkedinSolveCheckpoint',
				action: 'Solve a job publishing checkpoint',
				description: 'POST /linkedin/jobs/{draftId}/checkpoint',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/v1/linkedin/jobs/{{$parameter["draftId"]}}/checkpoint',
					},
				},
			},
		],
		default: 'linkedinGetHiringProjects',
	},
];
