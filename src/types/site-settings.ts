import { type FileWithPreview } from 'src/types/files'
import { type SelOption } from './select'
import { type ImageItemWithText } from './photos'

export type PromoBlock = {
	id: string
	title: string
	isHidden: boolean
	contentType: string
	contentChoice: string
	createdAt: Date
	promoDesktopImage: FileWithPreview[]
	promoMobileImage: FileWithPreview[]
}

export type HistoryItem = {
	id: string
	datename: string
	datetext: string
	hidden?: boolean
	dates_marker?: ImageItemWithText[]
}

export type HistoryResponse = {
	dates: HistoryItem[]
}

export type SiteSettingsResponse = {
	isShowPromo: boolean
	isShowBtnRequest: boolean
	isShowBtnBel: boolean
	isShowBtnRasp: boolean
	isShowNews: boolean
	isShowHistory: boolean
	isShowInfo: boolean
	isShowVideos: boolean
	isShowEvents: boolean
	isShowPartners: boolean
	isShowFaq: boolean
	phone: string
	email: string
	vk: string
	title: string
	rutube: string
	address: string
	certificate: string
	metric: string
	promo_blocks: SelOption[]
	events: SelOption[]
	promo_blocks_id: string
	events_id: string
	isShowOrg: boolean
	promo_photo: ImageItemWithText[]
	slider_photo: ImageItemWithText[]
}
