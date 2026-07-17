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
	isShowGallery: boolean
	title: string
	aboutTitle: string
	metric: string
}

export const defaultMainBlocksValues = {
	isShowPromo: false,
	isShowGallery: false,
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
