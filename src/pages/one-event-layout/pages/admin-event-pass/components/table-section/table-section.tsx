import styles from './index.module.scss'
import { AdminSection } from 'src/components/admin-section/admin-section'
import { CustomTable } from 'src/components/custom-table/custom-table'
import { RowController } from 'src/components/row-controller/row-controller'
import { CopyRowPassSVG } from 'src/UI/icons/copyRowPassSVG'
import { EditRowPassSVG } from 'src/UI/icons/editRowPassSVG'

type EventPass = {
	id: string
	inspector: string
	area: string
	login: string
	password: string
}

export const TableSection = () => {
	const tableTitlesSales = ['№', 'Инспектор', 'Зона пропуска', 'Логин', 'Пароль', '']
	const editRow = () => {
		console.log('edit')
	}
	const copyRow = () => {
		console.log('copied')
	}

	const formatObjectsTableData = (passes: EventPass[]) => {
		return (
			passes?.map((passEl) => {
				return {
					rowId: passEl.id,
					cells: [
						<p key='0'>{passEl.id}</p>,
						<p key='1' className={styles.center}>
							{passEl.inspector}
						</p>,
						<p key='2'>{passEl.area}</p>,
						<p key='3'>{passEl.login}</p>,
						<p key='4'>{passEl.password}</p>,
						<RowController
							id={passEl.id}
							variant='custom'
							rejectHandler={copyRow}
							resolveHandler={editRow}
							reqBtnIcon={<CopyRowPassSVG />}
							reqBtnText='Скопировать имя, логин и пароль'
							resBtnIcon={<EditRowPassSVG />}
							resBtnText='Редактировать'
							textOfHidden='Спрятать новость'
							key='5'
						/>,
					],
				}
			}) ?? []
		)
	}
	return (
		<AdminSection isBlock={false} className={styles.tableSection}>
			<h3 className={styles.title}>Сгенерирован доступ для выбранного числа инспекторов (3)</h3>
			<CustomTable
				className={styles.passesTable}
				rowData={formatObjectsTableData([
					{
						id: '1',
						inspector: 'Афанасий',
						area: 'Главный вход',
						login: 'ins_a2477',
						password: 'qrq!017jTTdae1+',
					},
					{
						id: '2',
						inspector: 'Афанасий',
						area: 'Главный вход',
						login: 'ins_a2477',
						password: 'qrq!017jTTdae1+',
					},
					{
						id: '3',
						inspector: 'Афанасий',
						area: 'Главный вход',
						login: 'ins_a2477',
						password: 'qrq!017jTTdae1+',
					},
				])}
				colTitles={tableTitlesSales}
			/>
		</AdminSection>
	)
}
