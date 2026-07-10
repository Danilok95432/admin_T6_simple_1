import { type FC } from 'react'
import { type ImageItemWithText } from 'src/types/photos'

import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import { AdminSection } from 'src/components/admin-section/admin-section'

type TitleSectionProps = {
	logo?: ImageItemWithText[]
}

export const LogoEventSection: FC<TitleSectionProps> = ({ logo }) => {
	return (
		<AdminSection titleText='Логотип события (для шапки лэндинга)'>
			<ReactDropzone
				name='event_logo'
				prompt='PNG, JPG, JPEG. 300х300px, не более 1 Мб'
				accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
				margin='0 0 20px 0'
				previewVariant='sm-img'
				imgtype='event_logo'
				fileImages={logo}
			/>
		</AdminSection>
	)
}
