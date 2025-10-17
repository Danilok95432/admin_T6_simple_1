import { GridRow } from 'src/components/grid-row/grid-row'
import RevenueChart, {
	type ChartColors,
	type ChartDataItem,
} from 'src/components/revenue-chart/revenue-chart'
import { TableFiltration } from 'src/modules/table-filtration/table-filtration'
import { TicketsFiltrationInputs } from './consts'

import styles from './index.module.scss'
import { FlexRow } from 'src/components/flex-row/flex-row'
import { SalesSVG } from 'src/UI/icons/salesSVG'
import { ReturnedSVG } from 'src/UI/icons/returnedSVG'
import { TotalSVG } from 'src/UI/icons/totalSVG'
import { QRSVG } from 'src/UI/icons/qrSVG'

export const OrgFinancesStat = () => {
	const chartData: ChartDataItem[] = [
		{ date: 'Сен 30', revenue: 1130, refunds: 250, soldCount: 8, refundCount: 11 },
		{ date: 'Окт 1', revenue: 950, refunds: 100, soldCount: 7.8, refundCount: 9 },
		{ date: 'Окт 2', revenue: 720, refunds: 40, soldCount: 2.5, refundCount: 5.5 },
		{ date: 'Окт 3', revenue: 400, refunds: 5, soldCount: 0, refundCount: 3 },
		{ date: 'Окт 4', revenue: 560, refunds: 15, soldCount: 0, refundCount: 4 },
		{ date: 'Окт 5', revenue: 430, refunds: 10, soldCount: 0, refundCount: 3 },
		{ date: 'Окт 6', revenue: 320, refunds: 0, soldCount: 0, refundCount: 2 },
		{ date: 'Окт 7', revenue: 0, refunds: 0, soldCount: 0, refundCount: 0 },
	]
	const customColors: ChartColors = {
		revenueBar: '#5CC9A7',
		refundBar: '#FFC5C5',
		soldLine: '#0070F3',
		refundLine: '#E63946',
	}
	return (
		<div>
			<GridRow $margin='0 0 15px 0' $padding='0 29px' className={styles.searchRow}>
				<TableFiltration filterInputs={TicketsFiltrationInputs} />
			</GridRow>
			<FlexRow className={styles.headRow}>
				<div className={styles.headElement}>
					<FlexRow className={styles.blockEl}>
						<FlexRow className={styles.topEl}>
							<FlexRow className={styles.title}>
								<p>Билетов продано за период</p>
								<p>82 992</p>
							</FlexRow>
							<QRSVG />
						</FlexRow>
						<FlexRow className={styles.bottomEl}>
							<p>За все время:</p>
							<p>998 876 234 567</p>
						</FlexRow>
					</FlexRow>
				</div>
				<div className={styles.headElement}>
					<FlexRow className={styles.blockEl}>
						<FlexRow className={styles.topEl}>
							<FlexRow className={styles.title}>
								<p>Выручка за период</p>
								<p>82 992 000 ₽</p>
							</FlexRow>
							<SalesSVG color={'#BCB9B9'} />
						</FlexRow>
						<FlexRow className={styles.bottomEl}>
							<p>998 876 234 567</p>
							<p>₽</p>
						</FlexRow>
					</FlexRow>
				</div>
				<div className={styles.headElement}>
					<FlexRow className={styles.blockEl}>
						<FlexRow className={styles.topEl}>
							<FlexRow className={styles.title}>
								<p>Возвратов сделано за период</p>
								<p>2 992</p>
							</FlexRow>
							<ReturnedSVG color={'#BCB9B9'} />
						</FlexRow>
						<FlexRow className={styles.bottomEl}>
							<p>7 887</p>
							<p>на сумму 7 887 000 ₽</p>
						</FlexRow>
					</FlexRow>
				</div>
				<div className={styles.headElement}>
					<FlexRow className={styles.blockEl}>
						<FlexRow className={styles.topEl}>
							<FlexRow className={styles.title}>
								<p>Сейчас на балансе</p>
								<p>82 992 000 ₽</p>
							</FlexRow>
							<TotalSVG color={'#BCB9B9'} />
						</FlexRow>
						<FlexRow className={styles.bottomEl}>
							<p>Получено:</p>
							<p>998 876 234 567 ₽</p>
						</FlexRow>
					</FlexRow>
				</div>
			</FlexRow>
			<RevenueChart data={chartData} colors={customColors} />
		</div>
	)
}
