/* eslint-disable @typescript-eslint/naming-convention */
import { useEffect, useState, type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'
import { AdminRoute } from 'src/routes/admin-routes/consts'

import styles from './index.module.scss'
import { useIsSent } from 'src/hooks/sent-mark/sent-mark'
import {
	useGetSettingsContactsQuery,
	useSaveSettingsContactsMutation,
} from 'src/store/site-settings/site-settings.api'
import { ContactsSection } from './components/contacts-section/contacts-section'
import { FooterSection } from './components/footer-section/footer-section'
import { type SettingsInputs } from './schema'

export const ContactsSettings: FC = () => {
	const { data: settingsData } = useGetSettingsContactsQuery(null)
	const [saveSettings] = useSaveSettingsContactsMutation()
	const methods = useForm<SettingsInputs>({
		mode: 'onBlur',
	})

	const { isSent, markAsSent } = useIsSent(methods.control)
	const [, setAction] = useState<'apply' | 'save'>('apply')

	const onSubmit: SubmitHandler<SettingsInputs> = async (data) => {
		const formData = new FormData()
		formData.append('phone', data?.phone ?? '')
		formData.append('email', data?.email ?? '')
		formData.append('vk', data?.vk ?? '')
		formData.append('title', data?.title ?? '')
		formData.append('copyright', data?.copyright ?? '')
		formData.append('rutube', data?.rutube ?? '')
		formData.append('address', data?.address ?? '')
		formData.append('certificate', data?.certificate ?? '')
		try {
			const res = await saveSettings(formData)
			if (res) markAsSent(true)
		} catch (e) {
			console.error(e)
		}
	}

	useEffect(() => {
		if (settingsData) {
			methods.reset({
				...settingsData,
			})
		}
	}, [settingsData])

	return (
		<>
			<Helmet>
				<title>Общие настройки</title>
			</Helmet>
			<AdminContent
				className={styles.settingsContent}
				$backgroundColor='#ffffff'
				$padding='25px 30px 60px 40px'
			>
				{/* <PromoTable /> */}
				<FormProvider {...methods}>
					<form
						className={styles.mainBlocksForm}
						onSubmit={methods.handleSubmit(onSubmit)}
						noValidate
					>
						<ContactsSection />
						<FooterSection />
						<AdminControllers
							outLink={AdminRoute.AdminHome}
							isSent={isSent}
							actionHandler={setAction}
						/>
					</form>
				</FormProvider>
			</AdminContent>
		</>
	)
}
