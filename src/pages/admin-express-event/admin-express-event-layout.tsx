import { Outlet } from 'react-router-dom'
import { AdminContent } from 'src/components/admin-content/admin-content'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'
import { TabNavigation } from 'src/components/tab-navigation/tab-navigation'
import { expressTabs } from './consts'
import { Container } from 'src/UI/Container/Container'

export const AdminExpressEventLayout = () => {
	return (
		<>
			<div className={adminStyles.adminTitleTab}>
				<h1>Экспресс-событие</h1>
			</div>
			<AdminContent className={styles.newsContent} $backgroundColor='#ffffff' $padding='30px 0'>
				<Container $padding='0px 35px 0 35px' $paddingMobile='35px'>
					<TabNavigation navItems={expressTabs} variant='express' />
					<Outlet />
				</Container>
			</AdminContent>
		</>
	)
}
