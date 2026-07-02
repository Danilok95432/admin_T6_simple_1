import { AdminSection } from 'src/components/admin-section/admin-section'

import { ControlledSelect } from 'src/components/controlled-select/controlled-select'
import { GridRow } from 'src/components/grid-row/grid-row'

import { type FC } from 'react'
import { type SelOption } from 'src/types/select'

import styles from './index.module.scss'
import { Tooltip } from 'src/components/tooltip/Tooltip'
import { InfoIconSvg } from 'src/UI/icons/infoIcon'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'

type DescSectionProps = {
	ageList?: SelOption[]
	locationsList?: SelOption[]
}

export const DescSection: FC<DescSectionProps> = ({ ageList, locationsList }) => {
	return (
		<AdminSection isBlock={false}>
			<GridRow $template='auto/ 0.5fr' $mdTemplate='1fr / 1fr' $margin='0 0 20px 0'>
				<div className={styles.inputWrapper}>
					<ControlledSelect
						label='Возрастной рейтинг *'
						name='age_list'
						selectOptions={ageList ?? [{ label: 'Не выбрано', value: '0' }]}
					/>

					<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip_age}>
						<InfoIconSvg />
					</Tooltip>
				</div>
			</GridRow>

			<div className={styles.inputWrapper}>
				<ControlledInput
					label='Точный адрес места проведения *'
					placeholder='Точный адрес места проведения'
					name='location'
					margin='0 0 25px 0'
					height='150px'
					isTextarea
				/>

				<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip}>
					<InfoIconSvg />
				</Tooltip>
			</div>

			<div className={styles.inputWrapper}>
				<ControlledInput
					label='Название места проведения *'
					placeholder='Название места проведения'
					name='location_name'
					margin='0 0 25px 0'
				/>

				<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip}>
					<InfoIconSvg />
				</Tooltip>
			</div>

			<p className={styles.placeRequest}>
				Если площадки нет в списке, Вы можете{' '}
				<a href={`/${AdminRoute.AdminEventLayout}/${AdminRoute.AdminLocationsList}/1`}>
					запросить добавление новой площадки
				</a>
			</p>
		</AdminSection>
	)
}
