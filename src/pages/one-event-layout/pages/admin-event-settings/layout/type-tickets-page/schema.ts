import * as yup from 'yup'

export type TypeTicketsInputs = {
	id?: string
	title?: string
	ticketsLimit?: string
	price?: string
	use_refund?: boolean
	refundDayLimit?: string
	desc?: string
	use_early?: boolean
	earlyDayLimit?: string
	earlySaleCount?: string
	use_group?: boolean
	guestsCount?: string
	saleGroup?: string
	use_now?: boolean
	saleNow?: string
	use_kid?: boolean
	saleKid?: string
}

export const typeTicketsSchema = yup.object().shape({})
