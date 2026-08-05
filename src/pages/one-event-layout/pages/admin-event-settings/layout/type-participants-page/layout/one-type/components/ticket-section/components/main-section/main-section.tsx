import { FlexRow } from 'src/components/flex-row/flex-row'
import styles from './index.module.scss'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { ControlledCheckbox } from 'src/components/controlled-checkbox/controlled-checkbox'

export const MainSection = () => {
	return (
		<FlexRow className={styles.mainSection}>
			<FlexRow className={styles.ticketsRow}>
				<ControlledInput name={`title`} label='Название вида участников *' maxWidth='930px' />
				<ControlledInput name={`limit`} label='Участников, не более' maxWidth='200px' />
			</FlexRow>
			<FlexRow className={styles.row}>
				<ControlledCheckbox
					type='checkbox'
					name='use_input'
					label='Подключить описание при регистрации вида участников'
				/>
				<ControlledInput
					name='label_desc'
					label='Название описания'
					placeholder='Название описания'
					width='1140px'
				/>
			</FlexRow>
			<FlexRow className={styles.row}>
				<p className={styles.subtitle}>Загрузка фотографиий</p>
				<FlexRow className={styles.checkRow}>
					<ControlledCheckbox
						name='regFields.photoLoad.active'
						label='Активное поле'
						type='checkbox'
						$margin='0 0 0px 0'
					/>
					<ControlledCheckbox
						name='regFields.photoLoad.req'
						label='Обязательное поле'
						type='checkbox'
						$margin='0 0 0px 0'
					/>
					<ControlledCheckbox
						name='regFields.photoLoad.multi'
						label='Мультизагрузка (до 5 фотографий)'
						type='checkbox'
						$margin='0 0 0px 0'
					/>
				</FlexRow>
			</FlexRow>
			<FlexRow className={styles.commerceRow}>
				<FlexRow className={styles.priceRow}>
					<ControlledInput name={`price`} label='Стоимость участия *' maxWidth='200px' />
					<p className={styles.rubles}>рублей РФ</p>
				</FlexRow>
				<FlexRow className={styles.customCheck}>
					<ControlledCheckbox name={`use_accept`} type='checkbox' />
					<FlexRow className={styles.customLabel}>
						<p>Необходимо подтверждение организаторами не менее, чем за </p>
						<ControlledInput name={`acceptdaylimit`} className={styles.inputCustom} />
						<p>дней до события</p>
					</FlexRow>
				</FlexRow>
			</FlexRow>
		</FlexRow>
	)
}
