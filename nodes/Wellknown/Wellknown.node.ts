import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { pluginsDescription } from './resources/plugins';
import { defaultDescription } from './resources/default';

export class Wellknown implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'wellknown',
		name: 'N8nDevWellknown',
		icon: { light: 'file:./wellknown.png', dark: 'file:./wellknown.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Registry of AI Plugins.',
		defaults: { name: 'wellknown' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevWellknownApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Plugins",
					"value": "Plugins",
					"description": ""
				},
				{
					"name": "Default",
					"value": "Default",
					"description": ""
				}
			],
			"default": ""
		},
		...pluginsDescription,
		...defaultDescription
		],
	};
}
