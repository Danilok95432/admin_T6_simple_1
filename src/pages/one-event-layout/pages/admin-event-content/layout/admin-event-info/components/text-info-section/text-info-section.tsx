import { QuillEditor } from 'src/components/quill-editor/quill-editor'
// import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import styles from './index.module.scss'
import { InfoIconSvg } from 'src/UI/icons/infoIcon'
import { Tooltip } from 'src/components/tooltip/Tooltip'

export const TextInfoSection = () => {
	return (
		<>
			<div className={styles.inputWrapperTextArea}>
				<QuillEditor
					name='description'
					label='Краткое описание *'
					$heightEditor='150px'
					$maxWidth='1140px'
					$width='1140px'
				/>

				<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip_textAria}>
					<InfoIconSvg />
				</Tooltip>
			</div>
			<div className={styles.inputWrapperTextArea}>
				<QuillEditor
					name='fullinfo'
					label='Подробное описание *'
					$heightEditor='150px'
					$maxWidth='1140px'
					$width='1140px'
				/>

				<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip_textAria}>
					<InfoIconSvg />
				</Tooltip>
			</div>
			<div className={styles.inputWrapperTextArea}>
				<QuillEditor
					name='conditions'
					label='Условия участия *'
					$heightEditor='150px'
					$maxWidth='1140px'
					$width='1140px'
				/>

				<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip_textAria}>
					<InfoIconSvg />
				</Tooltip>
			</div>
		</>
	)
}
