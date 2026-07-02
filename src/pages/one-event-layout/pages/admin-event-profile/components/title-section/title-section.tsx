import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'

import { Tooltip } from 'src/components/tooltip/Tooltip'
import { InfoIconSvg } from 'src/UI/icons/infoIcon'

import styles from './title-section.module.scss'
import { FlexRow } from 'src/components/flex-row/flex-row'

export const TitleSection = () => {
	return (
		<AdminSection isBlock={false} className={styles.titleSectionInner}>
			<FlexRow className={styles.wrapperRow}>
				<div className={styles.inputWrapper}>
					<ControlledInput
						name='title'
						label='Краткое название события *'
						placeholder='Полное название события'
						margin='0 0 0px 0'
					/>
					<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip}>
						<InfoIconSvg />
					</Tooltip>
				</div>
				<p className={styles.desc}>
					Краткое название будет показано на баннерах и в списках событий на сайте
				</p>
			</FlexRow>
			<FlexRow className={styles.wrapperRow}>
				<div className={styles.inputWrapper}>
					<ControlledInput
						name='full_name'
						label='Полное название события *'
						placeholder='Полное название события'
						margin='0 0 0px 0'
					/>

					<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip}>
						<InfoIconSvg />
					</Tooltip>
				</div>
				<p className={styles.desc}>
					Полная версия названия события: для документов, официального упоминания, указания на
					странице самого события и подобных случаев
				</p>
			</FlexRow>
		</AdminSection>
	)
}
