const arboniaModel = (modelCode, power, price) => {
	return (
			{
				modelCode: modelCode,
				// height: height,
				// type: type,
				// depthInstallation: depthInstallation,
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

//(модель, высота, трубки, глубина, мощность, цена)
//180
const arb5030 = arboniaModel(5030, 53, 21.00);
const arb6030 = arboniaModel(6030, 53, 24.52);
//190
const arb2030 = arboniaModel(2030, 24, 14.63);
const arb3030 = arboniaModel(3030, 33, 15.88);
const arb4030 = arboniaModel(4030, 43, 17.57);
//260
const arb2026 = arboniaModel(2026, 24, 14.63);
const arb3026 = arboniaModel(3026, 33, 15.88);
const arb4026 = arboniaModel(4026, 43, 17.57);
const arb5026 = arboniaModel(5026, 53, 21.00);
const arb6026 = arboniaModel(6026, 53, 24.52);
//300
const arb2030 = arboniaModel(2030, 24, 14.63);
const arb3030 = arboniaModel(3030, 33, 15.88);
const arb4030 = arboniaModel(4030, 43, 17.57);
const arb5030 = arboniaModel(5030, 53, 21.00);
const arb6030 = arboniaModel(6030, 53, 24.52);
//350
const arb2030 = arboniaModel(2030, 24, 14.63);
const arb3030 = arboniaModel(3030, 33, 15.88);
const arb4030 = arboniaModel(4030, 43, 17.57);
const arb5030 = arboniaModel(5030, 53, 21.00);
const arb6030 = arboniaModel(6030, 53, 24.52);
//400
const arb2030 = arboniaModel(2030, 24, 14.63);
const arb3030 = arboniaModel(3030, 33, 15.88);
const arb4030 = arboniaModel(4030, 43, 17.57);
const arb5030 = arboniaModel(5030, 53, 21.00);
const arb6030 = arboniaModel(6030, 53, 24.52);
//450
const arb2030 = arboniaModel(2030, 24, 14.63);
const arb3030 = arboniaModel(3030, 33, 15.88);
const arb4030 = arboniaModel(4030, 43, 17.57);
const arb5030 = arboniaModel(5030, 53, 21.00);
const arb6030 = arboniaModel(6030, 53, 24.52);
//500
const arb2050 = arboniaModel(2050, 49, 15.86);
const arb3050 = arboniaModel(3050, 53, 17.86);
const arb4050 = arboniaModel(4050, 69, 19.89);
const arb5050 = arboniaModel(5050, 85, 23.52);
const arb6050 = arboniaModel(6050, 99, 27.66);
//550
const arb2030 = arboniaModel(2030, 24, 14.63);
const arb3030 = arboniaModel(3030, 33, 15.88);
const arb4030 = arboniaModel(4030, 43, 17.57);
const arb5030 = arboniaModel(5030, 53, 21.00);
const arb6030 = arboniaModel(6030, 53, 24.52);
//600
const arb2030 = arboniaModel(2030, 24, 14.63);
const arb3030 = arboniaModel(3030, 33, 15.88);
const arb4030 = arboniaModel(4030, 43, 17.57);
const arb5030 = arboniaModel(5030, 53, 21.00);
const arb6030 = arboniaModel(6030, 53, 24.52);
//750
const arb2030 = arboniaModel(2030, 24, 14.63);
const arb3030 = arboniaModel(3030, 33, 15.88);
const arb4030 = arboniaModel(4030, 43, 17.57);
const arb5030 = arboniaModel(5030, 53, 21.00);
const arb6030 = arboniaModel(6030, 53, 24.52);
//900
const arb2030 = arboniaModel(2030, 24, 14.63);
const arb3030 = arboniaModel(3030, 33, 15.88);
const arb4030 = arboniaModel(4030, 43, 17.57);
const arb5030 = arboniaModel(5030, 53, 21.00);
const arb6030 = arboniaModel(6030, 53, 24.52);
//1000
const arb2030 = arboniaModel(2030, 24, 14.63);
const arb3030 = arboniaModel(3030, 33, 15.88);
const arb4030 = arboniaModel(4030, 43, 17.57);
const arb5030 = arboniaModel(5030, 53, 21.00);
const arb6030 = arboniaModel(6030, 53, 24.52);
//1100
const arb2030 = arboniaModel(2030, 24, 14.63);
const arb3030 = arboniaModel(3030, 33, 15.88);
const arb4030 = arboniaModel(4030, 43, 17.57);
const arb5030 = arboniaModel(5030, 53, 21.00);
const arb6030 = arboniaModel(6030, 53, 24.52);
//1200
const arb2030 = arboniaModel(2030, 24, 14.63);
const arb3030 = arboniaModel(3030, 33, 15.88);
const arb4030 = arboniaModel(4030, 43, 17.57);
const arb5030 = arboniaModel(5030, 53, 21.00);
const arb6030 = arboniaModel(6030, 53, 24.52);
//1500
const arb2030 = arboniaModel(2030, 24, 14.63);
const arb3030 = arboniaModel(3030, 33, 15.88);
const arb4030 = arboniaModel(4030, 43, 17.57);
const arb5030 = arboniaModel(5030, 53, 21.00);
const arb6030 = arboniaModel(6030, 53, 24.52);
//1800
const arb2030 = arboniaModel(2030, 24, 14.63);
const arb3030 = arboniaModel(3030, 33, 15.88);
const arb4030 = arboniaModel(4030, 43, 17.57);
const arb5030 = arboniaModel(5030, 53, 21.00);
const arb6030 = arboniaModel(6030, 53, 24.52);
//2000
const arb2030 = arboniaModel(2030, 24, 14.63);
const arb3030 = arboniaModel(3030, 33, 15.88);
const arb4030 = arboniaModel(4030, 43, 17.57);
const arb5030 = arboniaModel(5030, 53, 21.00);
const arb6030 = arboniaModel(6030, 53, 24.52);
//2200
const arb2030 = arboniaModel(2030, 24, 14.63);
const arb3030 = arboniaModel(3030, 33, 15.88);
const arb4030 = arboniaModel(4030, 43, 17.57);
const arb5030 = arboniaModel(5030, 53, 21.00);
const arb6030 = arboniaModel(6030, 53, 24.52);
//2500
const arb2030 = arboniaModel(2030, 24, 14.63);
const arb3030 = arboniaModel(3030, 33, 15.88);
const arb4030 = arboniaModel(4030, 43, 17.57);
const arb5030 = arboniaModel(5030, 53, 21.00);
const arb6030 = arboniaModel(6030, 53, 24.52);
//2800
const arb2030 = arboniaModel(2030, 24, 14.63);
const arb3030 = arboniaModel(3030, 33, 15.88);
const arb4030 = arboniaModel(4030, 43, 17.57);
const arb5030 = arboniaModel(5030, 53, 21.00);
const arb6030 = arboniaModel(6030, 53, 24.52);
//3000
const arb2030 = arboniaModel(2030, 24, 14.63);
const arb3030 = arboniaModel(3030, 33, 15.88);
const arb4030 = arboniaModel(4030, 43, 17.57);
const arb5030 = arboniaModel(5030, 53, 21.00);
const arb6030 = arboniaModel(6030, 53, 24.52);

