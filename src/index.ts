import type {
	ClubsPluginMeta,
	ClubsFunctionPlugin,
	ClubsFunctionGetApiPaths,
	ClubsFunctionGetAdminPaths,
	ClubsFunctionGetPagePaths,
} from '@devprotocol/clubs-core'
import { ClubsPluginCategory } from '@devprotocol/clubs-core'
import Readme from './readme.astro'
import addPassportItem from './handlers/addPassportItem'

import { Index } from './db/redis'
import { sTokenPayload } from './db/schema'

export const getPagePaths = (async () => {
	return []
}) satisfies ClubsFunctionGetPagePaths

export const getApiPaths = (async (_options, config) => {
	return [
		{
			paths: ['passport', 'add'],
			method: 'POST',
			handler: addPassportItem(config),
		},
	]
}) satisfies ClubsFunctionGetApiPaths

export const getAdminPaths = (async () => {
	return []
}) satisfies ClubsFunctionGetAdminPaths

export const meta = {
	readme: Readme,
	displayName: 'Passport',
	id: 'devprotocol:clubs:plugin:passport',
	category: ClubsPluginCategory.Uncategorized,
} satisfies ClubsPluginMeta

export { Index, sTokenPayload }

export default {
	meta,
	getApiPaths,
	getPagePaths,
	getAdminPaths,
} satisfies ClubsFunctionPlugin
