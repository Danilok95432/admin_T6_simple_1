import { useState, type FC } from 'react'
import { type TypeTicketsInputs } from './schema'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'

import { AdminContent } from 'src/components/admin-content/admin-content'

import styles from './index.module.scss'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { FlexRow } from 'src/components/flex-row/flex-row'
import { TicketSection } from './components/ticket-section/ticket-section'

export const TypeTicketsPage: FC = () => {
	// const { id = '0' } = useParams()

	const methods = useForm<TypeTicketsInputs>({
		mode: 'onBlur',
	})
	const [types, setTypes] = useState([{}, {}, {}])
	const [, setAction] = useState<'apply' | 'save'>('apply')
	// const navigate = useNavigate()
	const handleAddType = () => {
		const newTypesList = types
		newTypesList.push({})
		setTypes(newTypesList)
	}

	const handleRemoveType = () => {
		const newTypesList = types
		newTypesList.pop()
		setTypes(newTypesList)
	}

	const onSubmit: SubmitHandler<TypeTicketsInputs> = async (data) => {
		console.log(data)
	}

	return (
		<AdminContent className={styles.typeTicketsPage} $backgroundColor='#fff' $padding='0 35px 30px'>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)} noValidate autoComplete='off'>
					{types.map((type, idx) => {
						return <TicketSection key={idx} index={idx} removeHandle={handleRemoveType} />
					})}
					<FlexRow>
						<AdminButton
							as='button'
							$height='40px'
							$fontSize='14px'
							$padding='0px 24px'
							type='submit'
							onClick={() => {
								setAction('save')
								handleAddType()
							}}
						>
							Добавить еще один вид билета
						</AdminButton>
					</FlexRow>
				</form>
			</FormProvider>
		</AdminContent>
	)
}
