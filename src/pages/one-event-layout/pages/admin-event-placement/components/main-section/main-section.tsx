import { AdminSection } from 'src/components/admin-section/admin-section'
import styles from './index.module.scss'
import { ControlledSelect } from 'src/components/controlled-select/controlled-select'
import { type SelOption } from 'src/types/select'
import { type FC } from 'react'
import { useSaveDomainLandingChoiceMutation } from 'src/store/events/events.api'
import { useParams } from 'react-router-dom'
import { useFormContext, useWatch } from 'react-hook-form'
import { type PlacementInputs } from '../../schema'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { toast } from 'react-toastify'
import { FlexRow } from 'src/components/flex-row/flex-row'
import { CustomDisclaimer } from 'src/components/custom-disclaimer/custom-disclaimer'

type MainSectionProps = {
	colorList?: SelOption[]
	domainList?: SelOption[]
}

export const MainSection: FC<MainSectionProps> = ({
	colorList = [{ label: '', value: '' }],
	domainList = [{ label: '', value: '' }],
}) => {
	const { id = '' } = useParams()
	const { control } = useFormContext<PlacementInputs>()
	// const colorChoice = useWatch({
	// 	control,
	// 	name: 'color_schema',
	// })
	const domainChoice = useWatch({
		control,
		name: 'domains_list',
	})
	// const [saveColorChoice] = useSaveColorLandingChoiceMutation()
	const [saveDomainChoice] = useSaveDomainLandingChoiceMutation()
	// const saveHandler = async () => {
	// 	const formData = new FormData()
	// 	formData.append('id_event', id)
	// 	formData.append('id_color_schema', String(colorChoice))
	// 	await saveColorChoice(formData)
	// }

	const normalizeExternalUrl = (url?: string) => {
		if (!url) return ''

		if (url.startsWith('http://') || url.startsWith('https://')) {
			return url
		}

		return `https://${url}`
	}

	const landingHref =
		domainList[0]?.label !== 'Поддомен не выбран' ? normalizeExternalUrl(domainList[0]?.label) : ''

	const saveDomain = async () => {
		if (!domainChoice) {
			toast.error('Выберите поддомен')
			return
		}

		const formData = new FormData()
		formData.append('id', id)
		formData.append('id_domain', String(domainChoice))

		try {
			await saveDomainChoice(formData).unwrap()

			toast.success('Поддомен сохранен')
		} catch (err) {
			console.error('Ошибка при сохранении:', err)
			toast.error('Ошибка сохранения')
		}
	}

	return (
		<AdminSection isBlock={false} className={styles.titleSectionInner}>
			<CustomDisclaimer className={styles.disc}>
				<p>
					Выбранный и сохраненный поддомен нельзя изменить самостоятельно. Обратитесь к оператору{' '}
					<a href={`mailto:info@npotau.ru`}>технической поддержки</a>
				</p>
			</CustomDisclaimer>
			<FlexRow className={styles.placementRow}>
				<ControlledSelect
					label='Выбор поддомена'
					name='domains_list'
					isRequired
					selectOptions={domainList ?? [{ label: 'Не выбрано', value: '0' }]}
					disabled={domainList[0].label !== 'Поддомен не выбран'}
					className={styles.selectSchema}
					margin='0 0 15px 0'
				/>
				<AdminButton
					as='button'
					$height='40px'
					$margin='0 0 20px 0'
					onClick={saveDomain}
					$variant={domainList[0].label !== 'Поддомен не выбран' ? 'disabled' : 'primary'}
				>
					Сохранить выбор поддомена
				</AdminButton>
				<a
					className={`${styles.link} ${!landingHref ? styles.linkDisabled : ''}`}
					href={landingHref || undefined}
					target={landingHref ? '_blank' : undefined}
					rel={landingHref ? 'noreferrer' : undefined}
					aria-disabled={!landingHref}
					onClick={(event) => {
						if (!landingHref) {
							event.preventDefault()
						}
					}}
				>
					Перейти на лендинг события
				</a>
			</FlexRow>
			{/* <FlexRow className={styles.checkboxRow}>
				<ControlledCheckbox
					name='use_widget_event'
					label='Включить виджет события на стороннем сайте'
					type='checkbox'
					className={styles.checkbox}
				/>
				<p className={cn(styles.desc, styles.marginDesc)}>
					Будут применены стандартные настройки: виджет события доступен к размещению на любом
					сайте, ссылка на регистрацию включена.
				</p>
				<p className={styles.desc}>
					Код виджета регистрации на событие создается системой автоматически. Для того, чтобы
					показать виджет на стороннем сайте, скопируйте, пожалуйста, код, размещенный в белом поле
					ниже, и полностью вставьте его на страницу нужного сайта.
				</p>
				<p className={cn(styles.desc, styles.marginDesc)}>
					<strong>Внимание: </strong>на стороннем сайте должен быть разрешен показ содержимого
					iframe!
				</p>
				<ControlledInput
					name='widget_event_code'
					isTextarea
					height='113px'
					className={styles.inputCont}
				/>
			</FlexRow>
			<FlexRow className={styles.checkboxRow}>
				<ControlledCheckbox
					name='use_widget_reg'
					label='Включить виджет регистрации на стороннем сайте'
					type='checkbox'
					className={styles.checkbox}
				/>
				<p className={cn(styles.desc, styles.marginDesc)}>
					Будут применены стандартные настройки: виджет регистрации доступен к размещению на любом
					сайте, форма регистрации отображается полностью.
				</p>
				<p className={styles.desc}>
					Код виджета регистрации на событие создается системой автоматически. Для того, чтобы
					показать виджет на стороннем сайте, скопируйте, пожалуйста, код, размещенный в белом поле
					ниже, и полностью вставьте его на страницу нужного сайта.
				</p>
				<p className={cn(styles.desc, styles.marginDesc)}>
					<strong>Внимание: </strong>на стороннем сайте должен быть разрешен показ содержимого
					iframe!
				</p>
				<ControlledInput
					name='widget_reg_code'
					isTextarea
					height='113px'
					className={styles.inputCont}
				/>
			</FlexRow>
			<FlexRow className={styles.checkboxRow}>
				<ControlledCheckbox
					name='use_create_land'
					label='Создать лэндинг события'
					type='checkbox'
					className={styles.checkbox}
				/>
				<p className={cn(styles.desc, styles.marginDesc)}>
					Будут применены стандартные настройки: максимальное заполнение страницы данными,
					визуальная схема «темное на светлом, стандарт», включена полная регистрации.
				</p>
				<FlexRow className={styles.selectRow}>
					<ControlledSelect
						label='Выбор графической схемы'
						name='color_schema'
						isRequired
						selectOptions={colorList ?? [{ label: 'Не выбрано', value: '0' }]}
						className={styles.selectSchema}
					/>
					<a href='#'>Посмотреть пример графической схемы</a>
					<a href='#' onClick={saveHandler}>
						Подтвердить выбор
					</a>
				</FlexRow>
				<p className={cn(styles.desc, styles.marginDesc)}>
					Код лэндинга события создается системой автоматически. Для того, чтобы разместить лэндинг,
					скачайте сгенерированный архив и разместите его на сайте так, чтобы файл index.html и все
					прочее содержимое архива были разархивированы и находились в однной нужной папке, не
					нарушая внутренней структуры содержимого архива.
				</p>
				<p className={cn(styles.desc, styles.marginDesc)}>
					Для создания нестандартного лендинга, <a href='#'>свяжитесь, пожалуйста, с нами</a>
					<br />
					<strong>Внимание: </strong>стоимость создания нестандартного лендинга зависит от сложности
					работ и запросов организатора события!
				</p>
				<ReactDropzoneFiles
					name='lending'
					label='Архив лэндинга (скачайте для размещения)'
					className={styles.inputCont}
				/>
			</FlexRow> */}
		</AdminSection>
	)
}
