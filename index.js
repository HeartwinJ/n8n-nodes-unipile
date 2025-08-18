module.exports = {
	nodes: [
		{
			type: 'n8n-nodes-unipile.nodes.Unipile.Unipile',
			files: ['dist/nodes/Unipile/Unipile.node.js'],
		},
	],
	credentials: [
		{
			type: 'n8n-nodes-unipile.credentials.UnipileApi',
			files: ['dist/credentials/UnipileApi.credentials.js'],
		},
	],
};
