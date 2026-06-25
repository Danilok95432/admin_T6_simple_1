import { type ImageItemWithText } from 'src/types/photos'
import { type SelOption } from 'src/types/select'

export type SettingsInputs = {
	isShowPromo: boolean
	isShowBtnRequest: boolean
	isShowBtnBel: boolean
	isShowBtnRasp: boolean
	isShowNews: boolean
	isShowHistory: boolean
	isShowOrg: boolean
	isShowVideos: boolean
	isShowEvents: boolean
	isShowPartners: boolean
	isShowFaq: boolean
	phone: string
	email: string
	vk: string
	title: string
	copyright: string
	rutube: string
	address: string
	certificate: string
	metric?: string
	promo_blocks: SelOption[] | string
	events: SelOption[] | string
	promo_blocks_id: string
	events_id: string
	promo_photo: ImageItemWithText[]
	slider_photo: ImageItemWithText[]
}

export const defaultMainBlocksValues = {
	isShowPromo: false,
	isShowBtnRequest: false,
	isShowBtnBel: false,
	isShowBtnRasp: false,
	isShowNews: false,
	isShowHistory: false,
	isShowOrg: false,
	isShowVideos: false,
	isShowEvents: false,
	isShowPartners: false,
	isShowFaq: false,
}
