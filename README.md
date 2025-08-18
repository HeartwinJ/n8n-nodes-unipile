# n8n-nodes-unipile

An n8n community node to work with Unipile APIs.

## What’s included

- Credentials: X-API-KEY auth header and DSN (base URL)
- Accounts: list, get
- Chats: list, create/start new chat, send message in existing chat, list chat messages
- Messages: list

## Setup

1) Install deps and build
2) In n8n, add credentials "Unipile API":
  - Access Token: from Unipile dashboard
  - DSN (Base URL): e.g. https://api1.unipile.com:13111 (use your DSN)
3) Use the Unipile node in your workflows.

Docs: https://developer.unipile.com

## Development

- npm i
- npm run dev
- npm run build

## License

MIT
