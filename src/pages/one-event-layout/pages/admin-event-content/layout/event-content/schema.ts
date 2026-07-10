import { type InfoBlockContent, type linksEvent, type placementsEvent } from 'src/types/events'
import { type FileItem } from 'src/types/files'
import { type ImageItemWithText } from 'src/types/photos'
import * as yup from 'yup'

export type EventContentInputs = {
	placements?: placementsEvent[]
	schemas?: placementsEvent[]
	linksBlock_title?: string
	hide_placements?: boolean
	hide_schemas?: boolean
	hide_gallery?: boolean
	links?: linksEvent[]
	hide_links?: boolean
	documents?: FileItem[]
	hide_documents?: boolean
	infoblock?: InfoBlockContent
	event_logo?: ImageItemWithText[]
	event_schema?: ImageItemWithText[]
}

export const eventContentSchema = yup.object().shape({})
