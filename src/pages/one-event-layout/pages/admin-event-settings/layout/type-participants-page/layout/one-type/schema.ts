import * as yup from 'yup'

export type TypeTicketsInputs = {
	id?: string
	title?: string
	limit?: string
	price?: string
	use_accept?: boolean
	acceptdaylimit?: string
	desc?: string
	use_input?: boolean
	label_desc?: string
	use_vid?: boolean
}

export const typeTicketsSchema = yup.object().shape({})
