import * as yup from 'yup'
import { type regPhotoField } from '../../../registration-page/schema'

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
	regFields: {
		photoLoad: regPhotoField
	}
}

export const typeTicketsSchema = yup.object().shape({})
