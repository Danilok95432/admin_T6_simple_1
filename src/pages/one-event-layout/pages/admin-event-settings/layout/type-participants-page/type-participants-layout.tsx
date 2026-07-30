import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

export const TypeParticipantsLayout: FC = () => {
	return (
		<>
			<Helmet>
				<title>Виды и настройка участников</title>
			</Helmet>
			<Outlet />
		</>
	)
}
