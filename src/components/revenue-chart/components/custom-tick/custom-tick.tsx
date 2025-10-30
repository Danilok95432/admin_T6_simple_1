type CustomXAxisTickProps = {
	x: string
	y: string
	payload: {
		coordinate: number
		index: number
		isShow: boolean
		offset: number
		tickCoord: number
		value: string
	}
	activeIndex: string
	index: number
}

export const CustomXAxisTick = ({ x, y, index, payload, activeIndex }: CustomXAxisTickProps) => {
	const isActive = index === Number(activeIndex)

	return (
		<g transform={`translate(${x},${y})`}>
			<text
				x={0}
				y={16}
				textAnchor='middle'
				fontSize={12}
				fontWeight={600}
				fill={isActive ? '#000' : '#6b6b6b'}
				style={{
					background: isActive ? '#145073' : '#000',
					padding: '4px 6px',
					borderRadius: 4,
				}}
			>
				{isActive ? payload.value : payload.value}
			</text>
		</g>
	)
}
