import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledCheckbox } from 'src/components/controlled-checkbox/controlled-checkbox'

import styles from './index.module.scss'
import { useFormContext, useWatch } from 'react-hook-form'
import { ControlledSelect } from 'src/components/controlled-select/controlled-select'
import { FlexRow } from 'src/components/flex-row/flex-row'
import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import { useState, useCallback, useEffect } from 'react'
import { useActions } from 'src/hooks/actions/actions'
import { ImageModal } from 'src/modals/images-modal/images-modal'
import { useGetNewIdImageQuery } from 'src/store/uploadImages/uploadImages.api'
import { type ImageItemWithText } from 'src/types/photos'
import { AddButton } from 'src/UI/AddButton/AddButton'
import { AddImageCulturePlusSVG } from 'src/UI/icons/addImageCulturePlusSVG'

type MainBlocksSectionProps = {
	images?: ImageItemWithText[]
	idItem?: string
	logo?: ImageItemWithText[]
}

export const MainBlocksSection = ({ images, idItem, logo }: MainBlocksSectionProps) => {
	const { control } = useFormContext()

	const usePromo = useWatch({
		control,
		name: 'isShowPromo',
		defaultValue: false,
	})

	const usePromoBlockSelected = useWatch({
		control,
		name: 'promo-block',
		defaultValue: '1',
	})

	const [localeImages, setLocaleImages] = useState<ImageItemWithText[]>(images ?? [])
	const { refetch: getNewId } = useGetNewIdImageQuery({
		imgtype: 'events_photo',
		idItem,
	})

	const addImage = async () => {
		const newIdResponse = await getNewId().unwrap()
		return newIdResponse.id
	}

	const syncAddImagesHandler = useCallback((newImage: ImageItemWithText) => {
		setLocaleImages((prevImages) => [...prevImages, newImage])
	}, [])

	const syncEditImagesHandler = useCallback((editImage: ImageItemWithText) => {
		setLocaleImages((prevImages) => {
			return prevImages.map((image) => {
				if (image.id === editImage.id) {
					return { ...image, ...editImage }
				}
				return image
			})
		})
	}, [])

	const { openModal } = useActions()

	const handleOpenModal = async () => {
		const newId = await addImage()
		openModal(
			<ImageModal
				id={newId}
				imgtype='events_photo'
				syncAddHandler={syncAddImagesHandler}
				syncEditHandler={syncEditImagesHandler}
			/>,
		)
	}

	useEffect(() => {
		setLocaleImages(images ?? [])
	}, [images])
	console.log(usePromoBlockSelected)
	return (
		<AdminSection className={styles.mainBlocksSection} noBorder>
			<h2>Блоки главной страницы</h2>
			<ControlledCheckbox
				name='isShowPromo'
				label='Показывать промо-блок'
				$margin='0 0 16px 0'
				type='checkbox'
			/>
			{usePromo && (
				<div className={styles.promoSettings}>
					<ControlledSelect
						name='promo-block'
						selectOptions={[
							{ value: '1', label: 'Главное событие' },
							{ value: '2', label: 'Слайдер' },
						]}
						label='Выбор промо-блока'
						margin='0 0 16px 0'
					/>
					<ControlledSelect
						name='events'
						selectOptions={[
							{ value: '1', label: 'Cобытие 1' },
							{ value: '2', label: 'Cобытие 2' },
						]}
						label='Выбор события'
						margin='0 0 16px 0'
					/>
					<FlexRow className={styles.checkboxRow}>
						<ControlledCheckbox
							name='useRasp'
							label='Показать ссылку «Расписание события»'
							type='checkbox'
							$margin='0 0 16px 0'
						/>
						<ControlledCheckbox
							name='useReg'
							label='Показать кнопку «Регистрация и билеты»'
							type='checkbox'
							$margin='0 0 16px 0'
						/>
						<ControlledCheckbox
							name='useReq'
							label='Показать кнопку «Подать заявку для участников»'
							type='checkbox'
							$margin='0 0 16px 0'
						/>
					</FlexRow>
					{usePromoBlockSelected === '1' ||
					(usePromoBlockSelected &&
						usePromoBlockSelected.length > 0 &&
						usePromoBlockSelected[0].value === '1') ? (
						<ReactDropzone
							name='logo'
							prompt='PNG, JPG, JPEG. 1220х480px, не более 3 Мб'
							accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
							margin='0 0 20px 0'
							previewVariant='sm-img'
							imgtype='events'
							fileImages={logo}
							label='Изображение (1920px × 480px)'
							className={styles.dropzone}
						/>
					) : (
						<ReactDropzone
							margin='0 0 0 0'
							previewVariant='img-list'
							variant='culture'
							name='photos'
							isBigPreview={true}
							accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
							maxFiles={8}
							fileImages={localeImages}
							syncAdd={syncAddImagesHandler}
							syncEdit={syncEditImagesHandler}
							imgtype='events_photo'
							dzAreaClassName={styles.eventGalleryController}
							className={styles.dropzone}
							multiple
							label='Изображение для слайдера (1920px × 480px)'
							customOpenModal={
								<AddButton
									onClick={handleOpenModal}
									icon={<AddImageCulturePlusSVG />}
									$padding='44px 60px'
								>
									{' '}
								</AddButton>
							}
							customUploadBtn={
								<AddButton
									onClick={handleOpenModal}
									icon={<AddImageCulturePlusSVG />}
									$padding='44px 60px'
								>
									{' '}
								</AddButton>
							}
						/>
					)}
				</div>
			)}
			<ControlledCheckbox
				name='isShowHistory'
				label='Показать блок «История»'
				$margin='0 0 20px 0'
				type='checkbox'
			/>
			<ControlledCheckbox
				name='isShowEvents'
				label='Показать блок «События»'
				$margin='0 0 20px 0'
				type='checkbox'
			/>
			<ControlledCheckbox
				name='isShowNews'
				label='Показать блок «Новости»'
				$margin='0 0 20px 0'
				type='checkbox'
			/>
			<ControlledCheckbox
				name='isShowVideos'
				label='Показать блок «Видеолента»'
				$margin='0 0 20px 0'
				type='checkbox'
			/>
			<ControlledCheckbox
				name='isShowOrgs'
				label='Показать блок «Организаторы игр»'
				$margin='0 0 20px 0'
				type='checkbox'
			/>
			<ControlledCheckbox
				name='isShowPartners'
				label='Показать блок «Партнеры»'
				$margin='0 0 20px 0'
				type='checkbox'
			/>
			<ControlledCheckbox
				name='isShowFaq'
				label='Показать блок «Часто задаваемые вопросы»'
				type='checkbox'
				$margin='0 0 20px 0'
			/>
		</AdminSection>
	)
}
