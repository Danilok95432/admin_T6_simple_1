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
	useGetSettingsCommonQuery,
	useSaveSettingsCommonMutation,
} from 'src/store/site-settings/site-settings.api'
import { booleanToNumberString } from 'src/helpers/utils'
import { defaultMainBlocksValues, type SettingsInputs } from './schema'
import { SettingsSection } from './components/settings-section/settings-section'
import { MainBlocksSection } from './components/main-blocks-section/main-blocks-section'

export const CommonSettings: FC = () => {
	const { data: settingsData } = useGetSettingsCommonQuery(null)
	const [saveSettings] = useSaveSettingsCommonMutation()
	const methods = useForm<SettingsInputs>({
		mode: 'onBlur',
		defaultValues: defaultMainBlocksValues,
	})

	const { isSent, markAsSent } = useIsSent(methods.control)
	const [, setAction] = useState<'apply' | 'save'>('apply')

	const onSubmit: SubmitHandler<SettingsInputs> = async (data) => {
		const formData = new FormData()
		formData.append('isShowPromo', booleanToNumberString(data.isShowPromo))
		formData.append('isShowNews', booleanToNumberString(data.isShowNews))
		formData.append('isShowHistory', booleanToNumberString(data.isShowHistory))
		formData.append('isShowOrg', booleanToNumberString(data.isShowOrg))
		formData.append('isShowVideos', booleanToNumberString(data.isShowVideos))
		formData.append('isShowEvents', booleanToNumberString(data.isShowEvents))
		formData.append('isShowPartners', booleanToNumberString(data.isShowPartners))
		formData.append('isShowFaq', booleanToNumberString(data.isShowFaq))
		formData.append('isShowBtnBel', booleanToNumberString(data.isShowBtnBel))
		formData.append('isShowBtnRasp', booleanToNumberString(data.isShowBtnRasp))
		formData.append('isShowBtnRequest', booleanToNumberString(data.isShowBtnRequest))
		formData.append('title', data?.title ?? '')
		formData.append('aboutTitle', data?.aboutTitle ?? '')
		formData.append('metric', data.metric ?? '')
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
						<SettingsSection />
						<MainBlocksSection />
						<AdminControllers
							outLink={AdminRoute.AdminHome}
							isSent={isSent}
							actionHandler={setAction}
							withoutSave
						/>
					</form>
				</FormProvider>
			</AdminContent>
		</>
	)
}
