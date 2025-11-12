import { AdminContent } from 'src/components/admin-content/admin-content'
import styles from './index.module.scss'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { useIsSent } from 'src/hooks/sent-mark/sent-mark'
import { useState } from 'react'
import { type EventPassInputs } from './schema'
import { SelectSection } from './components/select-section/select-section'
import { TableSection } from './components/table-section/table-section'
import { CheckboxSection } from './components/checkbox-section/checkbox-section'
import { CustomDisclaimer } from 'src/components/custom-disclaimer/custom-disclaimer'
import { FlexRow } from 'src/components/flex-row/flex-row'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'

export const AdminEventPass = () => {
	// const { id = '0' } = useParams()

	const methods = useForm<EventPassInputs>({
		mode: 'onBlur',
	})

	const { isSent } = useIsSent(methods.control)
	const [, setAction] = useState<'apply' | 'save'>('apply')
	// const navigate = useNavigate()

	const onSubmit: SubmitHandler<EventPassInputs> = async (data) => {
		console.log(data)
	}
	return (
		<AdminContent className={styles.eventPassPage} $backgroundColor='#fff'>
			<h2>Пропуск</h2>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)} noValidate autoComplete='off'>
					<SelectSection
						controlList={[{ label: 'да, применяется системный контроль', value: '0' }]}
						autoDopuskList={[{ label: 'да, турникеты', value: '0' }]}
						manualDopuskList={[{ label: 'только в режиме администратора', value: '0' }]}
					/>
					<TableSection />
					<CustomDisclaimer className={styles.disc}>
						<p>
							Вы выбрали использование турникетов. Пожалуйста,{' '}
							<a className={styles.link} href='#'>
								свяжитесь c нами
							</a>{' '}
							для согласования доставки, установки и настройки пропускных пунктов, а также оплаты их
							аренды.
						</p>
					</CustomDisclaimer>
					<CheckboxSection />
					<FlexRow className={styles.btnsRow}>
						<AdminButton
							as='button'
							type='submit'
							$height='40px'
							$variant={isSent ? 'sent' : 'primary'}
							onClick={() => setAction('save')}
						>
							Сохранить и выйти
						</AdminButton>
						<AdminButton
							as='button'
							type='submit'
							$variant='light'
							$height='40px'
							onClick={() => setAction('apply')}
						>
							{isSent ? 'Изменения сохранены' : 'Применить и продолжить'}
						</AdminButton>
						<AdminButton as='link' to={'/'} $variant='cancel' $height='40px'>
							Отменить изменения
						</AdminButton>
					</FlexRow>
				</form>
			</FormProvider>
		</AdminContent>
	)
}
