import { FlexRow } from 'src/components/flex-row/flex-row'
import styles from './index.module.scss'
import { type FC } from 'react'

type InfoCard = {
	phone: string
	email: string
	date: string
	region: string
	birthday: string
	use_group: string
}

type InfoSectionProps = {
	infoCard?: InfoCard
}

export const InfoSection: FC<InfoSectionProps> = ({ infoCard }) => {
	return (
		<section className={styles.infoSection}>
			<FlexRow className={styles.groupRow}>
				<p className={styles.label}>Номер телефона</p>
				<p className={styles.text}>{infoCard?.phone ?? 'Нет данных'}</p>
			</FlexRow>
			<FlexRow className={styles.groupRow}>
				<p className={styles.label}>E-mail</p>
				<p className={styles.text}>{infoCard?.email ?? 'Нет данных'}</p>
			</FlexRow>
			<FlexRow className={styles.groupRow}>
				<p className={styles.label}>Дата и время покупки билета</p>
				<p className={styles.text}>{infoCard?.date ?? 'Нет данных'}</p>
			</FlexRow>
			<FlexRow className={styles.groupRow}>
				<p className={styles.label}>Регион по регистрации</p>
				<p className={styles.text}>{infoCard?.region ?? 'Нет данных'}</p>
			</FlexRow>
			<FlexRow className={styles.groupRow}>
				<p className={styles.label}>Дата рождения покупателя</p>
				<p className={styles.text}>{infoCard?.birthday ?? 'Нет данных'}</p>
			</FlexRow>
			<FlexRow className={styles.groupRow}>
				<p className={styles.label}>Групповой билет</p>
				<p className={styles.text}>{infoCard?.use_group ?? 'Нет данных'}</p>
			</FlexRow>
		</section>
	)
}
