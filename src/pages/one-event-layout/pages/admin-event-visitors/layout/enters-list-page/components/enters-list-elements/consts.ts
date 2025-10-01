import { type FilterTableInput } from 'src/types/global'

export const TicketsFiltrationInputs: FilterTableInput[] = [
	{
		name: 'ticket',
		placeholder: 'искать по номеру билета',
		type: 'text',
	},
	{
		name: 'date',
		placeholder: 'искать по дате и времени...',
		type: 'text',
	},
	{
		name: 'gate',
		placeholder: 'искать по пункту',
		type: 'text',
	},
	{
		name: 'use_age',
		placeholder: 'возраст',
		type: 'select',
		options: [
			{ label: 'Одиночный', value: '0' },
			{ label: 'Групповой', value: '1' },
		],
	},
	{
		name: 'use_ticket',
		placeholder: 'вид билета',
		type: 'select',
		options: [
			{ label: 'Одиночный', value: '0' },
			{ label: 'Групповой', value: '1' },
		],
	},
	{
		name: 'use_sale',
		placeholder: 'вид покупки',
		type: 'select',
		options: [
			{ label: 'Одиночный', value: '0' },
			{ label: 'Групповой', value: '1' },
		],
	},
	{
		name: 'use_status',
		placeholder: 'статус',
		type: 'select',
		options: [
			{ label: 'Одиночный', value: '0' },
			{ label: 'Групповой', value: '1' },
		],
	},
]
