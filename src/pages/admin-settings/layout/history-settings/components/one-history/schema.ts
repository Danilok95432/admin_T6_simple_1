import { type ImageItemWithText } from 'src/types/photos'
import * as yup from 'yup'

export type OneHistoryInputs = {
	datetext: string
	datename: string
	dates_marker?: ImageItemWithText[]
}

export const oneHistorySchema = yup.object().shape({
	datetext: yup.string().required('Текст обязателен'),
	datename: yup.string().required('Введите название даты'),
})
