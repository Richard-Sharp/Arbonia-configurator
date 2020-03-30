
export const getMainParamsHeightData = (value) => {
	debugger
	switch (value) {
		case '030':
			return ({value: '300',	code: value})
		case '050':
			return ({value: '500',	code: value})
		case '060':
			return ({value: '600',	code: value})
		case '100':
			return ({value: '1000',	code: value})
		case '150':
			return ({value: '1500',	code: value})
		case '180':
			return ({value: '1800',	code: value})
		case '200':
			return ({value: '2000',	code: value})

		default:
			return ({value: '30000',	code: value})
	}
}