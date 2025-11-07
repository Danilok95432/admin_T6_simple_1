import { FlexRow } from 'src/components/flex-row/flex-row'
import styles from './index.module.scss'
import { ControlledCheckbox } from 'src/components/controlled-checkbox/controlled-checkbox'
export const SaleSection = () => {
	return (
		<FlexRow className={styles.saleSection}>
			<h3>Скидки</h3>
			<ControlledCheckbox
				name='use_early'
				type='checkbox'
				label='Ранний заказ: билет, купленный раньше, чем за'
				$margin='0 0 20px 0'
				className={styles.checkbox}
			/>
			<ControlledCheckbox
				name='use_group'
				type='checkbox'
				label='Коллектив: более'
				$margin='0 0 20px 0'
				className={styles.checkbox}
			/>
			<ControlledCheckbox
				name='use_now'
				type='checkbox'
				label='Здесь и сейчас: билет, купленный во время события, дешевле на'
				$margin='0 0 20px 0'
				className={styles.checkbox}
			/>
			<ControlledCheckbox
				name='use_kid'
				type='checkbox'
				label='Детский билет: если возраст гостя  — 14 лет и менее, скидка такого гостя составляет'
				$margin='0 0 20px 0'
				className={styles.checkbox}
			/>
		</FlexRow>
	)
}
