import { type ImageItemWithText } from 'src/types/photos'
import { type SelOption } from 'src/types/select'

export type SettingsInputs = {
	isShowPromo: boolean
	isShowBtnRequest: boolean
	isShowBtnBel: boolean
	isShowBtnRasp: boolean
	promo_blocks: SelOption[] | string
	events: SelOption[] | string
	promo_blocks_id: string
	events_id: string
	promo_photo: ImageItemWithText[]
	slider_photo: ImageItemWithText[]
	textBtnReg?: string
	textBtnPart?: string
}

export const defaultMainBlocksValues = {
	isShowPromo: false,
	isShowBtnRequest: false,
	isShowBtnBel: false,
	isShowBtnRasp: false,
}
