import { useState, type FC } from 'react'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'

import { type EventContentInputs } from 'src/pages/one-event-layout/pages/admin-event-content/layout/event-content/schema'
import { AdminContent } from 'src/components/admin-content/admin-content'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'
import { AdminRoute } from 'src/routes/admin-routes/consts'

import styles from './index.module.scss'
import { useIsSent } from 'src/hooks/sent-mark/sent-mark'

export const AdminEventDocsContent: FC = () => {
	const methods = useForm<EventContentInputs>({
		mode: 'onBlur',
	})

	const { isSent } = useIsSent(methods.control)
	const [, setAction] = useState<'apply' | 'save'>('apply')

	const onSubmit: SubmitHandler<EventContentInputs> = async (data) => {
		console.log(data)
	}

	return (
		<AdminContent className={styles.eventContentPage}>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)} noValidate autoComplete='off'>
					<AdminControllers
						variant={'4'}
						outLink={`/${AdminRoute.AdminEventLayout}/${AdminRoute.AdminEventsList}`}
						isSent={isSent}
						actionHandler={setAction}
					/>
				</form>
			</FormProvider>
		</AdminContent>
	)
}
