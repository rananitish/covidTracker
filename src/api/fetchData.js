import axios from 'axios';   //api request
const url ='https://covid19.mathdro.id/api';  
 const fetchData = async () => {   //asyn data
     try{              //if fetch is successful
         const { data:{confirmed, recovered, deaths, lastUpdate} } = await axios.get(url);
        
         return {confirmed, recovered,  deaths, lastUpdate};
     }
     catch(error){



        
              }
}   
 export default fetchData;