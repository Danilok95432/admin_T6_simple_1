import * as yup from 'yup'

export type EventProfileInputs = {
	description: string
	conditions: string
	fullinfo: string
}

export const eventProfileSchema = yup.object().shape({
	description: yup.string().required('Введите краткое описание'),
	conditions: yup.string().required('Укажите условия'),
	fullinfo: yup.string().required('Введите описание'),
})
