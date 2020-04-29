
export const getMainParamsHeightData = (value) => {
	switch (value) {
		case '018':
			return ({value: '180',	code: value})
		case '019':
			return ({value: '190',	code: value})
		case '260':
			return ({value: '260',	code: value})
		case '030':
			return ({value: '300',	code: value})
		case '035':
			return ({value: '350',	code: value})
		case '040':
			return ({value: '400',	code: value})
		case '045':
			return ({value: '450',	code: value})
		case '050':
			return ({value: '500',	code: value})
		case '055':
			return ({value: '550',	code: value})
		case '060':
			return ({value: '600',	code: value})
		case '075':
			return ({value: '750',	code: value})
		case '090':
			return ({value: '900',	code: value})
		case '100':
			return ({value: '1000',	code: value})
		case '110':
			return ({value: '1100',	code: value})
		case '120':
			return ({value: '1200',	code: value})
		case '150':
			return ({value: '1500',	code: value})
		case '180':
			return ({value: '1800',	code: value})
		case '200':
			return ({value: '2000',	code: value})
		case '220':
			return ({value: '2200',	code: value})
		case '250':
			return ({value: '2500',	code: value})
		case '280':
			return ({value: '2800',	code: value})
		case '300':
			return ({value: '3000',	code: value})
		default:
			return ({value: '3000', code: value})
	}
}

export const getMainParamsTypeData = (value) => (
		{
			'2': {value: '65', code: value},
			'3': {value: '105', code: value},
			'4': {value: '145', code: value},
			'5': {value: '185', code: value},
			'6': {value: '225', code: value}
		}[value] || {value: '65', code: '2'});