import { type FC } from 'react'
import { type EventContentInputs } from 'src/pages/one-event-layout/pages/admin-event-content/layout/event-content/schema'

import { useFieldArray, useFormContext } from 'react-hook-form'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminSection } from 'src/components/admin-section/admin-section'
import { GridRow } from 'src/components/grid-row/grid-row'
import { AddButton } from 'src/UI/AddButton/AddButton'
import { FlexRow } from 'src/components/flex-row/flex-row'
import { SwitchedRadioBtns } from 'src/components/switched-radio-btns/switched-radio-btns'

import styles from './index.module.scss'

export const RouteSection: FC = () => {
	const { control } = useFormContext<EventContentInputs>()

	const { fields, append } = useFieldArray({
		control,
		name: 'routes',
	})

	return (
		<AdminSection
			titleText={`Как проехать (${fields?.length} из 3)`}
			sectionName='routes'
			additionalNodeForHead={
				<SwitchedRadioBtns
					name='hide_routes'
					contentRadio1='Показать всем'
					contentRadio2='Скрыть'
				/>
			}
		>
			<ul>
				{fields?.map((field, idx) => (
					<li className={styles.placementItem} key={field.id}>
						<h4>Маршрут {idx + 1} </h4>
						<GridRow>
							<FlexRow $direction='column' $gap='15px'>
								<ControlledInput
									name={`routes[${idx}].title`}
									placeholder='Название маршрута'
									width='100%'
								/>
								<ControlledInput
									name={`routes[${idx}].desc`}
									placeholder='Описание маршрута'
									height='58px'
									isTextarea
								/>
							</FlexRow>
							<ControlledInput
								name={`routes[${idx}].location`}
								placeholder='Текст скрипта Яндекса'
								height='106px'
								isTextarea
							/>
						</GridRow>
					</li>
				))}
			</ul>
			{fields.length < 3 && (
				<AddButton
					type='button'
					$margin='35px 0 0 0'
					onClick={() =>
						append(
							{
								title: '',
								desc: '',
								location: '',
							},
							{ shouldFocus: false },
						)
					}
				>
					Добавить еще один маршрут
				</AddButton>
			)}
		</AdminSection>
	)
}
