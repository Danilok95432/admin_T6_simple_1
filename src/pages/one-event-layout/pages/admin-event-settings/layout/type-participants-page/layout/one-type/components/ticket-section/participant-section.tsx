import { AdminSection } from 'src/components/admin-section/admin-section'
import { MainSection } from './components/main-section/main-section'
import { DescSection } from './components/desc-section/desc-section'
import { type FC } from 'react'
import { ControlledCheckbox } from 'src/components/controlled-checkbox/controlled-checkbox'

type ParticipantSectionProps = {
	title?: string
}

export const ParticipantSection: FC<ParticipantSectionProps> = ({ title }) => {
	return (
		<AdminSection
			titleText={'Спортсмены'}
			fullSection
			checkBoxSection={
				<ControlledCheckbox
					type='checkbox'
					name='use_vid'
					label={`Включить вид участников «${'Спортсмены'}»`}
				/>
			}
		>
			<MainSection />
			<DescSection />
		</AdminSection>
	)
}
