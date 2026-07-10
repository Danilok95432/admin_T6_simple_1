import { type FC } from 'react'
import { type ImageItemWithText } from 'src/types/photos'

import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import { AdminSection } from 'src/components/admin-section/admin-section'

type TitleSectionProps = {
	schema?: ImageItemWithText[]
}

export const LocationSection: FC<TitleSectionProps> = ({ schema }) => {
	return (
		<AdminSection titleText='Изображение схемы площадки'>
			<ReactDropzone
				name='event_schema'
				prompt='PNG, JPG, JPEG. 1000х1000px, не более 5 Мб'
				accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
				margin='0 0 20px 0'
				previewVariant='sm-img'
				imgtype='event_schema'
				fileImages={schema}
			/>
		</AdminSection>
	)
}
