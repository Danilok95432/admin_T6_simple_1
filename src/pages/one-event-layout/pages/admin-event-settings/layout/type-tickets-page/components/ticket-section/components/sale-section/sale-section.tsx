import { FlexRow } from 'src/components/flex-row/flex-row'
import styles from './index.module.scss'
import { ControlledCheckbox } from 'src/components/controlled-checkbox/controlled-checkbox'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'

export const SaleSection = () => {
	return (
		<FlexRow className={styles.saleSection}>
			<h3>Скидки</h3>
			<FlexRow className={styles.customCheck}>
				<ControlledCheckbox name='use_early' type='checkbox' className={styles.checkbox} />
				<FlexRow className={styles.customLabel}>
					<p>Ранний заказ: билет, купленный раньше, чем за</p>
					<ControlledInput name='refundDayLimit' className={styles.inputCustom} />
					<p>дней до события, дешевле на</p>
					<ControlledInput name='refundDayLimit' className={styles.inputCustom} />
					<p>₽</p>
				</FlexRow>
			</FlexRow>
			<FlexRow className={styles.customCheck}>
				<ControlledCheckbox name='use_group' type='checkbox' className={styles.checkbox} />
				<FlexRow className={styles.customLabel}>
					<p>Коллектив: более</p>
					<ControlledInput name='refundDayLimit' className={styles.inputCustom} />
					<p>гостей в одном билете — скидка каждого гостя в билете:</p>
					<ControlledInput name='refundDayLimit' className={styles.inputCustom} />
					<p>₽</p>
				</FlexRow>
			</FlexRow>
			<FlexRow className={styles.customCheck}>
				<ControlledCheckbox name='use_now' type='checkbox' className={styles.checkbox} />
				<FlexRow className={styles.customLabel}>
					<p>Здесь и сейчас: билет, купленный во время события, дешевле на</p>
					<ControlledInput name='refundDayLimit' className={styles.inputCustom} />
					<p>₽</p>
				</FlexRow>
			</FlexRow>
			<FlexRow className={styles.customCheck}>
				<ControlledCheckbox name='use_kid' type='checkbox' className={styles.checkbox} />
				<FlexRow className={styles.customLabel}>
					<p>Детский билет: если возраст гостя — 14 лет и менее, скидка такого гостя составляет</p>
					<ControlledInput name='refundDayLimit' className={styles.inputCustom} />
					<p>₽</p>
				</FlexRow>
			</FlexRow>
		</FlexRow>
	)
}
