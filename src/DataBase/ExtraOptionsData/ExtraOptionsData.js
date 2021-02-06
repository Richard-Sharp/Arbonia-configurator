const size12 = {
	value: 12,
	price: 0,
	description: '1/2" внутренняя резьба',
	name: 'connectionSize',
	text: '1/2" - ВР; ',
	defaultChecked: true
};

const size34 = {
	value: 34,
	price: 0,
	description: '3/4" внутренняя резьба',
	name: 'connectionSize',
	text: '3/4" - ВР; ',
};

const size38 = {
	value: 38,
	price: 0,
	description: '3/8" внутренняя резьба',
	name: 'connectionSize',
	text: '3/8" - ВР; ',
};
const size10 = {
	value: 10,
	price: 0,
	description: '1" внутренняя резьба',
	name: 'connectionSize',
	text: '1" - ВР; ',
};

const size84 = {
	value: 84,
	price: 9.56,
	description: '3/4" наружная резьба',
	name: 'connectionSize',
	text: '3/4" - НР; '
};

const airCoolerLocationValue1 = {
	value: 1,
	image: '1',
	description: 'воздушный клапан сверху слева'
};

const airCoolerLocationValue3 = {
	value: 3,
	image: '3',
	description: 'воздушный клапан сверху справа'
}


//Типы подключений радиаторов RRN:
export const connectionTypeRRNData = [
	{
		name: 'connectionType',
		dataPrice: '0',
		dataDescription: 'боковое слева',
		value: '12',
		text: '12',
		defaultChecked: true,
		connectionSize: [size12, size34, size38, size10],
		airCoolerLocation: {
			value: 3,
			image: '3',
			description: 'сверху справа'
		},
		image: null
	},
	{
		name: 'connectionType',
		dataPrice: '0',
		dataDescription: 'боковое справа',
		value: '34',
		text: '34',
		connectionSize: [size12, size34, size38, size10],
		airCoolerLocation: {
			value: 1,
			image: '1',
			description: 'сверху слева'
		},
		image: null
	},
	{
		name: 'connectionType',
		dataPrice: '0',
		dataDescription: 'боковое  диагональное слева',
		value: '14',
		text: '14',
		connectionSize: [size12, size34, size38, size10],
		airCoolerLocation: {
			value: 3,
			image: '3',
			description: 'сверху справа'
		},
		image: null
	},
	{
		name: 'connectionType',
		dataPrice: '0',
		dataDescription: 'боковое  диагональное справа',
		value: '32',
		text: '32',
		connectionSize: [size12, size34, size38, size10],
		airCoolerLocation: {
			value: 1,
			image: '1',
			description: 'сверху слева'
		},
		image: null
	},

	{
		name: 'connectionType',
		dataPrice: 11.65,
		dataDescription: 'нижнее проходное слева-направо',
		value: '24',
		text: '24',
		connectionSize: [size12, size34, size38, size10],
		airCoolerLocation: {
			value: 3,
			image: '3',
			description: 'сверху справа'
		},
		image: null
	},
	{
		name: 'connectionType',
		dataPrice: 11.65,
		dataDescription: 'нижнее проходное справа-налево',
		value: '42',
		text: '42',
		connectionSize: [size12, size34, size38, size10],
		airCoolerLocation: {
			value: 1,
			image: '1',
			description: 'сверху слева'
		},
		image: null
	},

	{
		name: 'connectionType',
		dataPrice: 28.05,
		dataDescription: 'проходное слева-направо',
		value: '13',
		text: '13',
		connectionSize: [size12, size34, size38, size10],
		airCoolerLocation: {
			value: 0,
			image: '0',
			description: 'нет'
		},
		image: null
	},
	{
		name: 'connectionType',
		dataPrice: 28.05,
		dataDescription: 'проходное справа-налево',
		value: '31',
		text: '31',
		connectionSize: [size12, size34, size38, size10],
		airCoolerLocation: {
			value: 0,
			image: '0',
			description: 'нет'
		},
		image: null
	},
	{
		name: 'connectionType',
		dataPrice: 28.05,
		dataDescription: 'нижнее диагональное справа',
		value: '41',
		text: '41',
		connectionSize: [size12, size34, size38, size10],
		airCoolerLocation: {
			value: 1,
			image: '1',
			description: 'сверху слева'
		},
		image: null
	},
	{
		name: 'connectionType',
		dataPrice: 28.05,
		dataDescription: 'нижнее диагональное слева',
		value: '23',
		text: '23',
		connectionSize: [size12, size34, size38, size10],
		airCoolerLocation: {
			value: 3,
			image: '3',
			description: 'сверху справа'
		},
		image: null
	},

	{
		name: 'connectionType',
		dataPrice: 59.65,
		dataDescription: 'внизу слева/справа',
		value: '68',
		text: '68',
		connectionSize: [size12, size34, size38],
		airCoolerLocation: {
			value: 3,
			image: '3',
			description: 'сверху справа'
		},
		image: null
	},
	{
		name: 'connectionType',
		dataPrice: 59.65,
		dataDescription: 'внизу справа/слева',
		value: '86',
		text: '86',
		connectionSize: [size12, size34, size38],
		airCoolerLocation: {
			value: 1,
			image: '1',
			description: 'сверху слева'
		},
		image: null
	},
	{
		name: 'connectionType',
		dataPrice: 59.65,
		dataDescription: 'сверху/снизу диагональное',
		value: '58',
		text: '58',
		connectionSize: [size12, size34, size38],
		airCoolerLocation: {
			value: 3,
			image: '3',
			description: 'сверху справа'
		},
		image: null
	},
	{
		name: 'connectionType',
		dataPrice: 59.65,
		dataDescription: 'сверху/снизу диагональное',
		value: '76',
		text: '76',
		connectionSize: [size12, size34, size38],
		airCoolerLocation: {
			value: 1,
			image: '1',
			description: 'сверху слева'
		},
		image: null
	},

	{
		name: 'connectionType',
		dataPrice: 59.65,
		dataDescription: 'снизу слева',
		value: '69',
		text: '69',
		connectionSize: [size12, size38],
		airCoolerLocation: {
			value: 3,
			image: '3',
			description: 'сверху справа'
		},
		image: null
	},
	{
		name: 'connectionType',
		dataPrice: 59.65,
		dataDescription: 'снизу справа',
		value: '89',
		text: '89',
		connectionSize: [size12, size38],
		airCoolerLocation: {
			value: 1,
			image: '1',
			description: 'сверху слева'
		},
		image: null
	},

	{
		name: 'connectionType',
		dataPrice: 82.11,
		dataDescription: 'снизу/сверху диагональное',
		value: '67',
		text: '67',
		connectionSize: [size12, size34, size38],
		airCoolerLocation: {
			value: 1,
			image: '1',
			description: 'сверху слева'
		},
		image: null
	},
	{
		name: 'connectionType',
		dataPrice: 82.11,
		dataDescription: 'снизу/сверху диагональное',
		value: '85',
		text: '85',
		connectionSize: [size12, size34, size38],
		airCoolerLocation: {
			value: 3,
			image: '3',
			description: 'сверху справа'
		},
		image: null
	},
	{
		name: 'connectionType',
		dataPrice: 82.11,
		dataDescription: 'вверху слева/справа',
		value: '57',
		text: '57',
		connectionSize: [size12, size34, size38],
		airCoolerLocation: {
			value: 1,
			image: '1',
			description: 'сверху слева'
		},
		image: null
	},
	{
		name: 'connectionType',
		dataPrice: 82.11,
		dataDescription: 'вверху справа/слева',
		value: '75',
		text: '75',
		connectionSize: [size12, size34, size38],
		airCoolerLocation: {
			value: 3,
			image: '3',
			description: 'сверху справа'
		},
		image: null
	},

	{
		name: 'connectionType',
		dataPrice: 82.11,
		dataDescription: 'снизу по центру',
		value: '98',
		text: '98',
		connectionSize: [size12],
		airCoolerLocation: {
			value: 3,
			image: '3',
			description: 'сверху справа'
		},
		image: null
	},
	{
		name: 'connectionType',
		dataPrice: 82.11,
		dataDescription: 'снизу по центру',
		value: '96',
		text: '96',
		connectionSize: [size12],
		airCoolerLocation: {
			value: 1,
			image: '1',
			description: 'сверху слева'
		},
		image: null
	}];


