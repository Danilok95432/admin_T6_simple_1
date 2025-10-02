import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { FlexRow } from 'src/components/flex-row/flex-row'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { type TicketInputs } from './schema'
import { MainSection } from './components/main-section'
import { CustomDisclaimer } from 'src/components/custom-disclaimer/custom-disclaimer'

export const StepTickets = () => {
	const navigate = useNavigate()
	const methods = useForm<TicketInputs>({
		mode: 'onBlur',
		defaultValues: {
			price: '0',
			guests: '0',
		},
	})
	const onSubmit: SubmitHandler<TicketInputs> = async (data) => {
		console.log(data)
		navigate(`/${AdminRoute.AdminExpressEvent}/${AdminRoute.ExpressPasses}`)
	}
	return (
		<div className={styles.stepPage}>
			<h2>
				<span>Шаг 3: </span>Регистрация и билеты
			</h2>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
					<MainSection />
					<CustomDisclaimer
						text='Тонкие настройки регистрации, состав полей формы, создание разных вариантов билетов и скидок на них можно сделать в разделе «Настройки».'
						closable
					/>
					<FlexRow className={styles.nextRow}>
						<AdminButton
							$height='auto'
							$fontSize='20px'
							$padding='22px 30px'
							as='button'
							type='submit'
						>
							К настройке пропускной системы
						</AdminButton>
					</FlexRow>
				</form>
			</FormProvider>
		</div>
	)
}
