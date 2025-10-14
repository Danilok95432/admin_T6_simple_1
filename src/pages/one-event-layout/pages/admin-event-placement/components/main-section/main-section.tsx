import { AdminSection } from 'src/components/admin-section/admin-section'
import styles from './index.module.scss'
import { ControlledCheckbox } from 'src/components/controlled-checkbox/controlled-checkbox'
import { FlexRow } from 'src/components/flex-row/flex-row'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { ReactDropzoneFiles } from 'src/components/react-dropzone-files/react-dropzone-files'
import cn from 'classnames'
import { ControlledSelect } from 'src/components/controlled-select/controlled-select'

export const MainSection = () => {
	return (
		<AdminSection isBlock={false} className={styles.titleSectionInner}>
			<FlexRow className={styles.checkboxRow}>
				<ControlledCheckbox
					name='use_event'
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
					name='event_frame'
					isTextarea
					height='113px'
					className={styles.inputCont}
				/>
			</FlexRow>
			<FlexRow className={styles.checkboxRow}>
				<ControlledCheckbox
					name='use_reg'
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
				<ControlledInput name='reg_frame' isTextarea height='113px' className={styles.inputCont} />
			</FlexRow>
			<FlexRow className={styles.checkboxRow}>
				<ControlledCheckbox
					name='use_lend'
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
						name='color_list'
						isRequired
						selectOptions={[{ label: 'Не выбрано', value: '0' }]}
						className={styles.selectSchema}
					/>
					<a href='#'>Посмотреть пример графической схемы</a>
					<a href='#'>Подтвердить выбор</a>
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
			</FlexRow>
		</AdminSection>
	)
}
