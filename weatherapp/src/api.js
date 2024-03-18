export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions';
export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '51349fa0f0msh5d0d16c86cfba84p11c1cfjsn4d121ff8eee0',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

// try {
// 	const response = await fetch(GEO_API_URL, geoApioptions);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }