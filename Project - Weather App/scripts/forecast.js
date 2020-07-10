class Forecast {
    constructor() {
        this.key = "yxt9FLUlQXF3KsG5mCJZ3RJApGAL5leH";
        this.weatherURI = "http://dataservice.accuweather.com/currentconditions/v1/";
        this.cityURI = "http://dataservice.accuweather.com/locations/v1/cities/search";
    }
    async updateCity(city) {
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key);
        return {
        // object shorthand notation
        cityDets,
        weather
        };
    }
    async getCity(city) {
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURI + query);
        const data = await response.json();
        return data[0];
    }
    async getWeather(id) {
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURI + query);
        const data = await response.json();
        return data[0];
    }
}


// API: https://developer.accuweather.com/
// api key
// const key = "yxt9FLUlQXF3KsG5mCJZ3RJApGAL5leH";

// // get Weather information
// const getWeather = async (id) => {
//     const baseURL = "http://dataservice.accuweather.com/currentconditions/v1/";
//     const query = `${id}?apikey=${key}`;

//     const response = await fetch(baseURL + query);
//     const data = await response.json();

//     return data[0];
// }

// // get City information
// const getCity = async (city) => {
//     const baseURL = "http://dataservice.accuweather.com/locations/v1/cities/search";
//     const query = `?apikey=${key}&q=${city}`;
    
//     const response = await fetch(baseURL + query);
//     const data = await response.json();

//     return data[0];
// };


// tester
// getCity("vancouver").then(data => {
//     return getWeather(data.Key);
// }).then((data) => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

