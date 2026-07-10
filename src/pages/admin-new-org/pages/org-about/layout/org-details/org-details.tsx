import { type OrgDetailsInputs } from './schema'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { useIsSent } from 'src/hooks/sent-mark/sent-mark'
import { useEffect, useState } from 'react'

import { Container } from 'src/UI/Container/Container'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'

import { OrgMainInfoSection } from './components/org-main-info/org-main-info'

import styles from './index.module.scss'
import {
	useGetDetailsAboutOrgQuery,
	useSaveDetailsAboutOrgMutation,
} from 'src/store/pages/pages.api'

export const OrgAboutDetails = () => {
	const [, setAction] = useState<'apply' | 'save'>('apply')
	const { data } = useGetDetailsAboutOrgQuery('org')
	const [saveDetails] = useSaveDetailsAboutOrgMutation()

	const methods = useForm<OrgDetailsInputs>({
		mode: 'onBlur',
	})

	const { isSent, markAsSent } = useIsSent(methods.control)
	const onSubmit: SubmitHandler<OrgDetailsInputs> = async (data) => {
		const formData = new FormData()
		formData.append('title1', data?.title1 ?? '')
		formData.append('title2', data?.title2 ?? '')
		formData.append('title3', data?.title3 ?? '')
		formData.append('text1', data?.text1 ?? '')
		formData.append('text2', data?.text2 ?? '')
		formData.append('text3', data?.text3 ?? '')
		try {
			const res = await saveDetails(formData)
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
		<div className={styles.onePartnerPage}>
			<Container $padding='0 0 40px 0' $paddingMobile='0 0 40px 0'>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<OrgMainInfoSection />
						<AdminControllers variant='4' isSent={isSent} outLink={`/`} actionHandler={setAction} />
					</form>
				</FormProvider>
			</Container>
		</div>
	)
}
