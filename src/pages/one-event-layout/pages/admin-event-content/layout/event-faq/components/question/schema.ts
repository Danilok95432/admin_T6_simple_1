import { type SelOption } from 'src/types/select'
import * as yup from 'yup'

export type QuestionInputs = {
	title: string
	content: string
	hidden?: boolean
	faq_cats?: SelOption[] | string
	faq_cats_id?: string
}

export const QuestionSchema = yup.object().shape({
	title: yup.string().required('Введите вопрос'),
	content: yup.string().required('Введите ответ'),
})