//Типы подключений радиаторов RRV:

//Старый варинат отображения данных - СЛОЖНЫЙ:
// const connectionType89 = {
// 	name: 'connectionType',
// 	dataPrice: 0,
// 	dataDescription: 'снизу справа, вентиль справа',
// 	value: '89',
// 	text: '89',
// 	connectionSize: [size12, size84],
// 	airCoolerLocation: {
// 		value: 1,
// 		image: '1',
// 		description: 'сверху слева'
// 	},
// 	image: null,
// 	defaultChecked: true
// };
// const connectionType69 = {
// 	name: 'connectionType',
// 	dataPrice: 0,
// 	dataDescription: 'снизу слева, вентиль слева',
// 	value: '69',
// 	text: '69',
// 	connectionSize: [size12, size84],
// 	airCoolerLocation: {
// 		value: 3,
// 		image: '3',
// 		description: 'сверху справа'
// 	},
// 	image: null
// };
// const connectionType98 = {
// 	name: 'connectionType',
// 	dataPrice: 59.03,
// 	dataDescription: 'снизу по центру, вентиль слева',
// 	value: '98',
// 	text: '98',
// 	connectionSize: [size12, size84],
// 	airCoolerLocation: {
// 		value: 3,
// 		image: '3',
// 		description: 'сверху справа'
// 	},
// 	image: null
// };
// const connectionType96 = {
// 	name: 'connectionType',
// 	dataPrice: 59.03,
// 	dataDescription: 'снизу по центру, вентиль справа',
// 	value: '96',
// 	text: '96',
// 	connectionSize: [size12, size84],
// 	airCoolerLocation: {
// 		value: 1,
// 		image: '1',
// 		description: 'сверху слева'
// 	},
// 	image: null
// };
//
// //Варианты расположения втроенного вентиля (31 и 61):
// export const valveTypeData = [
// 	{
// 		name: 'valveType',
// 		value: '31',
// 		price: 127.62,
// 		description: 'со встроенным вентилем вверху',
// 		text: "Стандарнтный вентиль с подключением сбоку вверху (M30x1,5)",
// 		connectionType: [connectionType89, connectionType69, connectionType98, connectionType96],
// 		defaultChecked: true
// 	},
// 	{
// 		name: 'valveType',
// 		value: '61',
// 		price: 179.34,
// 		description: "со встроенным вентилем внизу",
// 		text: "Стандарнтный вентиль с подключением сбоку внизу (M30x1,5)",
// 		connectionType: [connectionType89, connectionType69]
// 	},
// ];

