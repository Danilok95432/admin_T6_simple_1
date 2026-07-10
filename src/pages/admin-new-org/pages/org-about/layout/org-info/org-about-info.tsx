/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { type OrgProfileInputs } from './schema'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { useIsSent } from 'src/hooks/sent-mark/sent-mark'
import { useEffect, useState } from 'react'

import { Container } from 'src/UI/Container/Container'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'

import { MainSection } from './component/main-section'
import { transformToFormData } from 'src/helpers/utils'
import { useGetInfoAboutOrgQuery, useSaveInfoAboutOrgMutation } from 'src/store/pages/pages.api'

export const OrgAboutInfo = () => {
	const { data } = useGetInfoAboutOrgQuery('org')
	const [saveHeader] = useSaveInfoAboutOrgMutation()
	const [, setAction] = useState<'apply' | 'save'>('apply')

	const methods = useForm<OrgProfileInputs>({
		mode: 'onBlur',
	})

	const { isSent, markAsSent } = useIsSent(methods.control)

	const onSubmit: SubmitHandler<OrgProfileInputs> = async (data) => {
		const newData = {
			...data,
		}
		try {
			const res = await saveHeader(transformToFormData(newData))
			if (res) markAsSent(true)
		} catch (e) {
			console.error(e)
		}
	}

	useEffect(() => {
		if (data) {
			methods.reset({ ...data })
		}
	}, [data])

	return (
		<div>
			<Container $padding='0 0 40px 0' $paddingMobile='0 0 40px 0'>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<MainSection />
						<AdminControllers variant='4' isSent={isSent} outLink={`/`} actionHandler={setAction} />
					</form>
				</FormProvider>
			</Container>
		</div>
	)
}
