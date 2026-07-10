/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useNavigate } from 'react-router-dom'
import cn from 'classnames'

import { CustomTable } from 'src/components/custom-table/custom-table'
import { RowController } from 'src/components/row-controller/row-controller'
import { TableFooter } from 'src/components/table-footer/table-footer'

import styles from './index.module.scss'
import {
	useDeleteHistoryByIdMutation,
	useGetAllHistoryQuery,
	useGetNewIdHistoryQuery,
	useHideHistoryByIdMutation,
} from 'src/store/site-settings/site-settings.api'
import { type HistoryItem } from 'src/types/site-settings'
import { Helmet } from 'react-helmet-async'
import { AdminContent } from 'src/components/admin-content/admin-content'
import { Container } from 'src/UI/Container/Container'
import { AdminRoute } from 'src/routes/admin-routes/consts'

export const HistorySettings = () => {
	const { data } = useGetAllHistoryQuery(null)
	const { refetch: getNewId } = useGetNewIdHistoryQuery(null)
	const [deleteNewsById] = useDeleteHistoryByIdMutation()
	const [hideNewsById] = useHideHistoryByIdMutation()

	const navigate = useNavigate()

	const addHistory = async () => {
		const newIdResponse = await getNewId().unwrap()
		return newIdResponse.id
	}

	const tableTitles = ['Год', 'Текст', '']
	const formatObjectsTableData = (historyData: HistoryItem[]) => {
		return historyData.map((histEl) => {
			return {
				rowId: histEl.id,
				cells: [
					<p className={cn({ 'hidden-cell-icon': histEl.hidden }, styles.titleNewsTable)} key='0'>
						{histEl.datename}
					</p>,
					<p className={cn({ 'hidden-cell': histEl.hidden })} key='1'>
						{histEl.datetext}
					</p>,
					<RowController
						id={histEl.id}
						hideHandler={rowHideHandler}
						removeHandler={rowDeleteHandler}
						textOfHidden='Спрятать веху'
						key='2'
					/>,
				],
			}
		})
	}

	const rowDeleteHandler = async (newsId: string) => {
		await deleteNewsById(newsId)
	}

	const rowHideHandler = async (id: string) => {
		await hideNewsById(id)
	}

	const rowClickHandler = (id: string) => {
		navigate(`/${AdminRoute.AdminSettings}/${AdminRoute.AdminSettingsHistory}/${id}`)
	}

	const handleAddNewsClick = async () => {
		const newId = await addHistory()
		navigate(`/${AdminRoute.AdminSettings}/${AdminRoute.AdminSettingsHistory}/${newId}`)
	}

	// if (isLoading || !data?.history) return <Loader />

	return (
		<>
			<Helmet>
				<title>Общие настройки</title>
			</Helmet>
			<AdminContent
				className={styles.settingsContent}
				$backgroundColor='#ffffff'
				$padding='25px 0px 60px 0px'
			>
				<Container $padding='21px 30px 20px 30px'>
					<h2 className={styles.title}>Вехи истории на сайте</h2>
				</Container>
				<div>
					<CustomTable
						className={styles.newsTable}
						rowData={formatObjectsTableData(data?.history ?? [])}
						colTitles={tableTitles}
						rowClickHandler={rowClickHandler}
					/>
					<TableFooter
						totalElements={data?.history.length}
						addClickHandler={handleAddNewsClick}
						addText='Добавить веху'
					/>
				</div>
			</AdminContent>
		</>
	)
}
