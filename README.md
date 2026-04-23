# n8n-nodes-unipile

This is an n8n community node. It lets you use [Unipile](https://developer.unipile.com) in your n8n workflows.

[n8n](https://n8n.io/) is a fair-code licensed workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Usage](#usage)
[Resources](#resources)
[Version history](#version-history)

## Installation

Follow the community nodes installation guide:
https://docs.n8n.io/integrations/community-nodes/installation/

After installation, search for "Unipile" in the Nodes panel.

## Operations

Supported resources and operations:

- Accounts
  - List accounts (auto-pagination)
  - Get account
  - Create account (native)
  - Hosted link (connect via hosted auth)
  - Reconnect account
  - Restart account
  - Resync account
  - Resend checkpoint
  - Solve checkpoint
  - Delete account

- Messaging
  - List chats (auto-pagination), get chat, start chat, send message in chat, patch chat, sync chat history
  - List chat messages, list messages (auto-pagination), get message, get message attachment, forward message
  - List attendees, get attendee, get attendee picture
  - List attendee chats, list attendee messages

- Emails
  - List emails (auto-pagination), get email, delete email
  - Send email, update email
  - Create draft
  - List folders, get folder
  - Get email attachment

- Calendars
  - List calendars (auto-pagination), get calendar
  - List events (auto-pagination), get event
  - Create event, edit event, delete event

- LinkedIn
  - Get job postings, get job posting, create job posting, edit job posting, publish job posting, close job posting
  - Get job applicants, get job applicant, download applicant resume
  - Search, search parameters
  - Perform action on member
  - Get company profile
  - Get InMail balance
  - Get hiring projects, get hiring project by ID
  - Endorse skill
  - Solve job-publishing checkpoint
  - Get raw data (escape hatch for any LinkedIn endpoint)

- Users
  - Get me, edit me, get profile by identifier
  - List followers, following, relations
  - List invitations sent/received, send invitation, cancel invitation, handle invitation (accept/decline)
  - List user posts, comments, reactions

- Posts
  - Create post, get post
  - Comment post, add reaction (like/celebrate/support/love/insightful/funny)
  - List post comments, list post reactions

- Webhooks
  - List webhooks (auto-pagination), create webhook, delete webhook

## Credentials

Add credentials "Unipile API" in n8n:

- Access Token: your Unipile access token (from the Unipile dashboard)
- DSN (Base URL): your Unipile DSN, including protocol and port
  - Example: `https://api1.unipile.com:13111`

Authentication uses the `X-API-KEY` header. The credentials test performs a `GET /api/v1/accounts` against your DSN.

## Compatibility

- n8n Nodes API version: 1
- Node.js: >= 20.15
- n8n: built for n8n 1.x

## Usage

1. Create Unipile credentials (Access Token + DSN) in n8n.
2. Add the Unipile node to a workflow, pick a Resource and Operation.
3. Pick your account from the **Account** dropdown (populated from `GET /accounts`) or switch the control to Expression mode to supply an ID dynamically.
4. Fill in the structured fields for mutation operations. For rarely used fields (custom headers, complex attachments, etc.) expand **Additional Fields** or provide a raw JSON body where the operation exposes one.

Tips:

- Prefer **Hosted Link** to connect accounts when you want an OAuth-like flow. Use **Create Account (Native)** for direct JSON-based connections.
- The DSN varies by tenant/region; copy it from your Unipile dashboard.
- For list operations, toggle **Return All** to fetch every page automatically via the Unipile cursor. Leave it off to return only the first page (up to **Limit**).
- Binary attachments (files uploaded from disk) are not structured in this node — use Unipile's multipart endpoints via the built-in HTTP Request node when needed.

## Resources

- n8n community nodes documentation: https://docs.n8n.io/integrations/#community-nodes
- Unipile developer docs: https://developer.unipile.com

## Version history

### 1.1.0

- **Account selector**: a single Account dropdown populated by `GET /accounts` (with Expression mode for dynamic values) replaces the free-text Account ID field across every operation.
- **Structured mutation fields**: Create Event, Send Email, Create Draft, Send Message, Start Chat, Create Post, Comment Post, Add Reaction, Send Invitation, Handle Invitation, and Create Webhook now expose first-class typed fields (enums, collections) instead of a single raw JSON body.
- **Cursor auto-pagination**: list operations for Accounts, Webhooks, Chats, Messages, Emails, Calendars, and Calendar Events support a **Return All** toggle that follows the Unipile `cursor` response field until exhausted.
- **Patch Chat** now surfaces the valid action enum (`setReadStatus`, `setMuteStatus`, `setArchiveStatus`, `setPinnedStatus`, `addParticipant`, `removeParticipant`, `setLabel`).
- **Handle Invitation Received** now exposes the required `action`, `provider`, and `shared_secret` fields.
- **Add Reaction** now exposes required `post_id`/`account_id` and the `reaction_type` enum.
- **Webhook Create** now exposes the `source` enum and named optional fields (`events`, `format`, `headers`, `enabled`, `account_ids`).
- Fixes:
  - Solve Job Publishing Checkpoint: required fields were bound to the wrong operation and never rendered.
  - Update Email: the body field was nested inside Additional Fields and never serialised.
  - List Reactions on a Post: `account_id` is now a required top-level query param.
  - Edit/Publish Job Posting: `account_id` was missing entirely.
  - List Email Folders: `account_id` is now required.
  - Endorse Skill: `skill_endorsement_id` no longer defaults to `0`.
  - Get Job Applicants: `limit` is now a number, not a string.
  - Account Resync: `after`/`before`/`chunk_size` defaults no longer violate `minValue`.
- Consistency:
  - Display names align on "LinkedIn" (no more "Linkedin").
  - Field `name` identifiers use camelCase throughout; routing still sends snake_case to Unipile.
  - `additionalFieldsReactions` collections renamed to `additionalFields`.

### 1.0.0

- Initial release.
