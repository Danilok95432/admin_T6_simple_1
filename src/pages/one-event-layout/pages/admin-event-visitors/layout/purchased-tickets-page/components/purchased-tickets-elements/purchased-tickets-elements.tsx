import cn from 'classnames'

import { CustomTable } from 'src/components/custom-table/custom-table'
import { TableFooter } from 'src/components/table-footer/table-footer'
import { GridRow } from 'src/components/grid-row/grid-row'

import styles from './index.module.scss'
import { TableFiltration } from 'src/modules/table-filtration/table-filtration'
import { TicketsFiltrationInputs } from './consts'
import { type EventTicketsElem } from 'src/types/events'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAppSelector } from 'src/hooks/store'
import { getFiltrationValues } from 'src/modules/table-filtration/store/table-filtration.selectors'
import { useGetTicketsListQuery } from 'src/store/events/events.api'
import { Loader } from 'src/components/loader/loader'

export const PurchasedTicketsElements = () => {
	const { id = '0' } = useParams()
	const filterValues = useAppSelector(getFiltrationValues)
	const [currentPage, setCurrentPage] = useState(1)
	const [itemsPerPage, setItemsPerPage] = useState<number | 'all'>(100)
	const navigate = useNavigate()

	const { data: ticketsData, isLoading } = useGetTicketsListQuery({
		id,
		email: filterValues.email,
		ticketNumber: filterValues.ticket_number,
		ticketType: filterValues.ticket_type,
		purchaseType: filterValues.purchase_type,
		status: filterValues.status,
		limit: itemsPerPage === 'all' ? undefined : itemsPerPage,
		page: itemsPerPage === 'all' ? undefined : currentPage,
	})

	const handlePageChange = (newPage: number) => {
		setCurrentPage(newPage)
	}

	const handleItemsPerPageChange = (value: string) => {
		const newValue = value === 'all' ? 'all' : parseInt(value)
		setItemsPerPage(newValue)
		setCurrentPage(1)
	}

	const rowClickHandler = (personId: string) => {
		navigate(
			`/${AdminRoute.AdminEvent}/${AdminRoute.AdminEventLists}/${id}/${AdminRoute.OnePersonStatistic}/${personId}`,
		)
	}

	const tableTitles = [
		'ID',
		'Вид билета',
		'Возраст',
		'Номер билета',
		'Вид покупки',
		'Телефон',
		'E-mail',
		'Скидка',
		'Оплачено ₽',
		'Статус',
	]

	const sortTableTitles = ['Дата и время продажи']

	const formatObjectsTableData = (tickets: EventTicketsElem[]) => {
		return (
			tickets?.map((ticketEl) => {
				return {
					rowId: ticketEl.id,
					cells: [
						<p className={cn(styles.titleNewsTable)} key='0'>
							{ticketEl.id}
						</p>,
						<p key='1'>{ticketEl.ticket_type}</p>,
						<p key='2'>{ticketEl.age}</p>,
						<p key='3' className={styles.center}>
							{ticketEl.ticket_number}
						</p>,
						<p key='4'>{ticketEl.purchase_type}</p>,
						<p key='5'>{ticketEl.phone}</p>,
						<p key='6'>{ticketEl.email}</p>,
						<p key='7' className={styles.center}>
							{ticketEl.discount}
						</p>,
						<p key='8' className={styles.center}>
							{ticketEl.paid}
						</p>,
						<p
							className={cn({
								[styles.fullfield]: ticketEl.status === 'применен',
								[styles.rejected]: ticketEl.status === 'возврат',
								[styles.pending]: ticketEl.status === 'ожидает',
							})}
							key='9'
						>
							{ticketEl.status}
						</p>,
					],
				}
			}) ?? []
		)
	}

	if (isLoading || !ticketsData?.tickets) return <Loader />

	return (
		<div className={styles.eventNewsContainer}>
			<GridRow $margin='0 0 15px 0' $padding='0 29px' className={styles.searchRow}>
				<TableFiltration filterInputs={TicketsFiltrationInputs} />
			</GridRow>
			<CustomTable
				className={styles.newsTable}
				rowData={formatObjectsTableData(ticketsData?.tickets ?? [])}
				colTitles={tableTitles}
				sortTitles={sortTableTitles}
				rowClickHandler={rowClickHandler}
			/>
			<TableFooter
				totalElements={Number(ticketsData?.total)}
				currentPage={currentPage}
				totalPages={Math.ceil(
					Number(ticketsData.total) /
						(itemsPerPage === 'all' ? Number(ticketsData.total) : itemsPerPage),
				)}
				onPageChange={handlePageChange}
				onLimitChange={handleItemsPerPageChange}
				noAdd
				downloadBtn
				ticketStyle
			/>
		</div>
	)
}
