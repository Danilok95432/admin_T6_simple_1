import { FlexRow } from 'src/components/flex-row/flex-row'
import styles from './index.module.scss'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
export const DescSection = () => {
	return (
		<FlexRow className={styles.descSection}>
			<ControlledInput
				name='desc'
				isTextarea
				height='80px'
				label='Описание билета *'
				maxWidth='50%'
			/>
			<p>Это описание — публичное, то есть, видно на странице продажи билета.</p>
		</FlexRow>
	)
}
