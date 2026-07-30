import { AdminSection } from 'src/components/admin-section/admin-section'

import styles from './index.module.scss'
import { ControlledCheckbox } from 'src/components/controlled-checkbox/controlled-checkbox'
import { DateSection } from './components/date-section/date-section'
import { FieldsSection } from './components/fields-section/fields-section'
import { FlexRow } from 'src/components/flex-row/flex-row'

export const RegistationSettingsSection = () => {
	return (
		<AdminSection
			titleText='Регистрация'
			fullSection
			checkBoxSection={
				<FlexRow className={styles.row}>
					<ControlledCheckbox
						className={styles.checkBox}
						name='use_reg'
						label='Открыть регистрацию гостей'
						type={'checkbox'}
					/>
					<ControlledCheckbox
						className={styles.checkBox}
						name='use_sale'
						label='Включить продажу билетов'
						type={'checkbox'}
					/>
				</FlexRow>
			}
		>
			<DateSection />
			<FieldsSection />
			<ControlledCheckbox
				className={styles.checkBoxSmall}
				name='use_transport'
				label='Гости на собственном транспорте. В форме подачи заявки появится пункт «Еду на машине, нужна парковка» и возможность указать количество, типы и госномера транспортных средств.'
				type={'checkbox'}
				$margin='0 0 16px 0'
			/>
			<ControlledCheckbox
				className={styles.checkBoxSmall}
				name='use_placement'
				label='Гостям нужно место для размещения. В форме подачи заявки появится пункт «Нужно размещение», выбор места размещения и возможность указать количество мест.'
				type={'checkbox'}
			/>
		</AdminSection>
	)
}
