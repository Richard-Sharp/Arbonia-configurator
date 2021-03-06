const arboniaModel = (modelCode, power, price, minLength, maxLength) => {
	return (
			{
				modelCode: modelCode,
				// height: height,
				// type: type,
				// depthInstallation: depthInstallation,
				power: {
					pw50: power
				},
				price: price,
				minLength: minLength,
				maxLength: maxLength

			}
	)
}

export const getArboniaModelData = (value) => (
		{
			'2019': arb2019,
			'3019': arb3019,
			'4019': arb4019,

			'5018': arb5018,
			'6018': arb6018,

			'2026': arb2026,
			'3026': arb3026,
			'4026': arb4026,
			'5026': arb5026,
			'6026': arb6026,

			'2030': arb2030,
			'3030': arb3030,
			'4030': arb4030,
			'5030': arb5030,
			'6030': arb6030,

			'2035': arb2035,
			'3035': arb3035,
			'4035': arb4035,
			'5035': arb5035,
			'6035': arb6035,

			'2040': arb2040,
			'3040': arb3040,
			'4040': arb4040,
			'5040': arb5040,
			'6040': arb6040,

			'2045': arb2045,
			'3045': arb3045,
			'4045': arb4045,
			'5045': arb5045,
			'6045': arb6045,

			'2050': arb2050,
			'3050': arb3050,
			'4050': arb4050,
			'5050': arb5050,
			'6050': arb6050,

			'2055': arb2055,
			'3055': arb3055,
			'4055': arb4055,
			'5055': arb5055,
			'6055': arb6055,

			'2060': arb2060,
			'3060': arb3060,
			'4060': arb4060,
			'5060': arb5060,
			'6060': arb6060,

			'2075': arb2075,
			'3075': arb3075,
			'4075': arb4075,
			'5075': arb5075,
			'6075': arb6075,

			'2090': arb2090,
			'3090': arb3090,
			'4090': arb4090,
			'5090': arb5090,
			'6090': arb6090,

			'2100': arb2100,
			'3100': arb3100,
			'4100': arb4100,
			'5100': arb5100,
			'6100': arb6100,

			'2110': arb2110,
			'3110': arb3110,
			'4110': arb4110,
			'5110': arb5110,
			'6110': arb6110,

			'2120': arb2120,
			'3120': arb3120,
			'4120': arb4120,
			'5120': arb5120,
			'6120': arb6120,

			'2150': arb2150,
			'3150': arb3150,
			'4150': arb4150,
			'5150': arb5150,
			'6150': arb6150,

			'2180': arb2180,
			'3180': arb3180,
			'4180': arb4180,
			'5180': arb5180,
			'6180': arb6180,

			'2200': arb2200,
			'3200': arb3200,
			'4200': arb4200,
			'5200': arb5200,
			'6200': arb6200,

			'2220': arb2220,
			'3220': arb3220,
			'4220': arb4220,
			'5220': arb5220,
			'6220': arb6220,

			'2250': arb2250,
			'3250': arb3250,
			'4250': arb4250,
			'5250': arb5250,
			'6250': arb6250,

			'2280': arb2280,
			'3280': arb3280,
			'4280': arb4280,
			'5280': arb5280,
			'6280': arb6280,

			'2300': arb2300,
			'3300': arb3300,
			'4300': arb4300,
			'5300': arb5300,
			'6300': arb6300,
		}[value] || arb2030);

