import { AdminSection } from 'src/components/admin-section/admin-section'

import styles from './index.module.scss'
import { ControlledCheckbox } from 'src/components/controlled-checkbox/controlled-checkbox'
import { DateSection } from './components/date-section/date-section'
import { FieldsSection } from './components/fields-section/fields-section'
import { FlexRow } from 'src/components/flex-row/flex-row'

export const RegistationSettingsSection = () => {
	return (
		<AdminSection
			titleText='Регистрация участников'
			fullSection
			checkBoxSection={
				<ControlledCheckbox
					className={styles.checkBox}
					name='use_reg'
					label='Открыть регистрацию участников'
					type={'checkbox'}
				/>
			}
		>
			<DateSection />
			<FieldsSection />
			<FlexRow className={styles.row}>
				<p className={styles.subtitle}>Участники на собственном транспорте</p>
				<ControlledCheckbox
					className={styles.checkBoxSmall}
					name='use_transport'
					label='Участники на собственном транспорте. В форме подачи заявки появится пункт «Еду на машине, нужна парковка» и возможность указать количество, типы и госномера транспортных средств.'
					type={'checkbox'}
					$margin='0 0 32px 0'
				/>
			</FlexRow>
			<FlexRow className={styles.row}>
				<p className={styles.subtitle}>Место для размещения</p>
				<ControlledCheckbox
					className={styles.checkBoxSmall}
					name='use_placement'
					label='Участникам нужно место для размещения. В форме подачи заявки появится пункт «Нужно размещение», выбор места размещения и возможность указать количество мест.'
					type={'checkbox'}
					$margin='0 0 32px 0'
				/>
			</FlexRow>
			<FlexRow className={styles.row}>
				<p className={styles.subtitle}>Групповая заявка участников</p>
				<ControlledCheckbox
					className={styles.checkBoxSmall}
					name='use_group'
					label='Подключить регистрацию группы участников. Участники группы проходят по одному QR-коду по очереди, количество проходов = количеству участников в группе.'
					type={'checkbox'}
				/>
			</FlexRow>
		</AdminSection>
	)
}
