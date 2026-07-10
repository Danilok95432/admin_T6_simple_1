import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'

import styles from './index.module.scss'
import { Tooltip } from 'src/components/tooltip/Tooltip'
import { InfoIconSvg } from 'src/UI/icons/infoIcon'
import { QuillEditor } from 'src/components/quill-editor/quill-editor'
import { FlexRow } from 'src/components/flex-row/flex-row'

export const OrgMainInfoSection = () => {
	return (
		<AdminSection isBlock={false} className={styles.infoSection}>
			<FlexRow className={styles.row}>
				<div className={styles.inputWrapper}>
					<ControlledInput
						name='title1'
						label='Название 1 раздела'
						placeholder='Название 1 раздела'
						margin='0 0 20px 0'
					/>
					<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip}>
						<InfoIconSvg />
					</Tooltip>
				</div>
				<div className={styles.inputWrapper}>
					<QuillEditor
						name='text1'
						label='Текст 1 раздела'
						$heightEditor='150px'
						$maxWidth='1140px'
						$width='100%'
						className={styles.editor}
					/>
					<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip}>
						<InfoIconSvg />
					</Tooltip>
				</div>
			</FlexRow>
			<FlexRow className={styles.row}>
				<div className={styles.inputWrapper}>
					<ControlledInput
						name='title2'
						label='Название 2 раздела'
						placeholder='Название 2 раздела'
						margin='0 0 20px 0'
					/>
					<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip}>
						<InfoIconSvg />
					</Tooltip>
				</div>
				<div className={styles.inputWrapper}>
					<QuillEditor
						name='text2'
						label='Текст 2 раздела'
						$heightEditor='150px'
						$maxWidth='1140px'
						$width='100%'
						className={styles.editor}
					/>
					<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip}>
						<InfoIconSvg />
					</Tooltip>
				</div>
			</FlexRow>
			<FlexRow className={styles.row}>
				<div className={styles.inputWrapper}>
					<ControlledInput
						name='title3'
						label='Название 3 раздела'
						placeholder='Название 3 раздела'
						margin='0 0 20px 0'
					/>
					<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip}>
						<InfoIconSvg />
					</Tooltip>
				</div>
				<div className={styles.inputWrapper}>
					<QuillEditor
						name='text3'
						label='Текст 3 раздела'
						$heightEditor='150px'
						$maxWidth='1140px'
						$width='100%'
						className={styles.editor}
					/>
					<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip}>
						<InfoIconSvg />
					</Tooltip>
				</div>
			</FlexRow>
		</AdminSection>
	)
}
