import { useEffect, useState, type FC } from 'react'
import { type TypeTicketsInputs } from './schema'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'

import { AdminContent } from 'src/components/admin-content/admin-content'

import styles from './index.module.scss'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { FlexRow } from 'src/components/flex-row/flex-row'
import { ParticipantSection } from './components/ticket-section/participant-section'
import {
	useGetSettingsParticipantTypeByIdQuery,
	useSaveSettingsParticipantTypeMutation,
} from 'src/store/events/events.api'
import { useParams } from 'react-router-dom'
import { booleanToNumberString } from 'src/helpers/utils'
import { useIsSent } from 'src/hooks/sent-mark/sent-mark'

export const TypeParticipantPage: FC = () => {
	const { id = '0', subId = '0' } = useParams()

	const methods = useForm<TypeTicketsInputs>({
		mode: 'onBlur',
	})

	const { data } = useGetSettingsParticipantTypeByIdQuery({ id_event: id, id_type: subId })
	const [saveNewTicket] = useSaveSettingsParticipantTypeMutation()

	const { isSent } = useIsSent(methods.control)
	const [, setAction] = useState<'apply' | 'save'>('apply')

	const onSubmit: SubmitHandler<TypeTicketsInputs> = async (data) => {
		const formData = new FormData()

		formData.append('id', data.id ?? '')
		formData.append('title', data.title ?? '')
		formData.append('desc', data.desc ?? '')
		formData.append('hidden', booleanToNumberString(false))
		formData.append('price', data.price ?? '')
		formData.append('acceptdaylimit', data.acceptdaylimit ?? '')
		formData.append('limit', data.limit ?? '')
		formData.append('label_desc', data.label_desc ?? '')
		formData.append('use_group', booleanToNumberString(data.use_input))
		formData.append('use_accept', booleanToNumberString(data.use_accept))
		formData.append('use_vid', booleanToNumberString(data.use_vid))

		await saveNewTicket(formData).unwrap()
	}

	useEffect(() => {
		if (data) {
			methods.reset({ ...(data as TypeTicketsInputs) })
		}
	}, [data, methods])

	return (
		<AdminContent className={styles.typeTicketsPage} $backgroundColor='#fff' $padding='0 35px 30px'>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)} noValidate autoComplete='off'>
					<ParticipantSection />
					<FlexRow $margin='0 0 40px 0' $maxWidth='1140px' $justifyContent='space-between'>
						<FlexRow>
							<AdminButton as='button' type='submit' onClick={() => setAction('save')}>
								Сохранить и выйти
							</AdminButton>
							<AdminButton
								as='button'
								type='submit'
								$variant={isSent ? 'sent' : 'light'}
								onClick={() => setAction('apply')}
							>
								Применить и продолжить
							</AdminButton>
						</FlexRow>
					</FlexRow>
				</form>
			</FormProvider>
		</AdminContent>
	)
}