//(модель, мощность, цена)
//180
const arb5018 = arboniaModel(5018, 32, 20.93, 4, 66);
const arb6018 = arboniaModel(6018, 39, 24.22, 4, 66);
//190
const arb2019 = arboniaModel(2019, 15, 13.99, 4, 66);
const arb3019 = arboniaModel(3019, 20, 14.93, 4, 66);
const arb4019 = arboniaModel(4019, 27, 16.91, 4, 66);
//260
const arb2026 = arboniaModel(2026, 20, 14.38, 4, 66);
const arb3026 = arboniaModel(3026, 28, 15.47, 4, 66);
const arb4026 = arboniaModel(4026, 36, 17.26, 4, 66);
const arb5026 = arboniaModel(5026, 45, 21.04, 4, 66);
const arb6026 = arboniaModel(6026, 53, 24.49, 4, 66);
//300
const arb2030 = arboniaModel(2030, 24, 14.63, 4, 66);
const arb3030 = arboniaModel(3030, 33, 15.88, 4, 66);
const arb4030 = arboniaModel(4030, 43, 17.57, 4, 66);
const arb5030 = arboniaModel(5030, 53, 21.00, 4, 66);
const arb6030 = arboniaModel(6030, 62, 24.52, 4, 66);
//350
const arb2035 = arboniaModel(2035, 28, 14.92, 4, 66);
const arb3035 = arboniaModel(3035, 38, 16.36, 4, 66);
const arb4035 = arboniaModel(4035, 49, 18.18, 4, 66);
const arb5035 = arboniaModel(5035, 61, 21.42, 4, 66);
const arb6035 = arboniaModel(6035, 72, 25.22, 4, 66);
//400
const arb2040 = arboniaModel(2040, 31, 15.05, 4, 66);
const arb3040 = arboniaModel(3040, 43, 16.91, 4, 66);
const arb4040 = arboniaModel(4040, 56, 18.54, 4, 66);
const arb5040 = arboniaModel(5040, 69, 22.09, 4, 66);
const arb6040 = arboniaModel(6040, 81, 25.98, 4, 66);
//450
const arb2045 = arboniaModel(2045, 35, 15.44, 4, 66);
const arb3045 = arboniaModel(3045, 48, 17.33, 4, 66);
const arb4045 = arboniaModel(4045, 62, 19.31, 4, 66);
const arb5045 = arboniaModel(5045, 77, 23.07, 4, 66);
const arb6045 = arboniaModel(6045, 90, 26.96, 4, 66);
//500
const arb2050 = arboniaModel(2050, 39, 15.86, 4, 66);
const arb3050 = arboniaModel(3050, 53, 17.86, 4, 66);
const arb4050 = arboniaModel(4050, 69, 19.89, 4, 66);
const arb5050 = arboniaModel(5050, 85, 23.52, 4, 66);
const arb6050 = arboniaModel(6050, 99, 27.66, 4, 66);
//550
const arb2055 = arboniaModel(2055, 42, 16.13, 4, 66);
const arb3055 = arboniaModel(3055, 58, 18.38, 4, 66);
const arb4055 = arboniaModel(4055, 75, 20.76, 4, 66);
const arb5055 = arboniaModel(5055, 93, 24.37, 4, 66);
const arb6055 = arboniaModel(6055, 108, 28.96, 4, 66);
//600
const arb2060 = arboniaModel(2060, 46, 16.61, 4, 66);
const arb3060 = arboniaModel(3060, 63, 18.96, 4, 66);
const arb4060 = arboniaModel(4060, 81, 21.45, 4, 66);
const arb5060 = arboniaModel(5060, 100, 25.48, 4, 66);
const arb6060 = arboniaModel(6060, 117, 30.03, 4, 66);
//750
const arb2075 = arboniaModel(2075, 57, 17.29, 4, 66);
const arb3075 = arboniaModel(3075, 78, 20.33, 4, 66);
const arb4075 = arboniaModel(4075, 100, 24.37, 4, 66);
const arb5075 = arboniaModel(5075, 123, 29.33, 4, 66);
const arb6075 = arboniaModel(6075, 143, 34.23, 4, 66);
//900
const arb2090 = arboniaModel(2090, 67, 18.41, 4, 66);
const arb3090 = arboniaModel(3090, 92, 21.89, 4, 66);
const arb4090 = arboniaModel(4090, 117, 28.10, 4, 66);
const arb5090 = arboniaModel(5090, 144, 33.26, 4, 66);
const arb6090 = arboniaModel(6090, 168, 38.51, 4, 66);
//1000
const arb2100 = arboniaModel(2100, 74, 19.27, 4, 66);
const arb3100 = arboniaModel(3100, 102, 22.94, 4, 66);
const arb4100 = arboniaModel(4100, 129, 30.36, 4, 66);
const arb5100 = arboniaModel(5100, 158, 35.46, 4, 66);
const arb6100 = arboniaModel(6100, 185, 41.52, 4, 58);
//1100
const arb2110 = arboniaModel(2110, 81, 20.03, 4, 66);
const arb3110 = arboniaModel(3110, 111, 25.77, 4, 66);
const arb4110 = arboniaModel(4110, 141, 33.55, 4, 66);
const arb5110 = arboniaModel(5110, 172, 41.14, 4, 44);
const arb6110 = arboniaModel(6110, 201, 48.95, 4, 44);
//1200
const arb2120 = arboniaModel(2120, 88, 21.38, 4, 66);
const arb3120 = arboniaModel(3120, 120, 30.13, 4, 66);
const arb4120 = arboniaModel(4120, 152, 37.91, 4, 66);
const arb5120 = arboniaModel(5120, 186, 47.61, 4, 44);
const arb6120 = arboniaModel(6120, 217, 55.46, 4, 44);
//1500
const arb2150 = arboniaModel(2150, 109, 27.34, 4, 66);
const arb3150 = arboniaModel(3150, 147, 39.08, 4, 66);
const arb4150 = arboniaModel(4150, 186, 51.07, 4, 54);
const arb5150 = arboniaModel(5150, 225, 63.94, 4, 30);
const arb6150 = arboniaModel(6150, 264, 76.17, 4, 30);
//1800
const arb2180 = arboniaModel(2180, 130, 32.32, 4, 66);
const arb3180 = arboniaModel(3180, 173, 48.20, 4, 66);
const arb4180 = arboniaModel(4180, 219, 61.36, 4, 54);
const arb5180 = arboniaModel(5180, 263, 75.23, 4, 30);
const arb6180 = arboniaModel(6180, 309, 89.35, 4, 30);
//2000
const arb2200 = arboniaModel(2200, 144, 36.17, 4, 66);
const arb3200 = arboniaModel(3200, 190, 51.66, 4, 59);
const arb4200 = arboniaModel(4200, 241, 67.96, 4, 44);
const arb5200 = arboniaModel(5200, 287, 83.18, 4, 30);
const arb6200 = arboniaModel(6200, 339, 98.50, 4, 30);
//2200
const arb2220 = arboniaModel(2220, 158, 40.59, 4, 42);
const arb3220 = arboniaModel(3220, 207, 58.82, 4, 59);
const arb4220 = arboniaModel(4220, 262, 76.37, 4, 44);
const arb5220 = arboniaModel(5220, 310, 93.53, 4, 30);
const arb6220 = arboniaModel(6220, 367, 110.96, 4, 22);
//2500
const arb2250 = arboniaModel(2250, 179, 45.01, 4, 42);
const arb3250 = arboniaModel(3250, 231, 65.98, 4, 30);
const arb4250 = arboniaModel(4250, 293, 84.87, 4, 30);
const arb5250 = arboniaModel(5250, 343, 103.79, 4, 30);
const arb6250 = arboniaModel(6250, 408, 123.52, 4, 22);
//2800
const arb2280 = arboniaModel(2280, 200, 50.66, 4, 42);
const arb3280 = arboniaModel(3280, 255, 73.49, 4, 30);
const arb4280 = arboniaModel(4280, 323, 96.03, 4, 30);
const arb5280 = arboniaModel(5280, 374, 115.41, 4, 26);
const arb6280 = arboniaModel(6280, 448, 138.73, 4, 22);
//3000
const arb2300 = arboniaModel(2300, 214, 54.12, 4, 42);
const arb3300 = arboniaModel(3300, 270, 79.55, 4, 30);
const arb4300 = arboniaModel(4300, 343, 102.81, 4, 30);
const arb5300 = arboniaModel(5300, 394, 123.52, 4, 26);
const arb6300 = arboniaModel(6300, 474, 147.71, 4, 22);

