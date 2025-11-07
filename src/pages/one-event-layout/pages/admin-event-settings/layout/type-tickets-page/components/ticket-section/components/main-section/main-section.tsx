import { FlexRow } from 'src/components/flex-row/flex-row'
import styles from './index.module.scss'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { ControlledCheckbox } from 'src/components/controlled-checkbox/controlled-checkbox'
export const MainSection = () => {
	return (
		<FlexRow className={styles.mainSection}>
			<FlexRow className={styles.ticketsRow}>
				<ControlledInput name='title' label='Название билета *' maxWidth='500px' />
				<ControlledInput name='ticketsLimit' label='В продаже, не более' maxWidth='250px' />
			</FlexRow>
			<FlexRow className={styles.commerceRow}>
				<FlexRow className={styles.priceRow}>
					<ControlledInput name='price' label='Стоимость билета *' maxWidth='300px' />
					<p>рублей РФ</p>
				</FlexRow>
				<ControlledCheckbox
					name='use_refund'
					type='checkbox'
					label='Возможен возврат не позднее, чем за'
				/>
			</FlexRow>
		</FlexRow>
	)
}
