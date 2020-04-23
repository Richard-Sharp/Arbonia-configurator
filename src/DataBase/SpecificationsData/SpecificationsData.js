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
const arb5018 = arboniaModel(5018, 32, 20.93);
const arb6018 = arboniaModel(6018, 39, 24.22);
//190
const arb2019 = arboniaModel(2019, 15, 13.99);
const arb3019 = arboniaModel(3019, 20, 14.93);
const arb4019 = arboniaModel(4019, 27, 16.91);
//260
const arb2026 = arboniaModel(2026, 20, 14.38);
const arb3026 = arboniaModel(3026, 28, 15.47);
const arb4026 = arboniaModel(4026, 36, 17.27);
const arb5026 = arboniaModel(5026, 45, 21.04);
const arb6026 = arboniaModel(6026, 53, 24.49);
//300
const arb2030 = arboniaModel(2030, 24, 14.63);
const arb3030 = arboniaModel(3030, 33, 15.88);
const arb4030 = arboniaModel(4030, 43, 17.57);
const arb5030 = arboniaModel(5030, 53, 21.00);
const arb6030 = arboniaModel(6030, 62, 24.52);
//350
const arb2035 = arboniaModel(2035, 28, 14.92);
const arb3035 = arboniaModel(3035, 38, 16.36);
const arb4035 = arboniaModel(4035, 49, 18.18);
const arb5035 = arboniaModel(5035, 61, 21.42);
const arb6035 = arboniaModel(6035, 72, 25.22);
//400
const arb2040 = arboniaModel(2040, 31, 15.05);
const arb3040 = arboniaModel(3040, 43, 16.91);
const arb4040 = arboniaModel(4040, 56, 18.54);
const arb5040 = arboniaModel(5040, 69, 22.09);
const arb6040 = arboniaModel(6040, 81, 25.98);
//450
const arb2045 = arboniaModel(2045, 35, 15.44);
const arb3045 = arboniaModel(3045, 48, 17.33);
const arb4045 = arboniaModel(4045, 62, 19.31);
const arb5045 = arboniaModel(5045, 77, 23.07);
const arb6045 = arboniaModel(6045, 90, 26.96);
//500
const arb2050 = arboniaModel(2050, 39, 15.86);
const arb3050 = arboniaModel(3050, 53, 17.86);
const arb4050 = arboniaModel(4050, 69, 19.89);
const arb5050 = arboniaModel(5050, 85, 23.52);
const arb6050 = arboniaModel(6050, 99, 27.66);
//550
const arb2055 = arboniaModel(2055, 42, 16.13);
const arb3055 = arboniaModel(3055, 58, 18.38);
const arb4055 = arboniaModel(4055, 75, 20.76);
const arb5055 = arboniaModel(5055, 93, 24.37);
const arb6055 = arboniaModel(6055, 108, 28.96);
//600
const arb2060 = arboniaModel(2060, 46, 16.61);
const arb3060 = arboniaModel(3060, 63, 18.96);
const arb4060 = arboniaModel(4060, 81, 21.45);
const arb5060 = arboniaModel(5060, 100, 25.48);
const arb6060 = arboniaModel(6060, 117, 30.03);
//750
const arb2075 = arboniaModel(2075, 57, 17.29);
const arb3075 = arboniaModel(3075, 78, 20.33);
const arb4075 = arboniaModel(4075, 100, 24.37);
const arb5075 = arboniaModel(5075, 123, 29.33);
const arb6075 = arboniaModel(6075, 143, 34.23);
//900
const arb2090 = arboniaModel(2090, 67, 18.41);
const arb3090 = arboniaModel(3090, 92, 21.89);
const arb4090 = arboniaModel(4090, 117, 28.10);
const arb5090 = arboniaModel(5090, 144, 33.26);
const arb6090 = arboniaModel(6090, 168, 28.51);
//1000
const arb2100 = arboniaModel(2100, 74, 19.27);
const arb3100 = arboniaModel(3100, 102, 22.94);
const arb4100 = arboniaModel(4100, 129, 30.36);
const arb5100 = arboniaModel(5100, 158, 35.36);
const arb6100 = arboniaModel(6100, 185, 41.52);
//1100
const arb2110 = arboniaModel(2110, 81, 20.03);
const arb3110 = arboniaModel(3110, 111, 25.77);
const arb4110 = arboniaModel(4110, 141, 33.55);
const arb5110 = arboniaModel(5110, 172, 41.14);
const arb6110 = arboniaModel(6110, 201, 48.95);
//1200
const arb2120 = arboniaModel(2120, 88, 21.38);
const arb3120 = arboniaModel(3120, 120, 30.38);
const arb4120 = arboniaModel(4120, 152, 37.91);
const arb5120 = arboniaModel(5120, 186, 47.61);
const arb6120 = arboniaModel(6120, 217, 55.46);
//1500
const arb2150 = arboniaModel(2150, 109, 27.34);
const arb3150 = arboniaModel(3150, 147, 39.08);
const arb4150 = arboniaModel(4150, 186, 51.07);
const arb5150 = arboniaModel(5150, 225, 63.94);
const arb6150 = arboniaModel(6150, 264, 76.17);
//1800
const arb2180 = arboniaModel(2180, 130, 32.32);
const arb3180 = arboniaModel(3180, 173, 48.20);
const arb4180 = arboniaModel(4180, 219, 61.36);
const arb5180 = arboniaModel(5180, 263, 75.23);
const arb6180 = arboniaModel(6180, 309, 89.35);
//2000
const arb2200 = arboniaModel(2200, 144, 36.17);
const arb3200 = arboniaModel(3200, 190, 51.66);
const arb4200 = arboniaModel(4200, 241, 67.96);
const arb5200 = arboniaModel(5200, 287, 83.18);
const arb6200 = arboniaModel(6200, 339, 98.50);
//2200
const arb2220 = arboniaModel(2220, 158, 40.59);
const arb3220 = arboniaModel(3220, 207, 58.82);
const arb4220 = arboniaModel(4220, 262, 76.37);
const arb5220 = arboniaModel(5220, 310, 93.53);
const arb6220 = arboniaModel(6220, 367, 110.96);
//2500
const arb2250 = arboniaModel(2250, 179, 45.01);
const arb3250 = arboniaModel(3250, 231, 65.98);
const arb4250 = arboniaModel(4250, 293, 84.87);
const arb5250 = arboniaModel(5250, 343, 103.79);
const arb6250 = arboniaModel(6250, 408, 123.52);
//2800
const arb2280 = arboniaModel(2280, 200, 50.66);
const arb3280 = arboniaModel(3280, 255, 73.49);
const arb4280 = arboniaModel(4280, 323, 96.03);
const arb5280 = arboniaModel(5280, 374, 115.41);
const arb6280 = arboniaModel(6280, 448, 138.73);
//3000
const arb2300 = arboniaModel(2300, 214, 54.12);
const arb3300 = arboniaModel(3300, 270, 79.55);
const arb4300 = arboniaModel(4300, 343, 102.81);
const arb5300 = arboniaModel(5300, 394, 123.52);
const arb6300 = arboniaModel(6300, 474, 147.71);

