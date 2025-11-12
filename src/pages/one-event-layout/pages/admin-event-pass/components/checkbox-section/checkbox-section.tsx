import { FlexRow } from 'src/components/flex-row/flex-row'
import styles from './index.module.scss'
import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledCheckbox } from 'src/components/controlled-checkbox/controlled-checkbox'
import { AdminRoute } from 'src/routes/admin-routes/consts'

export const CheckboxSection = () => {
	return (
		<AdminSection isBlock={false} className={styles.checkBoxSection}>
			<FlexRow className={styles.checkBoxesRow}>
				<FlexRow className={styles.labelsRow}>
					<FlexRow className={styles.statusesRow}>
						<p>Статус технических условий:</p>
						<p>Статус коммерческих условий:</p>
					</FlexRow>
					<FlexRow className={styles.statusesRow}>
						<p>Оплата:</p>
						<p>Документы:</p>
					</FlexRow>
				</FlexRow>
				<FlexRow className={styles.valuesRow}>
					<FlexRow className={styles.statusesRow}>
						<ControlledCheckbox
							name='check1'
							type='checkbox'
							label={'Согласованы'}
							className={styles.check}
							circle
						/>
						<ControlledCheckbox
							name='check2'
							type='checkbox'
							label={'Согласованы'}
							className={styles.check}
							circle
						/>
					</FlexRow>
					<FlexRow className={styles.statusesRow}>
						<FlexRow className={styles.specialRow}>
							<ControlledCheckbox
								name='check3'
								type='checkbox'
								customLabel={
									<p>
										Выставлен счёт: <strong>82 000.00 ₽</strong>
									</p>
								}
								className={styles.check}
								circle
							/>
							<p>
								Перейти в раздел{' '}
								<a href={`/${AdminRoute.AdminOrg}/${AdminRoute.OrgInfo}`} className={styles.link}>
									«Организатор»
								</a>
							</p>
						</FlexRow>
						<ControlledCheckbox
							name='check4'
							type='checkbox'
							customLabel={
								<p>
									{`Подписаны: ${'договор'}`}
									<br />
									{`Готовы: ${'счет, акт'}`}
									<br />
									{`В работе: ${'отчет'}`}
								</p>
							}
							className={styles.check}
							circle
						/>
					</FlexRow>
				</FlexRow>
			</FlexRow>
		</AdminSection>
	)
}
