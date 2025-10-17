import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'

import styles from './index.module.scss'
import { Tooltip } from 'src/components/tooltip/Tooltip'
import { InfoIconSvg } from 'src/UI/icons/infoIcon'
import { FlexRow } from 'src/components/flex-row/flex-row'

export const MainSection = () => {
	return (
		<AdminSection isBlock={false} className={styles.infoSection}>
			<div className={styles.inputWrapper}>
				<ControlledInput
					name='shortTitle'
					label='Краткое название организатора *'
					placeholder='Краткое название организатора'
					margin='0 0 20px 0'
					maxWidth='1140px'
				/>
				<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip}>
					<InfoIconSvg />
				</Tooltip>
			</div>
			<FlexRow className={styles.adminRow}>
				<div className={styles.inputWrapper}>
					<ControlledInput
						name='title'
						label='Полное название организатора *'
						placeholder='Полное название организатора'
						maxWidth='1140px'
					/>
					<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip}>
						<InfoIconSvg />
					</Tooltip>
				</div>
				<p className={styles.disclaimer}>
					Для того, чтобы сменить официальное полное название активированного организатора,{' '}
					<a href='/'>обратитесь к администратору</a>
				</p>
			</FlexRow>
			<div className={styles.inputWrapper}>
				<ControlledInput
					name='marka'
					label='Торговая марка *'
					placeholder='Торговая марка'
					margin='0 0 20px 0'
					maxWidth='1140px'
				/>
				<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip}>
					<InfoIconSvg />
				</Tooltip>
			</div>
			<FlexRow className={styles.adminRow}>
				<div className={styles.inputWrapper}>
					<ControlledInput
						name='region'
						label='Регион и населенный пункт *'
						placeholder='Регион и населенный пункт'
						maxWidth='1140px'
						isTextarea
						height='80px'
						locked
						disabled
					/>
					<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip}>
						<InfoIconSvg />
					</Tooltip>
				</div>
				<p className={styles.disclaimer}>
					Для того, чтобы сменить регион и населенный пункт местонахождения активированного
					организатора, <a href='/'>обратитесь к администратору</a>
				</p>
			</FlexRow>
			<FlexRow className={styles.adminRow}>
				<div className={styles.inputWrapper}>
					<ControlledInput
						name='urAdress'
						label='Юридический адрес *'
						placeholder='Юридический адрес'
						maxWidth='1140px'
						isTextarea
						height='80px'
						locked
						disabled
					/>
					<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip}>
						<InfoIconSvg />
					</Tooltip>
				</div>
				<p className={styles.disclaimer}>
					Для того, чтобы сменить юридический адрес активированного организатора,{' '}
					<a href='/'>обратитесь к администратору</a>
				</p>
			</FlexRow>
			<div className={styles.inputWrapper}>
				<ControlledInput
					name='factAdress'
					label='Фактический адрес *'
					placeholder='Фактический адрес'
					margin='0 0 20px 0'
					maxWidth='1140px'
					isTextarea
					height='80px'
				/>
				<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip}>
					<InfoIconSvg />
				</Tooltip>
			</div>
			<div className={styles.inputWrapper}>
				<ControlledInput
					name='mailAdress'
					label='Адрес для почтовых отправлений *'
					placeholder='Юридический адрес'
					margin='0 0 20px 0'
					maxWidth='1140px'
					isTextarea
					height='80px'
				/>
				<Tooltip text='Подсказка' position='top' wrapperClassName={styles.tooltip}>
					<InfoIconSvg />
				</Tooltip>
			</div>
		</AdminSection>
	)
}
