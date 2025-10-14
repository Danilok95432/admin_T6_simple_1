import { AdminContent } from 'src/components/admin-content/admin-content'

import styles from './index.module.scss'
import { Container } from 'src/UI/Container/Container'
import { MainSection } from './components/main-section/main-section'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { type PlacementInputs } from './schema'
import { useIsSent } from 'src/hooks/sent-mark/sent-mark'
import { useState } from 'react'
import { FlexRow } from 'src/components/flex-row/flex-row'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'

export const PlacementEventLayout = () => {
	const [, setAction] = useState<'apply' | 'save'>('apply')
	const methods = useForm<PlacementInputs>({
		mode: 'onBlur',
		defaultValues: {
			use_event: false,
			use_reg: false,
			use_lend: false,
			lending: {},
		},
	})
	const onSubmit: SubmitHandler<PlacementInputs> = async (data) => {
		console.log(data)
	}
	const { isSent } = useIsSent(methods.control)
	return (
		<AdminContent $padding='0' $backgroundColor='#ffffff' className={styles.placementPage}>
			<Container $padding='35px 35px 55px 35px' $paddingMobile='35px'>
				<h2>Размещение события в сети</h2>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<MainSection />
						<FlexRow>
							<AdminButton
								as='button'
								$height='auto'
								$fontSize='20px'
								$padding='22px 30px'
								type='submit'
								onClick={() => setAction('save')}
							>
								Сохранить и выйти
							</AdminButton>
							<AdminButton
								as='button'
								type='submit'
								$height='auto'
								$fontSize='20px'
								$padding='22px 30px'
								$variant={isSent ? 'sent' : 'light'}
								onClick={() => setAction('apply')}
							>
								Применить и продолжить
							</AdminButton>
						</FlexRow>
					</form>
				</FormProvider>
			</Container>
		</AdminContent>
	)
}
