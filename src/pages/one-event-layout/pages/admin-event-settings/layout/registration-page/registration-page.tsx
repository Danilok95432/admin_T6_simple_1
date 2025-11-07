import { useState, type FC } from 'react'
import { type RegistrationSettingsInputs } from './schema'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'

import { AdminContent } from 'src/components/admin-content/admin-content'

import styles from './index.module.scss'
import { useIsSent } from 'src/hooks/sent-mark/sent-mark'

import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { FlexRow } from 'src/components/flex-row/flex-row'
import { RegistationSettingsSection } from './components/registration-settings-section/registration-settings-section'
import { CommonSettingsSection } from './components/common-settings-section/common-settings-section'

export const RegistrationPage: FC = () => {
	// const { id = '0' } = useParams()

	const methods = useForm<RegistrationSettingsInputs>({
		mode: 'onBlur',
	})

	const { isSent } = useIsSent(methods.control)
	const [, setAction] = useState<'apply' | 'save'>('apply')
	// const navigate = useNavigate()

	const onSubmit: SubmitHandler<RegistrationSettingsInputs> = async (data) => {
		console.log(data)
	}

	return (
		<AdminContent className={styles.paymentPage} $backgroundColor='#fff' $padding='0 35px 30px'>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)} noValidate autoComplete='off'>
					<RegistationSettingsSection />
					<CommonSettingsSection />
					<FlexRow>
						<AdminButton
							as='button'
							$height='40px'
							$fontSize='14px'
							$padding='0px 24px'
							type='submit'
							onClick={() => setAction('save')}
						>
							Сохранить и выйти
						</AdminButton>
						<AdminButton
							as='button'
							type='submit'
							$height='40px'
							$fontSize='14px'
							$padding='0px 24px'
							$variant={isSent ? 'sent' : 'light'}
							onClick={() => setAction('apply')}
						>
							Применить и продолжить
						</AdminButton>
					</FlexRow>
				</form>
			</FormProvider>
		</AdminContent>
	)
}
