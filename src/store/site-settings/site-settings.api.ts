import { type SiteSettingsResponse, type PromoBlock } from 'src/types/site-settings'

import { createApi } from '@reduxjs/toolkit/query/react'

import { ReducerPath } from 'src/helpers/consts'
import { type FieldValues } from 'react-hook-form'
import { baseQueryWithReauth } from 'src/helpers/base-query'

export const siteSettingsApi = createApi({
	reducerPath: ReducerPath.SiteSettings,
	tagTypes: ['SiteSettings'],
	baseQuery: baseQueryWithReauth,
	endpoints: (build) => ({
		getPromos: build.query<PromoBlock[], null>({
			query: () => ({
				url: `promo-blocks`,
			}),
		}),
		getSettingsCommon: build.query<SiteSettingsResponse, null>({
			query: () => ({
				url: `settings/edit_common`,
			}),
		}),
		saveSettingsCommon: build.mutation<null, FieldValues>({
			query: (formData) => ({
				url: `settings/save_common`,
				method: 'POST',
				body: formData,
			}),
			invalidatesTags: ['SiteSettings'],
		}),
		getSettingsPromo: build.query<SiteSettingsResponse, null>({
			query: () => ({
				url: `settings/edit_promo`,
			}),
		}),
		saveSettingsPromo: build.mutation<null, FieldValues>({
			query: (formData) => ({
				url: `settings/save_promo`,
				method: 'POST',
				body: formData,
			}),
			invalidatesTags: ['SiteSettings'],
		}),
		getSettingsContacts: build.query<SiteSettingsResponse, null>({
			query: () => ({
				url: `settings/edit_contacts`,
			}),
		}),
		saveSettingsContacts: build.mutation<null, FieldValues>({
			query: (formData) => ({
				url: `settings/save_contacts`,
				method: 'POST',
				body: formData,
			}),
			invalidatesTags: ['SiteSettings'],
		}),
	}),
})

export const {
	useGetPromosQuery,
	useGetSettingsCommonQuery,
	useSaveSettingsCommonMutation,
	useGetSettingsPromoQuery,
	useSaveSettingsPromoMutation,
	useGetSettingsContactsQuery,
	useSaveSettingsContactsMutation,
} = siteSettingsApi
