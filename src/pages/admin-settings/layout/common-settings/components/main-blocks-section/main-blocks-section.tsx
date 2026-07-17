import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledCheckbox } from 'src/components/controlled-checkbox/controlled-checkbox'

import styles from './index.module.scss'

export const MainBlocksSection = () => {
	return (
		<AdminSection className={styles.mainBlocksSection} noBorder>
			<ControlledCheckbox
				name='isShowHistory'
				label='Показать блок «История»'
				$margin='0 0 20px 0'
				type='checkbox'
			/>
			<ControlledCheckbox
				name='isShowGallery'
				label='Показать галерею'
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
				name='isShowOrg'
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
