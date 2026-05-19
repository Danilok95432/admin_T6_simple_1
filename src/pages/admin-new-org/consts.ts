import { type TabNavigationItem } from 'src/types/navigation'

export const orgTabs: TabNavigationItem[] = [
	{
		title: 'Информация',
		link: `/org/fond/info`,
		indexLink: `/org/fond/info`,
	},
	{
		title: 'Документы',
		link: `/org/docs`,
		indexLink: `/org/docs`,
	},
	{
		title: 'Финансы',
		link: `/org/finances/stat`,
		indexLink: `/org/finances/stat`,
	},
]
