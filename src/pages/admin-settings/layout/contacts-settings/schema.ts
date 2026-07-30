import { type ImageItemWithText } from 'src/types/photos'

export type SettingsInputs = {
	phone: string
	email: string
	vk: string
	title: string
	copyright: string
	rutube: string
	address: string
	certificate: string
	metric?: string
	promoband?: ImageItemWithText[]
}
