import * as yup from 'yup'

export type EventPassInputs = {
	use_reg?: boolean
	startDate?: string
	startTime?: string
	endDate?: string
	endTime?: string
	guestsLimit?: string
	use_repeat_reg?: boolean
	repeatCount?: string
	rejectEmail?: boolean
	rejectPhone?: boolean
	use_group_ticket?: boolean
	use_follow?: boolean
}

export const eventPassSchema = yup.object().shape({})
