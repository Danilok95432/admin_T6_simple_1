import { AdminPromptIconSvg } from 'src/UI/icons/adminPromptIconSVG'
import { FlexRow } from '../flex-row/flex-row'
import styles from './index.module.scss'
import { useState, type FC } from 'react'
import { CloseSvg } from 'src/UI/icons/closeSVG'
import cn from 'classnames'

type CustomDisclaimerProps = {
	text: string
	closable?: boolean
}

export const CustomDisclaimer: FC<CustomDisclaimerProps> = ({ text, closable = false }) => {
	const [close, setClose] = useState<boolean>(false)
	return (
		<FlexRow className={cn(styles.disclaimer, { [styles.close]: close })}>
			<FlexRow className={styles.textRow}>
				<AdminPromptIconSvg />
				<p>{text}</p>
			</FlexRow>
			<div className={styles.closeVector} onClick={() => setClose(true)}>
				{closable && <CloseSvg />}
			</div>
		</FlexRow>
	)
}
