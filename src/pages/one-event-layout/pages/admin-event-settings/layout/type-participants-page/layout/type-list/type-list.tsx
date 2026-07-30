import { type SettingsParticipantType } from 'src/types/events'
import { useNavigate, useParams } from 'react-router-dom'

import { AdminRoute } from 'src/routes/admin-routes/consts'

import { CustomTable } from 'src/components/custom-table/custom-table'

import styles from './index.module.scss'
import { Loader } from 'src/components/loader/loader'
import { useGetSettingsParticipantTypesListQuery } from 'src/store/events/events.api'
import { MainCheckBox } from 'src/UI/MainCheckBox/MainCheckBox'
import { CheckMarkSvg } from 'src/UI/icons/checkMarkSVG'

export const TypeList = () => {
	const { id = '' } = useParams()

	const { data, isLoading } = useGetSettingsParticipantTypesListQuery(id)

	const navigate = useNavigate()

	const tableTitles = [
		'ID',
		'Название вида участия',
		'Тип участия',
		'Максимум',
		'Стоимость',
		'Подтвердить не позднее',
		'Вид активен',
	]

	const formatObjectsTableData = (data: SettingsParticipantType[]) => {
		return data.map((el) => {
			return {
				rowId: el.id,
				cells: [
					<p key='0'>{el.id}</p>,
					<p key='1' className={styles.titleInner}>
						{el.title}
					</p>,
					<p key='2'>{el.type}</p>,
					<p key='3'>{el.limit}</p>,
					<p key='4'>{el.price}</p>,
					<p key='5'>{`${el.acceptdaylimit} дней до события`}</p>,
					<MainCheckBox
						key='6'
						checked={el.use_vid}
						disabled={true}
						svgNode={<CheckMarkSvg />}
						className={styles.checkBoxWrapperNews}
					/>,
				],
			}
		})
	}

	const rowClickHandler = (subId: string) => {
		navigate(
			`/${AdminRoute.AdminEvent}/${AdminRoute.AdminEventSettings}/${id}/${AdminRoute.Participants}/${subId}`,
		)
	}

	if (isLoading || !data?.participant_types) return <Loader />
	return (
		<div className={styles.programElementsPage}>
			<CustomTable
				className={styles.programTable}
				// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
				rowData={formatObjectsTableData([])}
				rowClickHandler={rowClickHandler}
				colTitles={tableTitles}
			/>
		</div>
	)
}
