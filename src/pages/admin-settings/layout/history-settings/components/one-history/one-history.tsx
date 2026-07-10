/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { type OneHistoryInputs, oneHistorySchema } from './schema'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useIsSent } from 'src/hooks/sent-mark/sent-mark'

import { Container } from 'src/UI/Container/Container'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'
import { AdminRoute } from 'src/routes/admin-routes/consts'

import styles from './index.module.scss'
import {
	useGetHistoryByIdQuery,
	useSaveHistoryMutation,
} from 'src/store/site-settings/site-settings.api'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { Tooltip } from 'src/components/tooltip/Tooltip'
import { InfoIconSvg } from 'src/UI/icons/infoIcon'
import { AdminSection } from 'src/components/admin-section/admin-section'
import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import classNames from 'classnames'
import adminStyles from 'src/routes/admin-layout/index.module.scss'
import { AdminContent } from 'src/components/admin-content/admin-content'

export const OneHistory = () => {
	const { id = '0' } = useParams()

	const { data } = useGetHistoryByIdQuery(id)
	const [saveNewsInfo] = useSaveHistoryMutation()
	const [action, setAction] = useState<'apply' | 'save'>('apply')
	const navigate = useNavigate()

	const methods = useForm<OneHistoryInputs>({
		mode: 'onBlur',
		resolver: yupResolver(oneHistorySchema),
	})

	const { isSent, markAsSent } = useIsSent(methods.control)

	const onSubmit: SubmitHandler<OneHistoryInputs> = async (data) => {
		const formData = new FormData()
		const newsId = id
		formData.append('id', newsId)
		formData.append('datename', data.datename)
		formData.append('datetext', data.datetext)
		const res = await saveNewsInfo(formData)
		if (res) {
			markAsSent(true)
			if (action === 'save') {
				navigate(`/${AdminRoute.AdminNews}/${AdminRoute.AdminNewsList}`)
			}
		}
	}

	useEffect(() => {
		if (data) {
			methods.reset({ ...data })
		}
	}, [data])

	return (
		<>
			<AdminContent $backgroundColor='#ffffff' $padding='30px 0' $height='609px'>
				<Container>
					<Link
						to={`/${AdminRoute.AdminSettings}/${AdminRoute.AdminSettingsHistory}`}
						className={adminStyles.adminReturnLink}
					>
						Возврат к списку вех истории
					</Link>
					<h4 className={styles.titleNewsForm}>Редактировать веху истории</h4>
					<FormProvider {...methods}>
						<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
							<div className={styles.oneNewsContent}>
								<div className={styles.oneNewsContentLeft}>
									<ControlledInput
										name='datename'
										label='Год вехи *'
										margin='0 0 20px 0'
										maxWidth='205px'
									/>
									<div className={styles.inputWrapper}>
										<ControlledInput
											name='datetext'
											label='Текст вехи *'
											margin=' 0 0 20px 0'
											isTextarea
											height='150px'
										/>

										<Tooltip text='Подсказка.' position='left' wrapperClassName={styles.tooltip}>
											<InfoIconSvg />
										</Tooltip>
									</div>
								</div>
								<AdminSection titleText='Маркер вехи *'>
									<ReactDropzone
										name='logo'
										prompt='PNG, JPG, JPEG. 1920px × 480px, не более 3 Мб'
										accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
										margin='0 0 20px 0'
										previewVariant='sm-img'
										imgtype='events'
										fileImages={data?.marker}
									/>
								</AdminSection>
							</div>
							<AdminControllers
								variant='4'
								outLink={`/${AdminRoute.AdminSettings}/${AdminRoute.AdminSettingsHistory}`}
								isSent={isSent}
								actionHandler={setAction}
							/>
						</form>
					</FormProvider>
					<Link
						to={`/${AdminRoute.AdminSettings}/${AdminRoute.AdminSettingsHistory}`}
						className={classNames(adminStyles.adminReturnLink, styles.link)}
					>
						Возврат к списку вех истории
					</Link>
				</Container>
			</AdminContent>
		</>
	)
}
