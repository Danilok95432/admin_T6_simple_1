import { AdminSection } from 'src/components/admin-section/admin-section'
import { type FC } from 'react'
import { MainSection } from './components/main-section/main-section'
import { DescSection } from './components/desc-section/desc-section'
import { SaleSection } from './components/sale-section/sale-section'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { FlexRow } from 'src/components/flex-row/flex-row'

import styles from './index.module.scss'

type TicketSectionProps = {
	index?: number
	removeHandle?: () => void
}

export const TicketSection: FC<TicketSectionProps> = ({ index = 0, removeHandle }) => {
	return (
		<AdminSection
			titleText={`Билет ${index + 1}`}
			fullSection
			close={index > 0 ? removeHandle : undefined}
		>
			<MainSection />
			<DescSection />
			<SaleSection />
			{index > 0 && (
				<FlexRow className={styles.btnsRow}>
					<AdminButton
						as='button'
						$height='40px'
						$fontSize='14px'
						$padding='0px 24px'
						type='submit'
					>
						Сохранить билет
					</AdminButton>
					<AdminButton
						as='button'
						$height='40px'
						$fontSize='14px'
						$padding='0px 24px'
						type='submit'
					>
						Удалить билет
					</AdminButton>
				</FlexRow>
			)}
		</AdminSection>
	)
}
