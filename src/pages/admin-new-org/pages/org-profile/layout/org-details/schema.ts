import { type SelOption } from 'src/types/select'
import * as yup from 'yup'

export type OrgDetailsInputs = {
	bank?: string
	bik?: string
	fioDir?: string
	fullName?: string
	inn?: string
	korChet?: string
	kpp?: string
	ogrn?: string
	phone?: string
	positionDir?: SelOption[] | string
	rasChet?: string
	title?: string
	type?: boolean
}

export const orgDetailsSchema = yup.object().shape({
	type: yup.boolean(),

	fullName: yup.string().when('type', {
		is: true,
		then: (schema) => schema.notRequired(),
		otherwise: (schema) => schema.required('Введите название'),
	}),
})
