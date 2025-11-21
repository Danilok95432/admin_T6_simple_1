import { AdminSection } from 'src/components/admin-section/admin-section'
import { useState, type FC } from 'react'
import { MainSection } from './components/main-section/main-section'
import { DescSection } from './components/desc-section/desc-section'
import { SaleSection } from './components/sale-section/sale-section'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { FlexRow } from 'src/components/flex-row/flex-row'

import styles from './index.module.scss'
import { useFormContext, useWatch } from 'react-hook-form'
import { type TypeTicketsInputs } from '../../schema'

type TicketSectionProps = {
	index?: number
	removeHandle: (index: number) => Promise<void>
	removeId: number
	setIdx: (idx: string) => void
}

export const TicketSection: FC<TicketSectionProps> = ({
	index = 0,
	removeHandle,
	removeId,
	setIdx,
}) => {
	const [, setAction] = useState<'apply' | 'save'>('apply')
	const { control } = useFormContext<TypeTicketsInputs>()

	// Используем useWatch для отслеживания значения в реальном времени
	const priceValue = useWatch({
		control,
		name: `ticket_types.${index}.price`,
	})

	// Преобразуем в число и проверяем равно ли 0
	const priceNumber = parseFloat(priceValue?.toString() ?? '0')
	const isPriceZero = priceNumber === 0

	return (
		<AdminSection
			titleText={`Билет ${index + 1}`}
			fullSection
			close={index > 0 ? removeHandle : undefined}
			idxClose={removeId}
		>
			<MainSection idx={index} />
			<DescSection idx={index} />
			{!isPriceZero && <SaleSection idx={index} />}
			<FlexRow className={styles.btnsRow}>
				<AdminButton
					as='button'
					$height='40px'
					$fontSize='14px'
					$padding='0px 24px'
					type='submit'
					onClick={() => {
						setAction('save')
						setIdx(String(removeId))
					}}
				>
					Сохранить билет
				</AdminButton>
				{index > 0 && (
					<AdminButton
						as='button'
						$height='40px'
						$fontSize='14px'
						$padding='0px 24px'
						onClick={() => {
							void removeHandle(removeId)
						}}
					>
						Удалить билет
					</AdminButton>
				)}
			</FlexRow>
		</AdminSection>
	)
}
