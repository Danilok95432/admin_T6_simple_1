import { type SelOption } from 'src/types/select'
import * as yup from 'yup'

export type EventProfileInputs = {
	title: string
	full_name: string
	date_from: string
	time_from?: Date
	date_to: string
	time_to?: Date
	age_list?: SelOption[]
	main?: boolean
	hidden?: boolean
	location: string
	location_name: string
}

export const eventProfileSchema = yup.object().shape({
	title: yup.string().required('Введите название события'),
	full_name: yup.string().required('Введите название события'),
	date_from: yup.string().required('Введите дату'),
	date_to: yup.string().required('Введите дату'),
	location: yup.string().required('Введите адрес площадки'),
	location_name: yup.string().required('Введите название площадки'),
})
