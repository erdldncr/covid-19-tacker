import axios from 'axios'

const url='https://covid19.mathdro.id/api';

export const fetchData=async(country)=>{
    let changableUrl=url
    if(country){
        changableUrl=`${url}/countries/${country}`
    }

    try{

       const {data:{confirmed,recovered,deaths,lastUpdate}}= await axios.get(changableUrl)
       
       return {
           confirmed,
           recovered,
           deaths,
           lastUpdate
       }

    }catch(error){

    }
}
export const fetchDailyData=async()=>{
    try{
        const response=await axios.get(`${url}/daily`)

        return response

    }catch(err){
        console.log(err)
    }
}

export const countries=async ()=>{
    try{
        const {data:{countries}} = await axios.get(`${url}/countries`)
       
        return countries.map(country=>country.name)
    }catch(err){
        console.log(err)
    }
}