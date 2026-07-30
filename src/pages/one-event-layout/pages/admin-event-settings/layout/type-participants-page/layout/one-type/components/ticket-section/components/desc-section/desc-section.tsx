import { FlexRow } from 'src/components/flex-row/flex-row'
import styles from './index.module.scss'
import { type FC } from 'react'
import { QuillEditor } from 'src/components/quill-editor/quill-editor'

type DescSectionProps = {
	idx?: number
}

export const DescSection: FC<DescSectionProps> = ({ idx }) => {
	return (
		<FlexRow className={styles.descSection}>
			<QuillEditor
				name={`desc`}
				label='Описание вида участника *'
				sublabel='Это описание — публичное, то есть, видно в форме регистрации участника.'
				className={styles.quill}
				$heightEditor='max-content'
			/>
		</FlexRow>
	)
}
