import { useEffect, useState, type FC } from 'react'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'
import { AdminRoute } from 'src/routes/admin-routes/consts'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'
import {
	useGetEditContentEventInfoQuery,
	useSaveEditContentEventInfoMutation,
} from 'src/store/events/events.api'
import { useIsSent } from 'src/hooks/sent-mark/sent-mark'
import { TextInfoSection } from './components/text-info-section/text-info-section'
import { type EventProfileInputs, eventProfileSchema } from './schema'

export const AdminEventInfo: FC = () => {
	const { id = '0' } = useParams()
	const { data: contentInfoData } = useGetEditContentEventInfoQuery(id)
	const [saveEventContentInfo] = useSaveEditContentEventInfoMutation()

	const methods = useForm<EventProfileInputs>({
		mode: 'onBlur',
		resolver: yupResolver(eventProfileSchema),
	})

	const { isSent, markAsSent } = useIsSent(methods.control)
	const [action, setAction] = useState<'apply' | 'save'>('apply')
	const navigate = useNavigate()

	const onSubmit: SubmitHandler<EventProfileInputs> = async (data) => {
		const eventId = id
		const eventInfoFormData = new FormData()

		eventInfoFormData.append('id', eventId)
		eventInfoFormData.append('description', data.description)
		eventInfoFormData.append('conditions', data.conditions)
		eventInfoFormData.append('fullinfo', data.fullinfo)

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
			methods.reset({ ...contentInfoData })
		}
	}, [contentInfoData])

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
