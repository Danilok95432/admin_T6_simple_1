import React from 'react'
import styles from './index.module.scss'

interface CustomLegendProps {
	payload?: Array<{
		dataKey: string
		color: string
		value: string
	}>
}

export const CustomLegend: React.FC<CustomLegendProps> = ({ payload }) => {
	console.log(payload)
	return (
		<div className={styles.legend}>
			<div className={styles.column}>
				<div className={styles.item}>
					<div className={styles.colorBar} style={{ backgroundColor: '#7CD2E5' }} />
					<span className={styles.label}>Билеты, сумма выручки</span>
				</div>
				<div className={styles.item}>
					<div className={styles.colorBarRefund} />
					<span className={styles.label}>Возвраты, сумма</span>
				</div>
			</div>

			<div className={styles.column}>
				<div className={styles.item}>
					<div className={styles.colorLine}>
						<div className={styles.line} style={{ backgroundColor: '#0099BA' }} />
					</div>
					<span className={styles.label}>Билеты, количество проданных</span>
				</div>
				<div className={styles.item}>
					<div className={styles.colorLine}>
						<div className={styles.lineRefund} />
					</div>
					<span className={styles.label}>Возвраты, количество</span>
				</div>
			</div>
		</div>
	)
}
