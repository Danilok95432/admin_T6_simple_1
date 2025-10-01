import { Outlet } from 'react-router-dom'
import { AdminContent } from 'src/components/admin-content/admin-content'

import styles from './index.module.scss'
import { Container } from 'src/UI/Container/Container'

export const PlacementEventLayout = () => {
	return (
		<AdminContent $padding='0' $backgroundColor='#ffffff' className={styles.visitorsPage}>
			<Container $padding='35px 35px 0 35px' $paddingMobile='35px'>
				<div className={styles.adminTitleTab}>
					<h2>Размещение</h2>
				</div>
			</Container>
			<Outlet />
		</AdminContent>
	)
}
