/* eslint-disable @typescript-eslint/naming-convention */
import { useEffect, useState, type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'
import { AdminRoute } from 'src/routes/admin-routes/consts'

import styles from './index.module.scss'
import { useIsSent } from 'src/hooks/sent-mark/sent-mark'
import { booleanToNumberString } from 'src/helpers/utils'
import { defaultMainBlocksValues, type SettingsInputs } from './schema'
import { MainBlocksSection } from './components/main-blocks-section/main-blocks-section'
import {
	useGetSettingsPromoQuery,
	useSaveSettingsPromoMutation,
} from 'src/store/site-settings/site-settings.api'

export const PromoSettings: FC = () => {
	const { data: settingsData } = useGetSettingsPromoQuery(null)
	const [saveSettings] = useSaveSettingsPromoMutation()
	const methods = useForm<SettingsInputs>({
		mode: 'onBlur',
		defaultValues: defaultMainBlocksValues,
	})

	const { isSent, markAsSent } = useIsSent(methods.control)
	const [, setAction] = useState<'apply' | 'save'>('apply')

	const onSubmit: SubmitHandler<SettingsInputs> = async (data) => {
		const formData = new FormData()
		formData.append('isShowPromo', booleanToNumberString(data.isShowPromo))
		formData.append('isShowBtnBel', booleanToNumberString(data.isShowBtnBel))
		formData.append('isShowBtnRasp', booleanToNumberString(data.isShowBtnRasp))
		formData.append('isShowBtnRequest', booleanToNumberString(data.isShowBtnRequest))
		formData.append('isClicked', booleanToNumberString(data.isClicked))
		formData.append('textBtnReg', data?.textBtnReg ?? '')
		formData.append('textBtnPart', data?.textBtnPart ?? '')
		formData.append(
			'id_promo_block',
			typeof data.promo_blocks === 'string'
				? data.promo_blocks
				: data.promo_blocks
					? data.promo_blocks[0].value
					: '0',
		)
		formData.append(
			'id_event',
			typeof data.events === 'string' ? data.events : data.events ? data.events[0].value : '0',
		)
		try {
			const res = await saveSettings(formData)
			if (res) markAsSent(true)
		} catch (e) {
			console.error(e)
		}
	}

	useEffect(() => {
		if (settingsData) {
			const brandsOptions = settingsData.promo_blocks ?? []
			const catalogsOptions = settingsData.events ?? []

			// Находим нужные объекты для селектов
			const brandsOption = brandsOptions.find(
				(el) => Number(el.value) === Number(settingsData.promo_blocks_id),
			)
			const catalogOption = catalogsOptions.find(
				(el) => Number(el.value) === Number(settingsData.events_id),
			)
			// Исключаем не только brands_id/catalogs_id, но и brands/catalogs из restData
			const { promo_blocks_id, events_id, promo_blocks, events, ...restData } = settingsData

			methods.reset({
				// Поля для React Select
				promo_blocks: brandsOption ? [brandsOption] : [],
				events: catalogOption ? [catalogOption] : [],
				// Все остальные поля (без brands/catalogs/brands_id/catalogs_id)
				...restData,
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
						<MainBlocksSection
							logo={settingsData?.promo_photo}
							images={settingsData?.slider_photo}
							promoBlocks={settingsData?.promo_blocks}
							events={settingsData?.events}
						/>
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
