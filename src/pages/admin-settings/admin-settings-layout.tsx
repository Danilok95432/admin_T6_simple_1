import { Outlet } from 'react-router-dom'

import { TabNavigation } from 'src/components/tab-navigation/tab-navigation'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import type { TabNavigationItem } from 'src/types/navigation'

export const AdminSettingsLayout = () => {
	const eventTabs: TabNavigationItem[] = [
		{
			title: 'Настройки',
			link: `/admin-settings/common-settings`,
		},
		{
			title: 'Промо-блок',
			link: `/admin-settings/promo-settings`,
			indexLink: `/admin-settings/promo-settings`,
		},
		{
			title: 'Контакты, лента, футер',
			link: `/admin-settings/contacts-settings`,
			indexLink: `/admin-settings/contacts-settings`,
		},
		{
			title: 'История',
			link: `/admin-settings/history-settings`,
			indexLink: `/admin-settings/history-settings`,
		},
	]
	return (
		<>
			<div className={adminStyles.adminTitleTab}>
				<h1>Общие настройки</h1>
				<TabNavigation navItems={eventTabs} />
			</div>
			<Outlet />
		</>
	)
}
