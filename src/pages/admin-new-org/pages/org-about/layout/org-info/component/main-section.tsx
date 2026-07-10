import { AdminSection } from 'src/components/admin-section/admin-section'

import styles from './index.module.scss'
import { Tooltip } from 'src/components/tooltip/Tooltip'
import { InfoIconSvg } from 'src/UI/icons/infoIcon'
import { QuillEditor } from 'src/components/quill-editor/quill-editor'

export const MainSection = () => {
	return (
		<AdminSection isBlock={false} className={styles.infoSection}>
			<div className={styles.inputWrapper}>
				<QuillEditor
					name='info'
					label='Информация'
					$heightEditor='150px'
					$maxWidth='1140px'
					$width='100%'
					className={styles.editor}
				/>
				<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip}>
					<InfoIconSvg />
				</Tooltip>
			</div>
			<div className={styles.inputWrapper}>
				<QuillEditor
					name='rewards'
					label='Достижения'
					$heightEditor='150px'
					$maxWidth='1140px'
					$width='100%'
					className={styles.editor}
				/>
				<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip}>
					<InfoIconSvg />
				</Tooltip>
			</div>
			<div className={styles.inputWrapper}>
				<QuillEditor
					name='history'
					label='История'
					$heightEditor='150px'
					$maxWidth='1140px'
					$width='100%'
					className={styles.editor}
				/>
				<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip}>
					<InfoIconSvg />
				</Tooltip>
			</div>
		</AdminSection>
	)
}
