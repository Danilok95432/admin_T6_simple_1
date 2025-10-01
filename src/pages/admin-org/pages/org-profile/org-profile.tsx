import { AdminContent } from 'src/components/admin-content/admin-content'
import styles from './index.module.scss'
import { Container } from 'src/UI/Container/Container'

export const OrgProfile = () => {
	return (
		<AdminContent $padding='0' $backgroundColor='#ffffff' className={styles.orgPage}>
			<Container $padding='0px 35px 0 35px' $paddingMobile='35px'>
				<div className={styles.adminTitleTab}>
					<h2>Профиль</h2>
				</div>
			</Container>
		</AdminContent>
	)
}
