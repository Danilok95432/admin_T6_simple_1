import cn from 'classnames'

import { CustomTable } from 'src/components/custom-table/custom-table'

import styles from './index.module.scss'
import { type EventTickets } from 'src/types/events'
import { StatusTickets } from 'src/components/status-tickets/status-tickets'
import { formatDateTimeTicket } from 'src/helpers/utils'
import { FlexRow } from 'src/components/flex-row/flex-row'
import { Container } from 'src/UI/Container/Container'
import { SalesSVG } from 'src/UI/icons/salesSVG'
import { ReturnedSVG } from 'src/UI/icons/returnedSVG'
import { TotalSVG } from 'src/UI/icons/totalSVG'

export const SaleStatElements = () => {
	const tableTitlesTickets = [
		'Вид билета',
		'Всего проданно',
		'Сумма продаж',
		'Возвращено',
		'Сумма возвратов',
		'Скидки на сумму',
		'Итоговая выручка',
	]

	const tableTitlesSales = ['Вид скидки', 'Всего раз', 'Всего на сумму']

	const formatObjectsTableData = (tickets: EventTickets[]) => {
		return (
			tickets?.map((ticketEl) => {
				return {
					rowId: ticketEl.id,
					cells: [
						<p className={cn(styles.titleNewsTable)} key='0'>
							{<StatusTickets statusCode={ticketEl.status} />}
						</p>,
						<p key='1'>{ticketEl.ticket_number}</p>,
						<p key='2' className={styles.date}>
							<span>{`${formatDateTimeTicket(ticketEl.createdate)[0]}`}</span>
							<span>{`${formatDateTimeTicket(ticketEl.createdate)[1]}`}</span>
						</p>,
						<p key='3' className={styles.center}>
							{ticketEl.group}
						</p>,
						<p key='4'>{ticketEl.fio}</p>,
						<p key='5'>{ticketEl.telphone}</p>,
						<p key='6'>{ticketEl.ticket_type}</p>,
						<p key='7'>{ticketEl.delivery_type}</p>,
					],
				}
			}) ?? []
		)
	}

	// if (isLoading || !ticketsData?.tickets) return <Loader />

	return (
		<div className={styles.salePage}>
			<Container $padding='0 30px 30px 30px'>
				<FlexRow className={styles.headRow}>
					<div className={styles.headElement}>
						<FlexRow className={styles.title}>
							<p>Продажи:</p>
							<p>8 000 876.00 ₽</p>
						</FlexRow>
						<SalesSVG />
					</div>
					<div className={styles.headElement}>
						<FlexRow className={styles.title}>
							<p>Возвраты:</p>
							<p>2 211.00 ₽</p>
						</FlexRow>
						<ReturnedSVG />
					</div>
					<div className={styles.headElement}>
						<FlexRow className={styles.title}>
							<p>Сумма:</p>
							<p>7 998 665.00 ₽</p>
						</FlexRow>
						<TotalSVG />
					</div>
				</FlexRow>
				<FlexRow className={styles.ticketsRow}>
					<h2>Билеты</h2>
					<FlexRow className={styles.ticketsTotalInfo}>
						<p className={styles.totalInfo}>
							Продано всех видов: <strong>{`1 234`}</strong>
						</p>
						<p className={styles.totalInfo}>
							Продано бесплатных: <strong>{`41`}</strong>
						</p>
						<p className={styles.totalInfo}>
							Возврат платных: <strong>{`1`}</strong>
						</p>
						<p className={styles.totalInfo}>
							Возврат бесплатных: <strong>{`2`}</strong>
						</p>
					</FlexRow>
					<CustomTable
						className={styles.ticketsTable}
						rowData={formatObjectsTableData([])}
						colTitles={tableTitlesTickets}
					/>
				</FlexRow>
				<FlexRow className={styles.salesRow}>
					<h2>Скидки</h2>
					<p className={styles.totalInfo}>
						Всего на сумму: <strong>{`57 100.00`} ₽</strong>
					</p>
					<CustomTable
						className={styles.salesTable}
						rowData={formatObjectsTableData([])}
						colTitles={tableTitlesSales}
					/>
				</FlexRow>
			</Container>
		</div>
	)
}
