import { type NavigationItem } from 'src/types/navigation'
import { AdminSupportIconSvg } from 'src/UI/icons/adminSupportIconSVG'
import { AdminEventsIconSvg } from 'src/UI/icons/adminEventsIconSVG'
import { AdminSettingsIconSvg } from 'src/UI/icons/adminSettingsIconSVG'
// import { AdminAboutIconSvg } from 'src/UI/icons/adminFederationIconSVG'
import { AdminPartnersIconSvg } from 'src/UI/icons/adminPartnersIconSvg'
import { AdminQuestionsIcon } from 'src/UI/icons/adminQuestionsIcon'
import { AdminOrgIconSVG } from 'src/UI/icons/adminOrgIncoSVG'
import { AdminGuestsIconSVG } from 'src/UI/icons/adminGuestsIconSVG'

export const adminMenuItems: NavigationItem[] = [
	{
		title: 'Организатор',
		icon: <AdminOrgIconSVG />,
		link: 'org/info',
	},
	{
		title: 'События',
		icon: <AdminEventsIconSvg />,
		link: 'events/events-list',
	},
	{
		title: 'Гости',
		icon: <AdminGuestsIconSVG />,
		link: 'guests',
	},
	{
		title: 'Партнеры',
		icon: <AdminPartnersIconSvg />,
		link: 'partners',
	},
	{
		title: 'Частые вопросы',
		icon: <AdminQuestionsIcon />,
		link: 'frequent-questions',
	},
	{
		title: 'Поддержка',
		link: 'support',
		icon: <AdminSupportIconSvg />,
	},
	{
		title: 'Настройки сайта',
		link: 'admin-settings',
		icon: <AdminSettingsIconSvg />,
	},
]