//Новый вариант - ПРОСТОЙ:
export const connectionTypeRRVData = [
	{
		name: 'connectionType',
		dataPrice: 0,
		dataDescription: 'снизу справа (вентиль справа)',
		value: '89',
		text: '89 - вентиль сверху',
		connectionSize: [size12, size84],
		airCoolerLocation: {
			value: 1,
			image: '1',
			description: 'воздушный клапан сверху слева'
		},
		image: null,
		valveTypeData: {
			valveExistence: true,
			model: "RRV",
			value: '31',
			price: 127.62,
			description: 'со встроенным вентилем вверху',
			text: "Стандарнтный вентиль с подключением сбоку вверху (M30x1,5)",
		},
		defaultChecked: true
	},
	{
		name: 'connectionType',
		dataPrice: 0,
		dataDescription: 'снизу справа, вентиль справа',
		value: '89',
		text: '89 - вентиль снизу',
		connectionSize: [size12, size84],
		airCoolerLocation: {
			value: 1,
			image: '1',
			description: 'сверху слева'
		},
		image: null,
		valveTypeData: {
			valveExistence: true,
			model: "RRV",
			value: '61',
			price: 179.34,
			description: 'со встроенным вентилем внизу',
			text: "Стандарнтный вентиль с подключением сбоку внизу (M30x1,5)",
		}
	},
	{
		name: 'connectionType',
		dataPrice: 0,
		dataDescription: 'снизу слева, вентиль слева',
		value: '69',
		text: '69 - вентиль сверху',
		connectionSize: [size12, size84],
		airCoolerLocation: {
			value: 3,
			image: '3',
			description: 'сверху справа'
		},
		image: null,
		valveTypeData: {
			valveExistence: true,
			model: "RRV",
			value: '31',
			price: 127.62,
			description: 'со встроенным вентилем вверху',
			text: "Стандарнтный вентиль с подключением сбоку вверху (M30x1,5)",
		}
	},
	{
		name: 'connectionType',
		dataPrice: 0,
		dataDescription: 'снизу слева, вентиль слева',
		value: '69',
		text: '69 - вентиль снизу',
		connectionSize: [size12, size84],
		airCoolerLocation: {
			value: 3,
			image: '3',
			description: 'сверху справа'
		},
		image: null,
		valveTypeData: {
			valveExistence: true,
			model: "RRV",
			value: '61',
			price: 179.34,
			description: 'со встроенным вентилем внизу',
			text: "Стандарнтный вентиль с подключением сбоку внизу (M30x1,5)",
		}
	},
	{
		name: 'connectionType',
		dataPrice: 59.03,
		dataDescription: 'снизу по центру, вентиль справа',
		value: '96',
		text: '96 - вентиль сверху',
		connectionSize: [size12, size84],
		airCoolerLocation: {
			value: 1,
			image: '1',
			description: 'сверху слева'
		},
		image: null,
		valveTypeData: {
			valveExistence: true,
			model: "RRV",
			value: '31',
			price: 127.62,
			description: 'со встроенным вентилем вверху',
			text: "Стандарнтный вентиль с подключением сбоку вверху (M30x1,5)",
		}
	},
	{
		name: 'connectionType',
		dataPrice: 59.03,
		dataDescription: 'снизу по центру, вентиль слева',
		value: '98',
		text: '98 - вентиль сверху',
		connectionSize: [size12, size84],
		airCoolerLocation: {
			value: 3,
			image: '3',
			description: 'сверху справа'
		},
		image: null,
		valveTypeData: {
			valveExistence: true,
			model: "RRV",
			value: '31',
			price: 127.62,
			description: 'со встроенным вентилем вверху',
			text: "Стандарнтный вентиль с подключением сбоку вверху (M30x1,5)",
		}
	},
]
