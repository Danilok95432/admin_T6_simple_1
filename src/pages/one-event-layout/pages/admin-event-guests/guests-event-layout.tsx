import { Outlet, useParams } from 'react-router-dom'
import { AdminContent } from 'src/components/admin-content/admin-content'

import { TabNavigation } from 'src/components/tab-navigation/tab-navigation'
import type { TabNavigationItem } from 'src/types/navigation'

import styles from './index.module.scss'
import { Container } from 'src/UI/Container/Container'

export const GuestsEventLayout = () => {
	const { id = '' } = useParams()
	const eventTabs: TabNavigationItem[] = [
		{
			title: 'Регистрация гостей',
			link: `/event/event-guests/${id}/guests-registration`,
		},
		{
			title: 'Купленные билеты',
			link: `/event/event-guests/${id}/guests-tickets`,
		},
		{
			title: 'Сводка по гостям',
			link: `/event/event-guests/${id}/guests-statistic`,
		},
	]

	return (
		<AdminContent $padding='0' $backgroundColor='#ffffff' className={styles.visitorsPage}>
			<Container $padding='35px 35px 0 35px' $paddingMobile='35px'>
				<div className={styles.headRow}>
					<div className={styles.adminTitleTab}>
						<h2>Гости события</h2>
						<TabNavigation variant='visitors' navItems={eventTabs} />
					</div>
				</div>
			</Container>
			<Outlet />
		</AdminContent>
	)
}
