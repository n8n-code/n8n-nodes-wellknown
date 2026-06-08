import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "GET Api Plugins",
					"value": "GET Api Plugins",
					"action": "GET Api Plugins",
					"description": "Returns a list of Wellknown ai-plugins json objects from the Wellknown ai-plugins registry.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/plugins"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/plugins",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Api Plugins"
					]
				}
			}
		},
];
