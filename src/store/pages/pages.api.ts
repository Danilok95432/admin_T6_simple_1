import { createApi } from '@reduxjs/toolkit/query/react'
import { type FieldValues } from 'react-hook-form'

import { ReducerPath } from 'src/helpers/consts'
import { baseQueryWithReauth } from 'src/helpers/base-query'
import {
	type HeaderPageResponse,
	type ContactsInfo,
	type AboutInfoOrg,
	type AboutDetailsOrg,
} from 'src/types/header-pages'

export const pagesApi = createApi({
	reducerPath: ReducerPath.Pages,
	tagTypes: ['Header', 'HeaderInfo', 'Fond', 'About'],
	baseQuery: baseQueryWithReauth,
	endpoints: (build) => ({
		getHeaderEdit: build.query<HeaderPageResponse, string>({
			query: (pageType) => ({
				url: `/pages/edit`,
				params: {
					page_type: pageType,
				},
			}),
			providesTags: ['Header'],
		}),
		saveHeader: build.mutation<null, FieldValues>({
			query: (formData) => ({
				url: `/pages/save`,
				method: 'POST',
				body: formData,
			}),
			invalidatesTags: ['Header'],
		}),
		getFondDetails: build.query<ContactsInfo, string>({
			query: (pageType) => ({
				url: `/contacts/edit`,
				params: {
					page_type: pageType,
				},
			}),
			providesTags: ['Fond'],
		}),
		saveFondDetails: build.mutation<null, FieldValues>({
			query: (formData) => ({
				url: `/contacts/save`,
				method: 'POST',
				body: formData,
			}),
			invalidatesTags: ['Fond'],
		}),
		getInfoAboutOrg: build.query<AboutInfoOrg, string>({
			query: () => ({
				url: `/pages/org_about_info_edit`,
			}),
			providesTags: ['About'],
		}),
		saveInfoAboutOrg: build.mutation<null, FieldValues>({
			query: (formData) => ({
				url: `/pages/org_about_info_save`,
				method: 'POST',
				body: formData,
			}),
			invalidatesTags: ['About'],
		}),
		getDetailsAboutOrg: build.query<AboutDetailsOrg, string>({
			query: () => ({
				url: `/pages/org_about_personal_edit`,
			}),
			providesTags: ['About'],
		}),
		saveDetailsAboutOrg: build.mutation<null, FieldValues>({
			query: (formData) => ({
				url: `/pages/org_about_personal_save`,
				method: 'POST',
				body: formData,
			}),
			invalidatesTags: ['About'],
		}),
	}),
})

export const {
	useGetHeaderEditQuery,
	useSaveHeaderMutation,
	useGetFondDetailsQuery,
	useSaveFondDetailsMutation,
	useGetInfoAboutOrgQuery,
	useSaveInfoAboutOrgMutation,
	useGetDetailsAboutOrgQuery,
	useSaveDetailsAboutOrgMutation,
} = pagesApi
