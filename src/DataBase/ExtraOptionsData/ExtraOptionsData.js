import connectionImg12 from '../../images/connections/connection-12.png';
import connectionImg34 from '../../images/connections/connection-34.png';
import connectionImg14 from '../../images/connections/connection-14.png';
import connectionImg32 from '../../images/connections/connection-32.png';
import connectionImg24 from '../../images/connections/connection-24.png';
import connectionImg42 from '../../images/connections/connection-42.png';
import connectionImg13 from '../../images/connections/connection-13.png';
import connectionImg31 from '../../images/connections/connection-31.png';
import connectionImg23 from '../../images/connections/connection-23.png';
import connectionImg41 from '../../images/connections/connection-41.png';
import connectionImg68 from '../../images/connections/connection-68.png';
import connectionImg86 from '../../images/connections/connection-86.png';
import connectionImg58 from '../../images/connections/connection-58.png';
import connectionImg76 from '../../images/connections/connection-76.png';
import connectionImg69 from '../../images/connections/connection-69.png';
import connectionImg89 from '../../images/connections/connection-89.png';
import connectionImg50 from '../../images/connections/connection-50.png';
import connectionImg70 from '../../images/connections/connection-70.png';
import connectionImg67 from '../../images/connections/connection-67.png';
import connectionImg85 from '../../images/connections/connection-85.png';
import connectionImg57 from '../../images/connections/connection-57.png';
import connectionImg75 from '../../images/connections/connection-75.png';
import connectionImg96 from '../../images/connections/connection-96.png';
import connectionImg98 from '../../images/connections/connection-98.png';
import connectionImg07 from '../../images/connections/connection-07.png';
import connectionImg05 from '../../images/connections/connection-05.png';
import connectionImg69V from '../../images/connections/connection-69V.png';
import connectionImg89V from '../../images/connections/connection-89V.png';
import connectionImg98V from '../../images/connections/connection-98V.png';
import connectionImg96V from '../../images/connections/connection-96V.png';
import connectionImg69V61 from '../../images/connections/connection-69V-61.png';
import connectionImg89V61 from '../../images/connections/connection-89V-61.png';
import connectionImg98V61 from '../../images/connections/connection-98V-61.png';
import connectionImg96V61 from '../../images/connections/connection-96V-61.png';





const getConnectionTypeImage = (value) => (
		{
			'12': { avatar: false, src: connectionImg12},
			'34': { avatar: false, src: connectionImg34},
			'14': { avatar: false, src: connectionImg14},
			'32': { avatar: false, src: connectionImg32},
			'24': { avatar: false, src: connectionImg24},
			'42': { avatar: false, src: connectionImg42},
			'13': { avatar: false, src: connectionImg13},
			'31': { avatar: false, src: connectionImg31},
			'23': { avatar: false, src: connectionImg23},
			'41': { avatar: false, src: connectionImg41},
			'68': { avatar: false, src: connectionImg68},
			'86': { avatar: false, src: connectionImg86},
			'58': { avatar: false, src: connectionImg58},
			'76': { avatar: false, src: connectionImg76},
			'69': { avatar: false, src: connectionImg69},
			'89': { avatar: false, src: connectionImg89},
			'50': { avatar: false, src: connectionImg50},
			'70': { avatar: false, src: connectionImg70},
			'67': { avatar: false, src: connectionImg67},
			'85': { avatar: false, src: connectionImg85},
			'57': { avatar: false, src: connectionImg57},
			'75': { avatar: false, src: connectionImg75},
			'96': { avatar: false, src: connectionImg96},
			'98': { avatar: false, src: connectionImg98},
			'07': { avatar: false, src: connectionImg07},
			'05': { avatar: false, src: connectionImg05},
			'69V': { avatar: false, src: connectionImg69V},
			'89V': { avatar: false, src: connectionImg89V},
			'98V': { avatar: false, src: connectionImg98V},
			'96V': { avatar: false, src: connectionImg96V},
			'69V61': { avatar: false, src: connectionImg69V61},
			'89V61': { avatar: false, src: connectionImg89V61},
			'98V61': { avatar: false, src: connectionImg98V61},
			'96V61': { avatar: false, src: connectionImg96V61},
		}[value] || { avatar: false, src: connectionImg12});





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
};

