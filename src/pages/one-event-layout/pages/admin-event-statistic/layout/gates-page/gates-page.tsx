import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

export const StatisticGatesPage: FC = () => {
	return (
		<>
			<Helmet>
				<title>Ворота</title>
			</Helmet>
			<Outlet />
		</>
	)
}
