import { useEffect, useState, type FC } from 'react'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, useNavigate, useParams } from 'react-router-dom'

import {
	type EventContentInputs,
	eventContentSchema,
} from 'src/pages/one-event-layout/pages/admin-event-content/layout/event-content/schema'
import { AdminContent } from 'src/components/admin-content/admin-content'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'
import { AdminRoute } from 'src/routes/admin-routes/consts'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'
import {
	useGetContentByEventIdQuery,
	useSaveEventContentInfoMutation,
} from 'src/store/events/events.api'
import { currentDateString } from 'src/helpers/utils'
import { useIsSent } from 'src/hooks/sent-mark/sent-mark'
import { TextInfoSection } from './components/text-info-section/text-info-section'

export const AdminEventInfo: FC = () => {
	const { id = '0' } = useParams()
	const { data: contentInfoData } = useGetContentByEventIdQuery(id)
	const [saveEventContentInfo] = useSaveEventContentInfoMutation()

	const methods = useForm<EventContentInputs>({
		mode: 'onBlur',
		resolver: yupResolver(eventContentSchema),
		defaultValues: {
			hide_placements: false,
			hide_gallery: false,
			hide_links: false,
			hide_documents: false,
		},
	})

	const { isSent, markAsSent } = useIsSent(methods.control)
	const [action, setAction] = useState<'apply' | 'save'>('apply')
	const navigate = useNavigate()

	const onSubmit: SubmitHandler<EventContentInputs> = async (data) => {
		const eventId = id
		const eventInfoFormData = new FormData()

		eventInfoFormData.append('id', eventId)

		const res = await saveEventContentInfo(eventInfoFormData)
		if (res) {
			markAsSent(true)
			if (action === 'save') {
				navigate(`/${AdminRoute.AdminEventLayout}/${AdminRoute.AdminEventsList}`)
			}
		}
	}

	useEffect(() => {
		if (contentInfoData) {
			const modifiedContentInfoData = { ...contentInfoData }
			modifiedContentInfoData.hide_gallery = !contentInfoData.hide_gallery
			if (modifiedContentInfoData.links) {
				modifiedContentInfoData.links = modifiedContentInfoData.links.map((link) => {
					if (link.date === '0000-00-00') {
						return { ...link, date: currentDateString() }
					}
					return link
				})
			}
			methods.reset(modifiedContentInfoData)
		}
	}, [contentInfoData, methods.reset])

	return (
		<AdminContent className={styles.eventContentPage}>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)} noValidate autoComplete='off'>
					<TextInfoSection />
					<AdminControllers
						variant={'2'}
						outLink={`/${AdminRoute.AdminEventLayout}/${AdminRoute.AdminEventsList}`}
						isSent={isSent}
						actionHandler={setAction}
					/>
				</form>
			</FormProvider>
			<Link
				to={`/${AdminRoute.AdminEventLayout}/${AdminRoute.AdminEventsList}`}
				className={adminStyles.adminReturnLink}
			>
				Возврат к списку событий
			</Link>
		</AdminContent>
	)
}
