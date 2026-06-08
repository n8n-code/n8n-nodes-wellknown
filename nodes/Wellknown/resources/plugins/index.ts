import type { INodeProperties } from 'n8n-workflow';

export const pluginsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Plugins"
					]
				}
			},
			"options": [
				{
					"name": "Get Provider",
					"value": "Get Provider",
					"action": "List all the Wellknown AI Plugins.",
					"description": "List all the Wellknown AI Plugins. Returns ai-plugin.json objects in an array",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/plugins"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /plugins",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Plugins"
					],
					"operation": [
						"Get Provider"
					]
				}
			}
		},
];
