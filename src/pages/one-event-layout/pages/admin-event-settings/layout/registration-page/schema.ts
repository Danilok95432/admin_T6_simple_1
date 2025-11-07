import * as yup from 'yup'

type regField = {
	active?: boolean
	req?: boolean
}

type regPhoneField = {
	active?: boolean
	req?: boolean
	use_sms?: boolean
}

type regEmailField = {
	active?: boolean
	req?: boolean
	use_email?: boolean
}

export type RegistrationSettingsInputs = {
	use_reg?: boolean
	startDate?: string
	startTime?: string
	endDate?: string
	endTime?: string
	regFields: {
		surname: regField
		name: regField
		patronymic: regField
		birthday: regField
		region: regField
		phone: regPhoneField
		email: regEmailField
	}
	guestsLimit?: string
	use_repeat_reg?: boolean
	repeatCount?: string
	rejectEmail?: boolean
	rejectPhone?: boolean
	use_group_ticket?: boolean
	use_follow?: boolean
}

export const registrationSettingsSchema = yup.object().shape({})
