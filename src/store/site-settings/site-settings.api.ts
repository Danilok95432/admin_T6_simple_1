import {
	type SiteSettingsResponse,
	type PromoBlock,
	type HistoryResponse,
	type HistoryItem,
} from 'src/types/site-settings'

import { createApi } from '@reduxjs/toolkit/query/react'

import { ReducerPath } from 'src/helpers/consts'
import { type FieldValues } from 'react-hook-form'
import { baseQueryWithReauth } from 'src/helpers/base-query'
import { type NewsNewIdResponse } from 'src/types/news'

export const siteSettingsApi = createApi({
	reducerPath: ReducerPath.SiteSettings,
	tagTypes: ['SiteSettings', 'History'],
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
		getAllHistory: build.query<HistoryResponse, null>({
			query: () => ({
				url: `dates/list`,
			}),
			providesTags: ['History'],
		}),
		getNewIdHistory: build.query<NewsNewIdResponse, null>({
			query: () => ({
				url: `dates/getnew`,
			}),
			providesTags: ['History'],
		}),
		deleteHistoryById: build.mutation<null, string>({
			query: (newsId) => ({
				url: `dates/delete`,
				method: 'DELETE',
				body: { id: newsId },
			}),
			invalidatesTags: ['History'],
		}),
		hideHistoryById: build.mutation<null, string>({
			query: (newsId) => ({
				url: `dates/hide`,
				method: 'POST',
				body: { id: newsId },
			}),
			invalidatesTags: ['History'],
		}),
		getHistoryById: build.query<HistoryItem, string>({
			query: (id) => ({
				url: `dates/edit`,
				params: {
					id,
				},
			}),
		}),
		saveHistory: build.mutation<null, FieldValues>({
			query: (formData) => ({
				url: `dates/save`,
				method: 'POST',
				body: formData,
			}),
			invalidatesTags: ['History'],
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
	useDeleteHistoryByIdMutation,
	useGetAllHistoryQuery,
	useGetHistoryByIdQuery,
	useGetNewIdHistoryQuery,
	useHideHistoryByIdMutation,
	useSaveHistoryMutation,
} = siteSettingsApi
