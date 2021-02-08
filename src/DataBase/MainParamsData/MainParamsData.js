import type2 from '../../images/types/type2.png';
import type3 from '../../images/types/type3.png';
import type4 from '../../images/types/type4.png';
import type5 from '../../images/types/type5.png';
import type6 from '../../images/types/type6.png';


export const getMainParamsHeightData = (value) => {
	switch (value) {
		case '018':
			return ({value: '180', code: value});
		case '019':
			return ({value: '190', code: value});
		case '026':
			return ({value: '260', code: value});
		case '030':
			return ({value: '300', code: value});
		case '035':
			return ({value: '350', code: value});
		case '040':
			return ({value: '400', code: value});
		case '045':
			return ({value: '450', code: value});
		case '050':
			return ({value: '500', code: value});
		case '055':
			return ({value: '550', code: value});
		case '060':
			return ({value: '600', code: value});
		case '075':
			return ({value: '750', code: value});
		case '090':
			return ({value: '900', code: value});
		case '100':
			return ({value: '1000', code: value});
		case '110':
			return ({value: '1100', code: value});
		case '120':
			return ({value: '1200', code: value});
		case '150':
			return ({value: '1500', code: value});
		case '180':
			return ({value: '1800', code: value});
		case '200':
			return ({value: '2000', code: value});
		case '220':
			return ({value: '2200', code: value});
		case '250':
			return ({value: '2500', code: value});
		case '280':
			return ({value: '2800', code: value});
		case '300':
			return ({value: '3000', code: value});
		default:
			return ({value: '500', code: '050'});
	}
};

export const heightParamsData = [
	{description: '180', value: '018'},
	{description: '190', value: '019'},
	{description: '260', value: '026'},
	{description: '300', value: '030'},
	{description: '350', value: '035'},
	{description: '400', value: '040'},
	{description: '450', value: '045'},
	{description: '500', value: '050'},
	{description: '550', value: '055'},
	{description: '600', value: '060'},
	{description: '750', value: '075'},
	{description: '900', value: '090'},
	{description: '1000', value: '100'},
	{description: '1100', value: '110'},
	{description: '1200', value: '120'},
	{description: '1500', value: '150'},
	{description: '1800', value: '180'},
	{description: '2000', value: '200'},
	{description: '2200', value: '220'},
	{description: '2500', value: '250'},
	{description: '2800', value: '280'},
	{description: '3000', value: '300'}];


export const getMainParamsTypeData = (value) => (
		{
			'2': {value: '65', code: value},
			'3': {value: '105', code: value},
			'4': {value: '145', code: value},
			'5': {value: '185', code: value},
			'6': {value: '225', code: value}
		}[value] || {value: '65', code: '2'});

export const typeParamsData = [
	{value: '2', description: '2-трубчатый', image: type2},
	{value: '3', description: '3-трубчатый', image: type3},
	{value: '4', description: '4-трубчатый', image: type4},
	{value: '5', description: '5-трубчатый', image: type5},
	{value: '6', description: '6-трубчатый', image: type6}];