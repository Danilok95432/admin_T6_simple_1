import { Outlet } from 'react-router-dom'
import { AdminContent } from 'src/components/admin-content/admin-content'

import styles from './index.module.scss'

export const AdminEventsLayout = () => {
	return (
		<>
			<AdminContent
				className={styles.eventsListContent}
				$backgroundColor='#ffffff'
				$padding='30px 0'
			>
				<Outlet />
			</AdminContent>
		</>
	)
}
