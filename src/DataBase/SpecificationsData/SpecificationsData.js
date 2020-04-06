const arboniaModel = (modelCode, height, type, depthInstallation, power, price) => {
	return (
			{
				modelCode: modelCode,
				height: height,
				type: type,
				depthInstallation: depthInstallation,
				power: {
					pw50: power
				},
				price: price
			}
	)
}

export const getArboniaModelData = (value) => (
		{
			'2030': arb2030,
			'3030': arb3030,
			'4030': arb4030,
			'5030': arb5030,
			'6030': arb6030,

			'2050': arb2050,
			'3050': arb3050,
			'4050': arb4050,
			'5050': arb5050,
			'6050': arb6050,
		}[value] || arb2030);


const arb2030 = arboniaModel(2030, 300, 2, 65, 24, 13.70);
const arb3030 = arboniaModel(3030, 300, 3, 105, 33, 14.86);
const arb4030 = arboniaModel(4030, 300, 4, 145, 43, 16.44);
const arb5030 = arboniaModel(5030, 300, 5, 185, 53, 19.65);
const arb6030 = arboniaModel(6030, 300, 6, 225, 53, 22.95);

const arb2050 = arboniaModel(2050, 500, 2, 65, 39, 14.84);
const arb3050 = arboniaModel(3050, 500, 3, 105, 53, 16.72);
const arb4050 = arboniaModel(4050, 500, 4, 145, 69, 18.61);
const arb5050 = arboniaModel(5050, 500, 5, 185, 85, 22.01);
const arb6050 = arboniaModel(6050, 500, 6, 225, 99, 25.89);


