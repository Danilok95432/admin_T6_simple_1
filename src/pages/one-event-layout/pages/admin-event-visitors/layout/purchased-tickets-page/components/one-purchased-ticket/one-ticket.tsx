import { Container } from 'src/UI/Container/Container'
import { AdminRoute } from 'src/routes/admin-routes/consts'

import styles from './index.module.scss'
import { InfoSection } from './components/main-section/main-section'
import { Link, useParams } from 'react-router-dom'
import adminStyles from 'src/routes/admin-layout/index.module.scss'
import { GridRow } from 'src/components/grid-row/grid-row'
import { TableFiltration } from 'src/modules/table-filtration/table-filtration'
import { CustomTable } from 'src/components/custom-table/custom-table'
import { TableFooter } from 'src/components/table-footer/table-footer'
import { useAppSelector } from 'src/hooks/store'
import { useState } from 'react'
import { getFiltrationValues } from 'src/modules/table-filtration/store/table-filtration.selectors'
import { type OneTicketRegistrationsElem } from 'src/types/events'
import classNames from 'classnames'
import { useGetRegistrationsOneTicketQuery } from 'src/store/events/events.api'
import { Loader } from 'src/components/loader/loader'
import { TicketsFiltrationInputs } from './consts'

export const OnePurchasedTicket = () => {
	const { id } = useParams()
	const filterValues = useAppSelector(getFiltrationValues)
	const [currentPage, setCurrentPage] = useState(1)
	const [itemsPerPage, setItemsPerPage] = useState<number | 'all'>(100)

	const { data: ticketsData, isLoading } = useGetRegistrationsOneTicketQuery({
		event: filterValues.event,
		limit: itemsPerPage === 'all' ? undefined : itemsPerPage,
		page: itemsPerPage === 'all' ? undefined : currentPage,
	})
	const tableTitles = [
		'ID',
		'Возраст в билете',
		'ФИО гостя',
		'Роль в группе',
		'Номер билета',
		'Дата рождения',
		'Оплачено ₽',
		'Статус',
	]

	const handlePageChange = (newPage: number) => {
		setCurrentPage(newPage)
	}

	const handleItemsPerPageChange = (value: string) => {
		const newValue = value === 'all' ? 'all' : parseInt(value)
		setItemsPerPage(newValue)
		setCurrentPage(1)
	}

	const formatObjectsTableData = (tickets: OneTicketRegistrationsElem[]) => {
		return (
			tickets?.map((ticketEl) => {
				return {
					rowId: ticketEl.id,
					cells: [
						<p className={classNames(styles.titleNewsTable)} key='0'>
							{ticketEl.id}
						</p>,
						<p key='1'>{ticketEl.age}</p>,
						<p key='2'>{ticketEl.fio}</p>,
						<p key='3'>{ticketEl.role}</p>,
						<p key='4' className={styles.center}>
							{ticketEl.ticket_number}
						</p>,
						<p key='5'>{ticketEl.birthday}</p>,
						<p key='6' className={styles.center}>
							{ticketEl.paid}
						</p>,
						<p
							className={classNames({
								[styles.fullfield]: ticketEl.status === 'применен',
								[styles.rejected]: ticketEl.status === 'возврат',
								[styles.pending]: ticketEl.status === 'ожидает',
							})}
							key='7'
						>
							{ticketEl.status}
						</p>,
					],
				}
			}) ?? []
		)
	}
	return (
		<>
			<Container $padding='0px 30px 0px 30px'>
				<Link
					to={`/${AdminRoute.AdminEventLayout}/${AdminRoute.AdminEventsList}/${id}/${AdminRoute.Tickets}`}
					className={adminStyles.adminReturnLink}
				>
					Возврат к списку билетов
				</Link>
				<h4 className={styles.titleNewsForm}>ФИО пользователя</h4>
				<InfoSection />
			</Container>
			<Container $padding='0px 0px 35px 00px'>
				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.eventNewsContainer}>
						<GridRow $margin='0 0 15px 0' $padding='0 29px' className={styles.searchRow}>
							<TableFiltration filterInputs={TicketsFiltrationInputs} />
						</GridRow>
						<CustomTable
							className={styles.newsTable}
							rowData={formatObjectsTableData(ticketsData?.regs ?? [])}
							colTitles={tableTitles}
						/>
						<TableFooter
							totalElements={Number(ticketsData?.total)}
							currentPage={currentPage}
							totalPages={Math.ceil(
								Number(ticketsData?.total) /
									(itemsPerPage === 'all' ? Number(ticketsData?.total) : itemsPerPage),
							)}
							onPageChange={handlePageChange}
							onLimitChange={handleItemsPerPageChange}
							noAdd
							ticketStyle
						/>
					</div>
				)}
			</Container>
			<Link
				to={`/${AdminRoute.AdminEventLayout}/${AdminRoute.AdminEventsList}/${id}/${AdminRoute.Tickets}`}
				className={classNames(adminStyles.adminReturnLink, styles.link)}
			>
				Возврат к списку билетов
			</Link>
		</>
	)
}
