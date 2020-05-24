import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';
const durl = 'https://covid19.mathdro.id/api/daily';

export const fetchData = async (country) => {
    let changeableUrl = url;

    if (country){
        changeableUrl = `${url}/countries/${country}`;
    }
    //return (  );

    try {
        const { data: { confirmed, deaths, recovered, lastUpdate } } = await axios.get(changeableUrl);        

        return { confirmed, recovered, deaths,lastUpdate };        
    } catch (error) {
        return error;
    }
}


export const fetchDailyData = async () => {
    //return (  );

    try {
        const { data } = await axios.get(durl);

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));
        
        return modifiedData;
        
    } catch (error) {
        return error;
    }
}

export const fetchCountries = async () => {
    
    try {
        const { data : { countries }} = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name );
        
    } catch (error) {
        console.log(error);
    }

}
 
//export default fetchData;