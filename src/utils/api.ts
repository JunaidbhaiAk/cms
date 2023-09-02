import axios from "axios"

export const getGraphData = async () => {
    const res = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
    if(res.status === 200) return res.data.cases;
    else return null;
}

export const getMapData = async () => {
    const res = await axios.get('https://disease.sh/v3/covid-19/countries');
    if(res.status === 200){
        return filterData(res.data);
    } 
}

const filterData = (data:any) => {
    return data.map((ele:any) => {
        const {countryInfo} = ele;
        return {countryName:ele.country,lat:countryInfo.lat,long:countryInfo.long,cases:ele.cases,deaths:ele.deaths,recovered:ele.recovered}
    })
}