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
const arb5018 = arboniaModel(5018, 32, 21.00);
const arb6018 = arboniaModel(6018, 39, 100.52);
//190
const arb2019 = arboniaModel(2019, 15, 14.63);
const arb3019 = arboniaModel(3019, 20, 15.88);
const arb4019 = arboniaModel(4019, 27, 17.57);
//260
const arb2026 = arboniaModel(2026, 20, 14.63);
const arb3026 = arboniaModel(3026, 28, 15.88);
const arb4026 = arboniaModel(4026, 36, 17.57);
const arb5026 = arboniaModel(5026, 45, 21.00);
const arb6026 = arboniaModel(6026, 53, 24.52);
//300
const arb2030 = arboniaModel(2030, 24, 14.63);
const arb3030 = arboniaModel(3030, 33, 15.88);
const arb4030 = arboniaModel(4030, 43, 17.57);
const arb5030 = arboniaModel(5030, 53, 21.00);
const arb6030 = arboniaModel(6030, 62, 24.52);
//350
const arb2035 = arboniaModel(2035, 28, 14.63);
const arb3035 = arboniaModel(3035, 38, 15.88);
const arb4035 = arboniaModel(4035, 49, 17.57);
const arb5035 = arboniaModel(5035, 61, 21.00);
const arb6035 = arboniaModel(6035, 72, 24.52);
//400
const arb2040 = arboniaModel(2040, 31, 14.63);
const arb3040 = arboniaModel(3040, 43, 15.88);
const arb4040 = arboniaModel(4040, 56, 17.57);
const arb5040 = arboniaModel(5040, 69, 21.00);
const arb6040 = arboniaModel(6040, 81, 24.52);
//450
const arb2045 = arboniaModel(2045, 35, 14.63);
const arb3045 = arboniaModel(3045, 48, 15.88);
const arb4045 = arboniaModel(4045, 62, 17.57);
const arb5045 = arboniaModel(5045, 77, 21.00);
const arb6045 = arboniaModel(6045, 90, 24.52);
//500
const arb2050 = arboniaModel(2050, 39, 15.86);
const arb3050 = arboniaModel(3050, 53, 17.86);
const arb4050 = arboniaModel(4050, 69, 19.89);
const arb5050 = arboniaModel(5050, 85, 23.52);
const arb6050 = arboniaModel(6050, 99, 27.66);
//550
const arb2055 = arboniaModel(2055, 42, 14.63);
const arb3055 = arboniaModel(3055, 58, 15.88);
const arb4055 = arboniaModel(4055, 75, 17.57);
const arb5055 = arboniaModel(5055, 93, 21.00);
const arb6055 = arboniaModel(6055, 108, 24.52);
//600
const arb2060 = arboniaModel(2060, 46, 14.63);
const arb3060 = arboniaModel(3060, 63, 15.88);
const arb4060 = arboniaModel(4060, 81, 17.57);
const arb5060 = arboniaModel(5060, 100, 21.00);
const arb6060 = arboniaModel(6060, 117, 24.52);
//750
const arb2075 = arboniaModel(2075, 57, 14.63);
const arb3075 = arboniaModel(3075, 78, 15.88);
const arb4075 = arboniaModel(4075, 100, 17.57);
const arb5075 = arboniaModel(5075, 123, 21.00);
const arb6075 = arboniaModel(6075, 143, 24.52);
//900
const arb2090 = arboniaModel(2090, 67, 14.63);
const arb3090 = arboniaModel(3090, 92, 15.88);
const arb4090 = arboniaModel(4090, 117, 17.57);
const arb5090 = arboniaModel(5090, 144, 21.00);
const arb6090 = arboniaModel(6090, 168, 24.52);
//1000
const arb2100 = arboniaModel(2100, 74, 14.63);
const arb3100 = arboniaModel(3100, 102, 15.88);
const arb4100 = arboniaModel(4100, 129, 17.57);
const arb5100 = arboniaModel(5100, 158, 21.00);
const arb6100 = arboniaModel(6100, 185, 24.52);
//1100
const arb2110 = arboniaModel(2110, 81, 14.63);
const arb3110 = arboniaModel(3110, 111, 15.88);
const arb4110 = arboniaModel(4110, 141, 17.57);
const arb5110 = arboniaModel(5110, 172, 21.00);
const arb6110 = arboniaModel(6110, 201, 24.52);
//1200
const arb2120 = arboniaModel(2120, 88, 14.63);
const arb3120 = arboniaModel(3120, 120, 15.88);
const arb4120 = arboniaModel(4120, 152, 17.57);
const arb5120 = arboniaModel(5120, 186, 21.00);
const arb6120 = arboniaModel(6120, 217, 24.52);
//1500
const arb2150 = arboniaModel(2150, 109, 14.63);
const arb3150 = arboniaModel(3150, 147, 15.88);
const arb4150 = arboniaModel(4150, 186, 17.57);
const arb5150 = arboniaModel(5150, 225, 21.00);
const arb6150 = arboniaModel(6150, 264, 100.52);
//1800
const arb2180 = arboniaModel(2180, 130, 14.63);
const arb3180 = arboniaModel(3180, 173, 15.88);
const arb4180 = arboniaModel(4180, 219, 17.57);
const arb5180 = arboniaModel(5180, 263, 21.00);
const arb6180 = arboniaModel(6180, 309, 100.52);
//2000
const arb2200 = arboniaModel(2200, 144, 14.63);
const arb3200 = arboniaModel(3200, 190, 15.88);
const arb4200 = arboniaModel(4200, 241, 17.57);
const arb5200 = arboniaModel(5200, 287, 21.00);
const arb6200 = arboniaModel(6200, 339, 100.52);
//2200
const arb2220 = arboniaModel(2220, 158, 14.63);
const arb3220 = arboniaModel(3220, 207, 15.88);
const arb4220 = arboniaModel(4220, 262, 17.57);
const arb5220 = arboniaModel(5220, 310, 21.00);
const arb6220 = arboniaModel(6220, 367, 100.52);
//2500
const arb2250 = arboniaModel(2250, 179, 14.63);
const arb3250 = arboniaModel(3250, 231, 15.88);
const arb4250 = arboniaModel(4250, 371, 17.57);
const arb5250 = arboniaModel(5250, 436, 21.00);
const arb6250 = arboniaModel(6250, 521, 100.52);
//2800
const arb2280 = arboniaModel(2280, 200, 14.63);
const arb3280 = arboniaModel(3280, 255, 15.88);
const arb4280 = arboniaModel(4280, 323, 122.57);
const arb5280 = arboniaModel(5280, 374, 21.00);
const arb6280 = arboniaModel(6280, 448, 100.52);
//3000
const arb2300 = arboniaModel(2300, 214, 14.63);
const arb3300 = arboniaModel(3300, 270, 15.88);
const arb4300 = arboniaModel(4300, 343, 17.57);
const arb5300 = arboniaModel(5300, 394, 21.00);
const arb6300 = arboniaModel(6300, 474, 100.52);

