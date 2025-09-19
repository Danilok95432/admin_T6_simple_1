import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

export const PaymentsPage: FC = () => {
	return (
		<>
			<Helmet>
				<title>Оплата</title>
			</Helmet>
			<Outlet />
		</>
	)
}
