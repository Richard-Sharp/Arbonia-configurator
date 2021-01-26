
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
		dataDescription: 'сверху/снизу диагональное',
		value: '76',
		text: '76',
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
		dataDescription: 'снизу слева',
		value: '69',
		text: '69',
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
		dataDescription: 'снизу справа',
		value: '89',
		text: '89',
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
		dataPrice: 82.11,
		dataDescription: 'снизу/сверху диагональное',
		value: '67',
		text: '67',
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
		dataPrice: 82.11,
		dataDescription: 'снизу/сверху диагональное',
		value: '85',
		text: '85',
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
		dataPrice: 82.11,
		dataDescription: 'вверху слева/справа',
		value: '57',
		text: '57',
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
		dataPrice: 82.11,
		dataDescription: 'вверху справа/слева',
		value: '75',
		text: '75',
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
		dataPrice: 82.11,
		dataDescription: 'снизу по центру',
		value: '98',
		text: '98',
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
		dataPrice: 82.11,
		dataDescription: 'снизу по центру',
		value: '96',
		text: '96',
		connectionSize: [size12, size34, size38, size10],
		airCoolerLocation: {
			value: 3,
			image: '3',
			description: 'сверху справа'
		},
		image: null
	}];


