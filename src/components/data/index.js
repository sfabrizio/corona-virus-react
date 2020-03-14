export default {
	objectIdFieldName: 'OBJECTID',
	uniqueIdField: {
		name: 'OBJECTID',
		isSystemMaintained: true,
	},
	globalIdFieldName: '',
	geometryType: 'esriGeometryPoint',
	spatialReference: {
		wkid: 4326,
		latestWkid: 4326,
	},
	fields: [
		{
			name: 'OBJECTID',
			type: 'esriFieldTypeOID',
			alias: 'OBJECTID',
			sqlType: 'sqlTypeOther',
			domain: null,
			defaultValue: null,
		},
		{
			name: 'Country_Region',
			type: 'esriFieldTypeString',
			alias: 'Country_Region',
			sqlType: 'sqlTypeOther',
			length: 8000,
			domain: null,
			defaultValue: null,
		},
		{
			name: 'Last_Update',
			type: 'esriFieldTypeDate',
			alias: 'Last_Update',
			sqlType: 'sqlTypeOther',
			length: 8,
			domain: null,
			defaultValue: null,
		},
		{
			name: 'Lat',
			type: 'esriFieldTypeDouble',
			alias: 'Lat',
			sqlType: 'sqlTypeOther',
			domain: null,
			defaultValue: null,
		},
		{
			name: 'Long_',
			type: 'esriFieldTypeDouble',
			alias: 'Long',
			sqlType: 'sqlTypeOther',
			domain: null,
			defaultValue: null,
		},
		{
			name: 'Confirmed',
			type: 'esriFieldTypeInteger',
			alias: 'Confirmed',
			sqlType: 'sqlTypeOther',
			domain: null,
			defaultValue: null,
		},
		{
			name: 'Deaths',
			type: 'esriFieldTypeInteger',
			alias: 'Deaths',
			sqlType: 'sqlTypeOther',
			domain: null,
			defaultValue: null,
		},
		{
			name: 'Recovered',
			type: 'esriFieldTypeInteger',
			alias: 'Recovered',
			sqlType: 'sqlTypeOther',
			domain: null,
			defaultValue: null,
		},
		{
			name: 'Active',
			type: 'esriFieldTypeInteger',
			alias: 'Active',
			sqlType: 'sqlTypeOther',
			domain: null,
			defaultValue: null,
		},
	],
	features: [
		{
			attributes: {
				OBJECTID: 46,
				Country_Region: 'China',
				Last_Update: 1584097775000,
				Lat: 30.5928,
				Long_: 114.3055,
				Confirmed: 80945,
				Deaths: 3180,
				Recovered: 64198,
				Active: null,
			},
		},
		{
			attributes: {
				OBJECTID: 104,
				Country_Region: 'Italy',
				Last_Update: 1584138117000,
				Lat: 41.8719,
				Long_: 12.5674,
				Confirmed: 17660,
				Deaths: 1266,
				Recovered: 1439,
				Active: 14955,
			},
		},
		{
			attributes: {
				OBJECTID: 78,
				Country_Region: 'Iran',
				Last_Update: 1584108805000,
				Lat: 32.4279,
				Long_: 53.688,
				Confirmed: 11364,
				Deaths: 514,
				Recovered: 2959,
				Active: 7891,
			},
		},
		{
			attributes: {
				OBJECTID: 97,
				Country_Region: 'Korea, South',
				Last_Update: 1584113613000,
				Lat: 35.9078,
				Long_: 127.7669,
				Confirmed: 7979,
				Deaths: 66,
				Recovered: 510,
				Active: 7403,
			},
		},
		{
			attributes: {
				OBJECTID: 18,
				Country_Region: 'Spain',
				Last_Update: 1584142385000,
				Lat: 40.4637,
				Long_: -3.7492,
				Confirmed: 5232,
				Deaths: 133,
				Recovered: 193,
				Active: 4906,
			},
		},
		{
			attributes: {
				OBJECTID: 16,
				Country_Region: 'Germany',
				Last_Update: 1584141192000,
				Lat: 51.1657,
				Long_: 10.4515,
				Confirmed: 3675,
				Deaths: 7,
				Recovered: 46,
				Active: 3622,
			},
		},
		{
			attributes: {
				OBJECTID: 39,
				Country_Region: 'France',
				Last_Update: 1584142385000,
				Lat: 47,
				Long_: 2,
				Confirmed: 3667,
				Deaths: 79,
				Recovered: 12,
				Active: 1,
			},
		},
		{
			attributes: {
				OBJECTID: 61,
				Country_Region: 'US',
				Last_Update: 1584138117000,
				Lat: 40,
				Long_: -100,
				Confirmed: 1998,
				Deaths: 43,
				Recovered: 12,
				Active: 1,
			},
		},
		{
			attributes: {
				OBJECTID: 93,
				Country_Region: 'Switzerland',
				Last_Update: 1584142385000,
				Lat: 46.8182,
				Long_: 8.2275,
				Confirmed: 1139,
				Deaths: 11,
				Recovered: 4,
				Active: 1124,
			},
		},
		{
			attributes: {
				OBJECTID: 42,
				Country_Region: 'Norway',
				Last_Update: 1584141192000,
				Lat: 60.472,
				Long_: 8.4689,
				Confirmed: 996,
				Deaths: 0,
				Recovered: 1,
				Active: 995,
			},
		},
		{
			attributes: {
				OBJECTID: 53,
				Country_Region: 'Sweden',
				Last_Update: 1584141192000,
				Lat: 60.1282,
				Long_: 18.6435,
				Confirmed: 814,
				Deaths: 1,
				Recovered: 1,
				Active: 812,
			},
		},
		{
			attributes: {
				OBJECTID: 19,
				Country_Region: 'Netherlands',
				Last_Update: 1584138117000,
				Lat: 52.1326,
				Long_: 5.2913,
				Confirmed: 804,
				Deaths: 10,
				Recovered: 0,
				Active: 794,
			},
		},
		{
			attributes: {
				OBJECTID: 86,
				Country_Region: 'Denmark',
				Last_Update: 1584144785000,
				Lat: 56,
				Long_: 10,
				Confirmed: 804,
				Deaths: 0,
				Recovered: 1,
				Active: 3,
			},
		},
		{
			attributes: {
				OBJECTID: 131,
				Country_Region: 'United Kingdom',
				Last_Update: 1584138117000,
				Lat: 55,
				Long_: -3,
				Confirmed: 801,
				Deaths: 8,
				Recovered: 19,
				Active: 2,
			},
		},
		{
			attributes: {
				OBJECTID: 64,
				Country_Region: 'Japan',
				Last_Update: 1584142385000,
				Lat: 36.2048,
				Long_: 138.2529,
				Confirmed: 701,
				Deaths: 19,
				Recovered: 118,
				Active: 564,
			},
		},
		{
			attributes: {
				OBJECTID: 43,
				Country_Region: 'Cruise Ship',
				Last_Update: 1584108805000,
				Lat: 35.4498,
				Long_: 139.6649,
				Confirmed: 696,
				Deaths: 7,
				Recovered: 325,
				Active: 364,
			},
		},
		{
			attributes: {
				OBJECTID: 82,
				Country_Region: 'Belgium',
				Last_Update: 1584144785000,
				Lat: 50.5039,
				Long_: 4.4699,
				Confirmed: 559,
				Deaths: 3,
				Recovered: 1,
				Active: 555,
			},
		},
		{
			attributes: {
				OBJECTID: 63,
				Country_Region: 'Austria',
				Last_Update: 1584144785000,
				Lat: 47.5162,
				Long_: 14.5501,
				Confirmed: 504,
				Deaths: 1,
				Recovered: 6,
				Active: 497,
			},
		},
		{
			attributes: {
				OBJECTID: 103,
				Country_Region: 'Qatar',
				Last_Update: 1584142385000,
				Lat: 25.3548,
				Long_: 51.1839,
				Confirmed: 320,
				Deaths: 0,
				Recovered: 0,
				Active: 320,
			},
		},
		{
			attributes: {
				OBJECTID: 129,
				Country_Region: 'Singapore',
				Last_Update: 1584142385000,
				Lat: 1.3521,
				Long_: 103.8198,
				Confirmed: 200,
				Deaths: 0,
				Recovered: 97,
				Active: 103,
			},
		},
		{
			attributes: {
				OBJECTID: 62,
				Country_Region: 'Malaysia',
				Last_Update: 1584138117000,
				Lat: 4.2105,
				Long_: 101.9758,
				Confirmed: 197,
				Deaths: 0,
				Recovered: 26,
				Active: 171,
			},
		},
		{
			attributes: {
				OBJECTID: 1,
				Country_Region: 'Canada',
				Last_Update: 1584145982000,
				Lat: 60.001,
				Long_: -95.001,
				Confirmed: 193,
				Deaths: 1,
				Recovered: 8,
				Active: 2,
			},
		},
		{
			attributes: {
				OBJECTID: 132,
				Country_Region: 'Greece',
				Last_Update: 1584138117000,
				Lat: 39.0742,
				Long_: 21.8243,
				Confirmed: 190,
				Deaths: 1,
				Recovered: 0,
				Active: 189,
			},
		},
		{
			attributes: {
				OBJECTID: 11,
				Country_Region: 'Bahrain',
				Last_Update: 1584144785000,
				Lat: 26.0667,
				Long_: 50.5577,
				Confirmed: 189,
				Deaths: 0,
				Recovered: 44,
				Active: 145,
			},
		},
		{
			attributes: {
				OBJECTID: 112,
				Country_Region: 'Israel',
				Last_Update: 1584143582000,
				Lat: 31.0461,
				Long_: 34.8516,
				Confirmed: 161,
				Deaths: 0,
				Recovered: 4,
				Active: 157,
			},
		},
		{
			attributes: {
				OBJECTID: 51,
				Country_Region: 'Finland',
				Last_Update: 1584138117000,
				Lat: 61.9241,
				Long_: 25.7482,
				Confirmed: 155,
				Deaths: 0,
				Recovered: 1,
				Active: 154,
			},
		},
		{
			attributes: {
				OBJECTID: 26,
				Country_Region: 'Brazil',
				Last_Update: 1584138118000,
				Lat: -14.235,
				Long_: -51.9253,
				Confirmed: 151,
				Deaths: 0,
				Recovered: 0,
				Active: 151,
			},
		},
		{
			attributes: {
				OBJECTID: 13,
				Country_Region: 'Slovenia',
				Last_Update: 1584142385000,
				Lat: 46.1512,
				Long_: 14.9955,
				Confirmed: 141,
				Deaths: 0,
				Recovered: 0,
				Active: 141,
			},
		},
		{
			attributes: {
				OBJECTID: 80,
				Country_Region: 'Czechia',
				Last_Update: 1584143582000,
				Lat: 49.8175,
				Long_: 15.473,
				Confirmed: 141,
				Deaths: 0,
				Recovered: 0,
				Active: 141,
			},
		},
		{
			attributes: {
				OBJECTID: 113,
				Country_Region: 'Iceland',
				Last_Update: 1584143582000,
				Lat: 64.9631,
				Long_: -19.0208,
				Confirmed: 134,
				Deaths: 0,
				Recovered: 1,
				Active: 133,
			},
		},
		{
			attributes: {
				OBJECTID: 58,
				Country_Region: 'Portugal',
				Last_Update: 1584142385000,
				Lat: 39.3999,
				Long_: -8.2245,
				Confirmed: 112,
				Deaths: 0,
				Recovered: 1,
				Active: 111,
			},
		},
		{
			attributes: {
				OBJECTID: 84,
				Country_Region: 'Iraq',
				Last_Update: 1584143582000,
				Lat: 33.2232,
				Long_: 43.6793,
				Confirmed: 101,
				Deaths: 9,
				Recovered: 24,
				Active: 68,
			},
		},
		{
			attributes: {
				OBJECTID: 73,
				Country_Region: 'Ireland',
				Last_Update: 1584143582000,
				Lat: 53.1424,
				Long_: -7.6921,
				Confirmed: 90,
				Deaths: 1,
				Recovered: 0,
				Active: 89,
			},
		},
		{
			attributes: {
				OBJECTID: 57,
				Country_Region: 'Romania',
				Last_Update: 1584142385000,
				Lat: 45.9432,
				Long_: 24.9668,
				Confirmed: 89,
				Deaths: 0,
				Recovered: 7,
				Active: 82,
			},
		},
		{
			attributes: {
				OBJECTID: 12,
				Country_Region: 'Saudi Arabia',
				Last_Update: 1584142385000,
				Lat: 23.8859,
				Long_: 45.0792,
				Confirmed: 86,
				Deaths: 0,
				Recovered: 1,
				Active: 85,
			},
		},
		{
			attributes: {
				OBJECTID: 29,
				Country_Region: 'United Arab Emirates',
				Last_Update: 1584138118000,
				Lat: 23.4241,
				Long_: 53.8478,
				Confirmed: 85,
				Deaths: 0,
				Recovered: 17,
				Active: 68,
			},
		},
		{
			attributes: {
				OBJECTID: 30,
				Country_Region: 'India',
				Last_Update: 1584138118000,
				Lat: 20.5937,
				Long_: 78.9629,
				Confirmed: 82,
				Deaths: 2,
				Recovered: 4,
				Active: 76,
			},
		},
		{
			attributes: {
				OBJECTID: 15,
				Country_Region: 'Kuwait',
				Last_Update: 1584138118000,
				Lat: 29.3117,
				Long_: 47.4818,
				Confirmed: 80,
				Deaths: 0,
				Recovered: 5,
				Active: 75,
			},
		},
		{
			attributes: {
				OBJECTID: 37,
				Country_Region: 'San Marino',
				Last_Update: 1584144785000,
				Lat: 43.9424,
				Long_: 12.4578,
				Confirmed: 80,
				Deaths: 5,
				Recovered: 2,
				Active: 73,
			},
		},
		{
			attributes: {
				OBJECTID: 128,
				Country_Region: 'Egypt',
				Last_Update: 1584108805000,
				Lat: 26.8206,
				Long_: 30.8025,
				Confirmed: 80,
				Deaths: 2,
				Recovered: 27,
				Active: 51,
			},
		},
		{
			attributes: {
				OBJECTID: 95,
				Country_Region: 'Estonia',
				Last_Update: 1584143582000,
				Lat: 58.5953,
				Long_: 25.0136,
				Confirmed: 79,
				Deaths: 0,
				Recovered: 0,
				Active: 79,
			},
		},
		{
			attributes: {
				OBJECTID: 96,
				Country_Region: 'Lebanon',
				Last_Update: 1584102783000,
				Lat: 33.8547,
				Long_: 35.8623,
				Confirmed: 77,
				Deaths: 3,
				Recovered: 1,
				Active: 73,
			},
		},
		{
			attributes: {
				OBJECTID: 83,
				Country_Region: 'Thailand',
				Last_Update: 1584142385000,
				Lat: 15.87,
				Long_: 100.9925,
				Confirmed: 75,
				Deaths: 1,
				Recovered: 35,
				Active: 39,
			},
		},
		{
			attributes: {
				OBJECTID: 52,
				Country_Region: 'Indonesia',
				Last_Update: 1584106383000,
				Lat: -0.7893,
				Long_: 113.9213,
				Confirmed: 69,
				Deaths: 4,
				Recovered: 2,
				Active: 63,
			},
		},
		{
			attributes: {
				OBJECTID: 120,
				Country_Region: 'Poland',
				Last_Update: 1584142385000,
				Lat: 51.9194,
				Long_: 19.1451,
				Confirmed: 68,
				Deaths: 2,
				Recovered: 0,
				Active: 66,
			},
		},
		{
			attributes: {
				OBJECTID: 87,
				Country_Region: 'Philippines',
				Last_Update: 1584142385000,
				Lat: 12.8797,
				Long_: 121.774,
				Confirmed: 64,
				Deaths: 5,
				Recovered: 2,
				Active: 57,
			},
		},
		{
			attributes: {
				OBJECTID: 94,
				Country_Region: 'Taiwan*',
				Last_Update: 1584097743000,
				Lat: 23.7,
				Long_: 121,
				Confirmed: 50,
				Deaths: 1,
				Recovered: 20,
				Active: 29,
			},
		},
		{
			attributes: {
				OBJECTID: 54,
				Country_Region: 'Vietnam',
				Last_Update: 1584138118000,
				Lat: 14.0583,
				Long_: 108.2772,
				Confirmed: 47,
				Deaths: 0,
				Recovered: 16,
				Active: 31,
			},
		},
		{
			attributes: {
				OBJECTID: 55,
				Country_Region: 'Russia',
				Last_Update: 1584138118000,
				Lat: 61.524,
				Long_: 105.3188,
				Confirmed: 45,
				Deaths: 0,
				Recovered: 3,
				Active: 42,
			},
		},
		{
			attributes: {
				OBJECTID: 81,
				Country_Region: 'Chile',
				Last_Update: 1584138118000,
				Lat: -35.6751,
				Long_: -71.543,
				Confirmed: 43,
				Deaths: 0,
				Recovered: 0,
				Active: 43,
			},
		},
		{
			attributes: {
				OBJECTID: 76,
				Country_Region: 'Brunei',
				Last_Update: 1584144785000,
				Lat: 4.5353,
				Long_: 114.7277,
				Confirmed: 37,
				Deaths: 0,
				Recovered: 0,
				Active: 37,
			},
		},
		{
			attributes: {
				OBJECTID: 130,
				Country_Region: 'Serbia',
				Last_Update: 1584142385000,
				Lat: 44.0165,
				Long_: 21.0059,
				Confirmed: 35,
				Deaths: 0,
				Recovered: 0,
				Active: 35,
			},
		},
		{
			attributes: {
				OBJECTID: 70,
				Country_Region: 'Luxembourg',
				Last_Update: 1584142386000,
				Lat: 49.8153,
				Long_: 6.1296,
				Confirmed: 34,
				Deaths: 0,
				Recovered: 0,
				Active: 34,
			},
		},
		{
			attributes: {
				OBJECTID: 28,
				Country_Region: 'Albania',
				Last_Update: 1584138118000,
				Lat: 41.1533,
				Long_: 20.1683,
				Confirmed: 33,
				Deaths: 1,
				Recovered: 0,
				Active: 32,
			},
		},
		{
			attributes: {
				OBJECTID: 40,
				Country_Region: 'Slovakia',
				Last_Update: 1584142385000,
				Lat: 48.669,
				Long_: 19.699,
				Confirmed: 32,
				Deaths: 0,
				Recovered: 0,
				Active: 32,
			},
		},
		{
			attributes: {
				OBJECTID: 90,
				Country_Region: 'Croatia',
				Last_Update: 1584143582000,
				Lat: 45.1,
				Long_: 15.2,
				Confirmed: 32,
				Deaths: 0,
				Recovered: 1,
				Active: 31,
			},
		},
		{
			attributes: {
				OBJECTID: 7,
				Country_Region: 'Argentina',
				Last_Update: 1584138118000,
				Lat: -38.4161,
				Long_: -63.6167,
				Confirmed: 31,
				Deaths: 2,
				Recovered: 0,
				Active: 29,
			},
		},
		{
			attributes: {
				OBJECTID: 27,
				Country_Region: 'Pakistan',
				Last_Update: 1584142385000,
				Lat: 30.3753,
				Long_: 69.3451,
				Confirmed: 28,
				Deaths: 0,
				Recovered: 2,
				Active: 26,
			},
		},
		{
			attributes: {
				OBJECTID: 41,
				Country_Region: 'Peru',
				Last_Update: 1584142385000,
				Lat: -9.19,
				Long_: -75.0152,
				Confirmed: 28,
				Deaths: 0,
				Recovered: 0,
				Active: 28,
			},
		},
		{
			attributes: {
				OBJECTID: 68,
				Country_Region: 'Panama',
				Last_Update: 1584138118000,
				Lat: 8.538,
				Long_: -80.7821,
				Confirmed: 27,
				Deaths: 1,
				Recovered: 0,
				Active: 26,
			},
		},
		{
			attributes: {
				OBJECTID: 124,
				Country_Region: 'Belarus',
				Last_Update: 1584138119000,
				Lat: 53.7098,
				Long_: 27.9534,
				Confirmed: 27,
				Deaths: 0,
				Recovered: 3,
				Active: 24,
			},
		},
		{
			attributes: {
				OBJECTID: 79,
				Country_Region: 'Algeria',
				Last_Update: 1584097748000,
				Lat: 28.0339,
				Long_: 1.6596,
				Confirmed: 26,
				Deaths: 2,
				Recovered: 8,
				Active: 16,
			},
		},
		{
			attributes: {
				OBJECTID: 85,
				Country_Region: 'Georgia',
				Last_Update: 1584143582000,
				Lat: 42.3154,
				Long_: 43.3569,
				Confirmed: 25,
				Deaths: 0,
				Recovered: 0,
				Active: 25,
			},
		},
		{
			attributes: {
				OBJECTID: 59,
				Country_Region: 'South Africa',
				Last_Update: 1584138118000,
				Lat: -30.5595,
				Long_: 22.9375,
				Confirmed: 24,
				Deaths: 0,
				Recovered: 0,
				Active: 24,
			},
		},
		{
			attributes: {
				OBJECTID: 56,
				Country_Region: 'Bulgaria',
				Last_Update: 1584138118000,
				Lat: 42.7339,
				Long_: 25.4858,
				Confirmed: 23,
				Deaths: 1,
				Recovered: 0,
				Active: 22,
			},
		},
		{
			attributes: {
				OBJECTID: 69,
				Country_Region: 'Costa Rica',
				Last_Update: 1584138118000,
				Lat: 9.7489,
				Long_: -83.7534,
				Confirmed: 23,
				Deaths: 0,
				Recovered: 0,
				Active: 23,
			},
		},
		{
			attributes: {
				OBJECTID: 21,
				Country_Region: 'Oman',
				Last_Update: 1584142385000,
				Lat: 21.4735,
				Long_: 55.9754,
				Confirmed: 19,
				Deaths: 0,
				Recovered: 9,
				Active: 10,
			},
		},
		{
			attributes: {
				OBJECTID: 36,
				Country_Region: 'Hungary',
				Last_Update: 1584144785000,
				Lat: 47.1625,
				Long_: 19.5033,
				Confirmed: 19,
				Deaths: 0,
				Recovered: 1,
				Active: 18,
			},
		},
		{
			attributes: {
				OBJECTID: 75,
				Country_Region: 'Ecuador',
				Last_Update: 1584144785000,
				Lat: -1.8312,
				Long_: -78.1834,
				Confirmed: 17,
				Deaths: 1,
				Recovered: 0,
				Active: 16,
			},
		},
		{
			attributes: {
				OBJECTID: 122,
				Country_Region: 'Latvia',
				Last_Update: 1584138118000,
				Lat: 56.8796,
				Long_: 24.6032,
				Confirmed: 17,
				Deaths: 0,
				Recovered: 1,
				Active: 16,
			},
		},
		{
			attributes: {
				OBJECTID: 98,
				Country_Region: 'Tunisia',
				Last_Update: 1584142385000,
				Lat: 33.8869,
				Long_: 9.5375,
				Confirmed: 16,
				Deaths: 0,
				Recovered: 0,
				Active: 16,
			},
		},
		{
			attributes: {
				OBJECTID: 31,
				Country_Region: 'Azerbaijan',
				Last_Update: 1584101616000,
				Lat: 40.1431,
				Long_: 47.5769,
				Confirmed: 15,
				Deaths: 1,
				Recovered: 3,
				Active: 11,
			},
		},
		{
			attributes: {
				OBJECTID: 22,
				Country_Region: 'North Macedonia',
				Last_Update: 1584142385000,
				Lat: 41.6086,
				Long_: 21.7453,
				Confirmed: 14,
				Deaths: 0,
				Recovered: 1,
				Active: 13,
			},
		},
		{
			attributes: {
				OBJECTID: 102,
				Country_Region: 'Cyprus',
				Last_Update: 1584143582000,
				Lat: 35.1264,
				Long_: 33.4299,
				Confirmed: 14,
				Deaths: 0,
				Recovered: 0,
				Active: 14,
			},
		},
		{
			attributes: {
				OBJECTID: 14,
				Country_Region: 'Bosnia and Herzegovina',
				Last_Update: 1584138119000,
				Lat: 43.9159,
				Long_: 17.6791,
				Confirmed: 13,
				Deaths: 0,
				Recovered: 0,
				Active: 13,
			},
		},
		{
			attributes: {
				OBJECTID: 100,
				Country_Region: 'Colombia',
				Last_Update: 1584138119000,
				Lat: 4.5709,
				Long_: -74.2973,
				Confirmed: 13,
				Deaths: 0,
				Recovered: 0,
				Active: 13,
			},
		},
		{
			attributes: {
				OBJECTID: 108,
				Country_Region: 'Malta',
				Last_Update: 1584142386000,
				Lat: 35.9375,
				Long_: 14.3754,
				Confirmed: 12,
				Deaths: 0,
				Recovered: 1,
				Active: 11,
			},
		},
		{
			attributes: {
				OBJECTID: 127,
				Country_Region: 'Mexico',
				Last_Update: 1584138119000,
				Lat: 23.6345,
				Long_: -102.5528,
				Confirmed: 12,
				Deaths: 0,
				Recovered: 4,
				Active: 8,
			},
		},
		{
			attributes: {
				OBJECTID: 114,
				Country_Region: 'Senegal',
				Last_Update: 1584142385000,
				Lat: 14.4974,
				Long_: -14.4524,
				Confirmed: 10,
				Deaths: 0,
				Recovered: 1,
				Active: 9,
			},
		},
		{
			attributes: {
				OBJECTID: 2,
				Country_Region: 'Maldives',
				Last_Update: 1584142385000,
				Lat: 3.2028,
				Long_: 73.2207,
				Confirmed: 9,
				Deaths: 0,
				Recovered: 0,
				Active: 9,
			},
		},
		{
			attributes: {
				OBJECTID: 20,
				Country_Region: 'Jamaica',
				Last_Update: 1584138122000,
				Lat: 18.1096,
				Long_: -77.2975,
				Confirmed: 8,
				Deaths: 0,
				Recovered: 0,
				Active: 8,
			},
		},
		{
			attributes: {
				OBJECTID: 47,
				Country_Region: 'Armenia',
				Last_Update: 1584138122000,
				Lat: 40.0691,
				Long_: 45.0382,
				Confirmed: 8,
				Deaths: 0,
				Recovered: 0,
				Active: 8,
			},
		},
		{
			attributes: {
				OBJECTID: 34,
				Country_Region: 'Afghanistan',
				Last_Update: 1584138119000,
				Lat: 33,
				Long_: 65,
				Confirmed: 7,
				Deaths: 0,
				Recovered: 0,
				Active: 7,
			},
		},
		{
			attributes: {
				OBJECTID: 89,
				Country_Region: 'Morocco',
				Last_Update: 1584142386000,
				Lat: 31.7917,
				Long_: -7.0926,
				Confirmed: 7,
				Deaths: 1,
				Recovered: 1,
				Active: 5,
			},
		},
		{
			attributes: {
				OBJECTID: 3,
				Country_Region: 'Lithuania',
				Last_Update: 1584138122000,
				Lat: 55.1694,
				Long_: 23.8813,
				Confirmed: 6,
				Deaths: 0,
				Recovered: 0,
				Active: 6,
			},
		},
		{
			attributes: {
				OBJECTID: 77,
				Country_Region: 'Australia',
				Last_Update: 1584138117000,
				Lat: -25,
				Long_: 133,
				Confirmed: 6,
				Deaths: 0,
				Recovered: 0,
				Active: 1,
			},
		},
		{
			attributes: {
				OBJECTID: 88,
				Country_Region: 'Moldova',
				Last_Update: 1584142386000,
				Lat: 47.4116,
				Long_: 28.3699,
				Confirmed: 6,
				Deaths: 0,
				Recovered: 0,
				Active: 6,
			},
		},
		{
			attributes: {
				OBJECTID: 121,
				Country_Region: 'Paraguay',
				Last_Update: 1584142386000,
				Lat: -23.4425,
				Long_: -58.4438,
				Confirmed: 6,
				Deaths: 0,
				Recovered: 0,
				Active: 6,
			},
		},
		{
			attributes: {
				OBJECTID: 133,
				Country_Region: 'Sri Lanka',
				Last_Update: 1584142386000,
				Lat: 7.8731,
				Long_: 80.7718,
				Confirmed: 6,
				Deaths: 0,
				Recovered: 1,
				Active: 5,
			},
		},
		{
			attributes: {
				OBJECTID: 4,
				Country_Region: 'Cambodia',
				Last_Update: 1584138122000,
				Lat: 12.5657,
				Long_: 104.991,
				Confirmed: 5,
				Deaths: 0,
				Recovered: 1,
				Active: 4,
			},
		},
		{
			attributes: {
				OBJECTID: 25,
				Country_Region: 'New Zealand',
				Last_Update: 1584138121000,
				Lat: -40.9006,
				Long_: 174.886,
				Confirmed: 5,
				Deaths: 0,
				Recovered: 0,
				Active: 5,
			},
		},
		{
			attributes: {
				OBJECTID: 33,
				Country_Region: 'Turkey',
				Last_Update: 1584142386000,
				Lat: 38.9637,
				Long_: 35.2433,
				Confirmed: 5,
				Deaths: 0,
				Recovered: 0,
				Active: 5,
			},
		},
		{
			attributes: {
				OBJECTID: 48,
				Country_Region: 'Dominican Republic',
				Last_Update: 1584138122000,
				Lat: 18.7357,
				Long_: -70.1627,
				Confirmed: 5,
				Deaths: 0,
				Recovered: 0,
				Active: 5,
			},
		},
		{
			attributes: {
				OBJECTID: 101,
				Country_Region: 'Reunion',
				Last_Update: 1584102783000,
				Lat: -21.1151,
				Long_: 55.5364,
				Confirmed: 5,
				Deaths: 0,
				Recovered: 0,
				Active: 5,
			},
		},
		{
			attributes: {
				OBJECTID: 134,
				Country_Region: 'French Guiana',
				Last_Update: 1583551385000,
				Lat: 3.9339,
				Long_: -53.1258,
				Confirmed: 5,
				Deaths: 0,
				Recovered: 0,
				Active: 5,
			},
		},
		{
			attributes: {
				OBJECTID: 135,
				Country_Region: 'Fench Guiana',
				Last_Update: 1584138122000,
				Lat: 4,
				Long_: -53,
				Confirmed: 5,
				Deaths: 0,
				Recovered: 0,
				Active: 5,
			},
		},
		{
			attributes: {
				OBJECTID: 44,
				Country_Region: 'Cuba',
				Last_Update: 1584143582000,
				Lat: 21.5218,
				Long_: -77.7812,
				Confirmed: 4,
				Deaths: 0,
				Recovered: 0,
				Active: 4,
			},
		},
		{
			attributes: {
				OBJECTID: 119,
				Country_Region: 'Kazakhstan',
				Last_Update: 1584142386000,
				Lat: 48.0196,
				Long_: 66.9237,
				Confirmed: 4,
				Deaths: 0,
				Recovered: 0,
				Active: 4,
			},
		},
		{
			attributes: {
				OBJECTID: 8,
				Country_Region: 'Bolivia',
				Last_Update: 1584144785000,
				Lat: -16.2902,
				Long_: -63.5887,
				Confirmed: 3,
				Deaths: 0,
				Recovered: 0,
				Active: 3,
			},
		},
		{
			attributes: {
				OBJECTID: 35,
				Country_Region: 'Bangladesh',
				Last_Update: 1584138122000,
				Lat: 23.685,
				Long_: 90.3563,
				Confirmed: 3,
				Deaths: 0,
				Recovered: 0,
				Active: 3,
			},
		},
		{
			attributes: {
				OBJECTID: 49,
				Country_Region: 'Ukraine',
				Last_Update: 1584138122000,
				Lat: 48.3794,
				Long_: 31.1656,
				Confirmed: 3,
				Deaths: 1,
				Recovered: 0,
				Active: 2,
			},
		},
		{
			attributes: {
				OBJECTID: 118,
				Country_Region: 'Martinique',
				Last_Update: 1584138122000,
				Lat: 14.6415,
				Long_: -61.0242,
				Confirmed: 3,
				Deaths: 0,
				Recovered: 0,
				Active: 3,
			},
		},
		{
			attributes: {
				OBJECTID: 6,
				Country_Region: 'Aruba',
				Last_Update: 1584143583000,
				Lat: 12.5211,
				Long_: -69.9683,
				Confirmed: 2,
				Deaths: 0,
				Recovered: 0,
				Active: 2,
			},
		},
		{
			attributes: {
				OBJECTID: 9,
				Country_Region: 'Cameroon',
				Last_Update: 1584138122000,
				Lat: 3.848,
				Long_: 11.5021,
				Confirmed: 2,
				Deaths: 0,
				Recovered: 0,
				Active: 2,
			},
		},
		{
			attributes: {
				OBJECTID: 10,
				Country_Region: 'Burkina Faso',
				Last_Update: 1584138122000,
				Lat: 12.2383,
				Long_: -1.5616,
				Confirmed: 2,
				Deaths: 0,
				Recovered: 0,
				Active: 2,
			},
		},
		{
			attributes: {
				OBJECTID: 24,
				Country_Region: 'Monaco',
				Last_Update: 1584138122000,
				Lat: 43.7333,
				Long_: 7.4167,
				Confirmed: 2,
				Deaths: 0,
				Recovered: 0,
				Active: 2,
			},
		},
		{
			attributes: {
				OBJECTID: 50,
				Country_Region: 'Ghana',
				Last_Update: 1584138122000,
				Lat: 7.8167,
				Long_: -1.05,
				Confirmed: 2,
				Deaths: 0,
				Recovered: 0,
				Active: 2,
			},
		},
		{
			attributes: {
				OBJECTID: 65,
				Country_Region: 'Saint Martin',
				Last_Update: 1584138122000,
				Lat: 18.0667,
				Long_: -63.05,
				Confirmed: 2,
				Deaths: 0,
				Recovered: 0,
				Active: 2,
			},
		},
		{
			attributes: {
				OBJECTID: 66,
				Country_Region: 'Faroe Islands',
				Last_Update: 1584138122000,
				Lat: 62,
				Long_: -6.7833,
				Confirmed: 2,
				Deaths: 0,
				Recovered: 0,
				Active: 2,
			},
		},
		{
			attributes: {
				OBJECTID: 74,
				Country_Region: 'Nigeria',
				Last_Update: 1584138122000,
				Lat: 9.082,
				Long_: 8.6753,
				Confirmed: 2,
				Deaths: 0,
				Recovered: 0,
				Active: 2,
			},
		},
		{
			attributes: {
				OBJECTID: 109,
				Country_Region: 'Congo (Kinshasa)',
				Last_Update: 1584138122000,
				Lat: -4.0383,
				Long_: 21.7587,
				Confirmed: 2,
				Deaths: 0,
				Recovered: 0,
				Active: 2,
			},
		},
		{
			attributes: {
				OBJECTID: 126,
				Country_Region: 'Honduras',
				Last_Update: 1584138122000,
				Lat: 15.2,
				Long_: -86.2419,
				Confirmed: 2,
				Deaths: 0,
				Recovered: 0,
				Active: 2,
			},
		},
		{
			attributes: {
				OBJECTID: 5,
				Country_Region: 'Ethiopia',
				Last_Update: 1584142386000,
				Lat: 9.145,
				Long_: 40.4897,
				Confirmed: 1,
				Deaths: 0,
				Recovered: 0,
				Active: 1,
			},
		},
		{
			attributes: {
				OBJECTID: 17,
				Country_Region: 'Saint Barthelemy',
				Last_Update: 1584138123000,
				Lat: 17.9,
				Long_: -62.8333,
				Confirmed: 1,
				Deaths: 0,
				Recovered: 0,
				Active: 1,
			},
		},
		{
			attributes: {
				OBJECTID: 23,
				Country_Region: 'Gabon',
				Last_Update: 1584138122000,
				Lat: -1,
				Long_: -12,
				Confirmed: 1,
				Deaths: 0,
				Recovered: 0,
				Active: 1,
			},
		},
		{
			attributes: {
				OBJECTID: 32,
				Country_Region: 'Kenya',
				Last_Update: 1584138123000,
				Lat: -0.0236,
				Long_: 37.9062,
				Confirmed: 1,
				Deaths: 0,
				Recovered: 0,
				Active: 1,
			},
		},
		{
			attributes: {
				OBJECTID: 38,
				Country_Region: 'French Polynesia',
				Last_Update: 1584138123000,
				Lat: -17.5333,
				Long_: -149.5667,
				Confirmed: 1,
				Deaths: 0,
				Recovered: 0,
				Active: 1,
			},
		},
		{
			attributes: {
				OBJECTID: 45,
				Country_Region: 'Togo',
				Last_Update: 1584138122000,
				Lat: 8.6195,
				Long_: 0.8248,
				Confirmed: 1,
				Deaths: 0,
				Recovered: 0,
				Active: 1,
			},
		},
		{
			attributes: {
				OBJECTID: 60,
				Country_Region: 'Liechtenstein',
				Last_Update: 1584138122000,
				Lat: 47.14,
				Long_: 9.55,
				Confirmed: 1,
				Deaths: 0,
				Recovered: 0,
				Active: 1,
			},
		},
		{
			attributes: {
				OBJECTID: 67,
				Country_Region: 'Guinea',
				Last_Update: 1584113613000,
				Lat: 9.9456,
				Long_: -9.6966,
				Confirmed: 1,
				Deaths: 0,
				Recovered: 0,
				Active: 1,
			},
		},
		{
			attributes: {
				OBJECTID: 71,
				Country_Region: 'Andorra',
				Last_Update: 1584138122000,
				Lat: 42.5063,
				Long_: 1.5218,
				Confirmed: 1,
				Deaths: 0,
				Recovered: 1,
				Active: null,
			},
		},
		{
			attributes: {
				OBJECTID: 72,
				Country_Region: 'Gibraltar',
				Last_Update: 1584138123000,
				Lat: 36.1317,
				Long_: -5.3517,
				Confirmed: 1,
				Deaths: 0,
				Recovered: 0,
				Active: 1,
			},
		},
		{
			attributes: {
				OBJECTID: 91,
				Country_Region: 'Mongolia',
				Last_Update: 1584138122000,
				Lat: 46.8625,
				Long_: 103.8467,
				Confirmed: 1,
				Deaths: 0,
				Recovered: 0,
				Active: 1,
			},
		},
		{
			attributes: {
				OBJECTID: 92,
				Country_Region: 'Guernsey',
				Last_Update: 1584138123000,
				Lat: 49.45,
				Long_: -2.58,
				Confirmed: 1,
				Deaths: 0,
				Recovered: 0,
				Active: 1,
			},
		},
		{
			attributes: {
				OBJECTID: 99,
				Country_Region: 'Antigua and Barbuda',
				Last_Update: 1584138126000,
				Lat: 17.0608,
				Long_: -61.7964,
				Confirmed: 1,
				Deaths: 0,
				Recovered: 0,
				Active: 1,
			},
		},
		{
			attributes: {
				OBJECTID: 105,
				Country_Region: 'Bhutan',
				Last_Update: 1584138122000,
				Lat: 27.5142,
				Long_: 90.4336,
				Confirmed: 1,
				Deaths: 0,
				Recovered: 0,
				Active: 1,
			},
		},
		{
			attributes: {
				OBJECTID: 106,
				Country_Region: 'Sudan',
				Last_Update: 1584112416000,
				Lat: 12.8628,
				Long_: 30.2176,
				Confirmed: 1,
				Deaths: 1,
				Recovered: 0,
				Active: null,
			},
		},
		{
			attributes: {
				OBJECTID: 107,
				Country_Region: 'Nepal',
				Last_Update: 1584138123000,
				Lat: 28.3949,
				Long_: 84.124,
				Confirmed: 1,
				Deaths: 0,
				Recovered: 1,
				Active: null,
			},
		},
		{
			attributes: {
				OBJECTID: 110,
				Country_Region: 'Cayman Islands',
				Last_Update: 1584102783000,
				Lat: 19.3133,
				Long_: -81.2546,
				Confirmed: 1,
				Deaths: 0,
				Recovered: 0,
				Active: 1,
			},
		},
		{
			attributes: {
				OBJECTID: 111,
				Country_Region: 'Holy See',
				Last_Update: 1584138122000,
				Lat: 41.9029,
				Long_: 12.4534,
				Confirmed: 1,
				Deaths: 0,
				Recovered: 0,
				Active: 1,
			},
		},
		{
			attributes: {
				OBJECTID: 115,
				Country_Region: "Cote d'Ivoire",
				Last_Update: 1584138122000,
				Lat: 7.54,
				Long_: -5.5471,
				Confirmed: 1,
				Deaths: 0,
				Recovered: 0,
				Active: 1,
			},
		},
		{
			attributes: {
				OBJECTID: 116,
				Country_Region: 'Trinidad and Tobago',
				Last_Update: 1584138122000,
				Lat: 10.6,
				Long_: -61.1,
				Confirmed: 1,
				Deaths: 0,
				Recovered: 0,
				Active: 1,
			},
		},
		{
			attributes: {
				OBJECTID: 117,
				Country_Region: 'Jordan',
				Last_Update: 1584144785000,
				Lat: 31.24,
				Long_: 36.51,
				Confirmed: 1,
				Deaths: 0,
				Recovered: 1,
				Active: null,
			},
		},
		{
			attributes: {
				OBJECTID: 123,
				Country_Region: 'Guyana',
				Last_Update: 1584138123000,
				Lat: 5,
				Long_: -58.75,
				Confirmed: 1,
				Deaths: 1,
				Recovered: 0,
				Active: null,
			},
		},
		{
			attributes: {
				OBJECTID: 125,
				Country_Region: 'Guadeloupe',
				Last_Update: 1584102783000,
				Lat: 16.265,
				Long_: -61.551,
				Confirmed: 1,
				Deaths: 0,
				Recovered: 0,
				Active: 1,
			},
		},
	],
};
