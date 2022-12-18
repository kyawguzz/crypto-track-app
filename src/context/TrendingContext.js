import { createContext, useLayoutEffect, useState } from "react";

//create context object
export const TrendingContext = createContext({});


//create the provider component
export const TrendingProvider = ({children}) =>{

    const [trendData , setTrendData] = useState();


    const getTrendData = async () =>{
        try{
            const data = await fetch(`https://api.coingecko.com/api/v3/search/trending`)
            .then(res => res.json()).then(json => json);
            setTrendData(data.coins);
        }catch(err){
            console.log(err)
        }
    }


    const resetTrending = () =>{
        getTrendData();
    }
    useLayoutEffect(() => {
        getTrendData();
    },[])

    return(
        <TrendingContext.Provider 
            value={{
                trendData,
                resetTrending
                }}>
            {children}
        </TrendingContext.Provider>
    )
}