const airCoolerLocationValue0 = {
	value: 0,
	image: '0',
	description: 'без воздушного клапана'
};

const airCoolerLocationValue = {
	value: 1,
	image: '5',
	description: 'воздушный клапан сверху слева и справа (х2)'
};



//Типы подключений радиаторов RRN:
export const connectionTypeRRNData = [
	{
		name: 'connectionType',
		dataPrice: '0',
		text: 'боковое слева',
		value: '12',
		description: '12',
		defaultChecked: true,
		connectionSize: [size12, size34, size38, size10],
		airCoolerLocation: airCoolerLocationValue3,
		image: null
	},
	{
		name: 'connectionType',
		dataPrice: '0',
		text: 'боковое справа',
		value: '34',
		description: '34',
		connectionSize: [size12, size34, size38, size10],
		airCoolerLocation: airCoolerLocationValue1,
		image: null
	},
	{
		name: 'connectionType',
		dataPrice: '0',
		text: 'боковое  диагональное слева',
		value: '14',
		description: '14',
		connectionSize: [size12, size34, size38, size10],
		airCoolerLocation: airCoolerLocationValue3,
		image: null
	},
	{
		name: 'connectionType',
		dataPrice: '0',
		text: 'боковое  диагональное справа',
		value: '32',
		description: '32',
		connectionSize: [size12, size34, size38, size10],
		airCoolerLocation: airCoolerLocationValue1,
		image: null
	},

	{
		name: 'connectionType',
		dataPrice: 11.65,
		text: 'нижнее проходное слева-направо',
		value: '24',
		description: '24',
		connectionSize: [size12, size34, size38, size10],
		airCoolerLocation: airCoolerLocationValue3,
		image: null
	},
	{
		name: 'connectionType',
		dataPrice: 11.65,
		text: 'нижнее проходное справа-налево',
		value: '42',
		description: '42',
		connectionSize: [size12, size34, size38, size10],
		airCoolerLocation: airCoolerLocationValue1,
		image: null
	},

	{
		name: 'connectionType',
		dataPrice: 28.05,
		text: 'проходное слева-направо',
		value: '13',
		description: '13',
		connectionSize: [size12, size34, size38, size10],
		airCoolerLocation: airCoolerLocationValue0,
		image: null
	},
	{
		name: 'connectionType',
		dataPrice: 28.05,
		text: 'проходное справа-налево',
		value: '31',
		description: '31',
		connectionSize: [size12, size34, size38, size10],
		airCoolerLocation: airCoolerLocationValue0,
		image: null
	},
	{
		name: 'connectionType',
		dataPrice: 28.05,
		text: 'нижнее диагональное справа',
		value: '41',
		description: '41',
		connectionSize: [size12, size34, size38, size10],
		airCoolerLocation: airCoolerLocationValue1,
		image: null
	},
	{
		name: 'connectionType',
		dataPrice: 28.05,
		text: 'нижнее диагональное слева',
		value: '23',
		description: '23',
		connectionSize: [size12, size34, size38, size10],
		airCoolerLocation: airCoolerLocationValue3,
		image: null
	},

	{
		name: 'connectionType',
		dataPrice: 59.65,
		text: 'внизу слева/справа',
		value: '68',
		description: '68',
		connectionSize: [size12, size34, size38],
		airCoolerLocation: airCoolerLocationValue3,
		image: null
	},
	{
		name: 'connectionType',
		dataPrice: 59.65,
		text: 'внизу справа/слева',
		value: '86',
		description: '86',
		connectionSize: [size12, size34, size38],
		airCoolerLocation: airCoolerLocationValue1,
		image: null
	},
	{
		name: 'connectionType',
		dataPrice: 59.65,
		text: 'сверху/снизу диагональное',
		value: '58',
		description: '58',
		connectionSize: [size12, size34, size38],
		airCoolerLocation: airCoolerLocationValue3,
		image: null
	},
	{
		name: 'connectionType',
		dataPrice: 59.65,
		text: 'сверху/снизу диагональное',
		value: '76',
		description: '76',
		connectionSize: [size12, size34, size38],
		airCoolerLocation: airCoolerLocationValue1,
		image: null
	},

	{
		name: 'connectionType',
		dataPrice: 59.65,
		text: 'снизу слева',
		value: '69',
		description: '69',
		connectionSize: [size12, size38],
		airCoolerLocation: airCoolerLocationValue3,
		image: null
	},
	{
		name: 'connectionType',
		dataPrice: 59.65,
		text: 'снизу справа',
		value: '89',
		description: '89',
		connectionSize: [size12, size38],
		airCoolerLocation: airCoolerLocationValue1,
		image: null
	},
	{
		name: 'connectionType',
		dataPrice: 59.65,
		text: 'сверху слева',
		value: '50',
		description: '50',
		connectionSize: [size12, size38],
		airCoolerLocation: airCoolerLocationValue3,
		image: null
	},
	{
		name: 'connectionType',
		dataPrice: 59.65,
		text: 'сверху справа',
		value: '70',
		description: '70',
		connectionSize: [size12, size38],
		airCoolerLocation: airCoolerLocationValue1,
		image: null
	},
	{
		name: 'connectionType',
		dataPrice: 82.11,
		text: 'снизу/сверху диагональное',
		value: '67',
		description: '67',
		connectionSize: [size12, size34, size38],
		airCoolerLocation: airCoolerLocationValue1,
		image: null
	},
	{
		name: 'connectionType',
		dataPrice: 82.11,
		text: 'снизу/сверху диагональное',
		value: '85',
		description: '85',
		connectionSize: [size12, size34, size38],
		airCoolerLocation: airCoolerLocationValue3,
		image: null
	},
	{
		name: 'connectionType',
		dataPrice: 82.11,
		text: 'вверху слева/справа',
		value: '57',
		description: '57',
		connectionSize: [size12, size34, size38],
		airCoolerLocation: airCoolerLocationValue1,
		image: null
	},
	{
		name: 'connectionType',
		dataPrice: 82.11,
		text: 'вверху справа/слева',
		value: '75',
		description: '75',
		connectionSize: [size12, size34, size38],
		airCoolerLocation: airCoolerLocationValue3,
		image: null
	},

	{
		name: 'connectionType',
		dataPrice: 82.11,
		text: 'снизу по центру',
		value: '98',
		description: '98',
		connectionSize: [size12],
		airCoolerLocation: airCoolerLocationValue3,
		image: null
	},
	{
		name: 'connectionType',
		dataPrice: 82.11,
		text: 'снизу по центру',
		value: '96',
		description: '96',
		connectionSize: [size12],
		airCoolerLocation: airCoolerLocationValue1,
		image: null
	},
	{
		name: 'connectionType',
		dataPrice: 82.11,
		text: 'сверху по центру',
		value: '07',
		description: '07',
		connectionSize: [size12],
		airCoolerLocation: airCoolerLocationValue3,
		image: null
	},
	{
		name: 'connectionType',
		dataPrice: 82.11,
		text: 'сверху по центру',
		value: '05',
		description: '05',
		connectionSize: [size12],
		airCoolerLocation: airCoolerLocationValue1,
		image: null
	},
];


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
		airCoolerLocation: airCoolerLocationValue1,
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
		airCoolerLocation: airCoolerLocationValue,
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
		airCoolerLocation: airCoolerLocationValue3,
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
		airCoolerLocation: airCoolerLocationValue,
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
		airCoolerLocation: airCoolerLocationValue1,
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
		airCoolerLocation: airCoolerLocationValue3,
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
];
