import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
 
const Body=()=>{

    const [restuarentsList,setRestuarentList]=useState([]);
    const [SearchRest,setSearchRest]=useState("");
    const [filterRestuarentsList,setFilterRestuarentList]=useState([]);


    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        const data=await fetch("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.5798313&lng=81.9977665&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const dataJson=await data.json();

        console.log(dataJson);

        setRestuarentList(dataJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestuarentList(dataJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }


    return(
        <div>
            <div className="search-container">
                <div>
                    <input type="text" value={SearchRest} onChange={(e)=> setSearchRest(e.target.value)}></input>
                    <button onClick={()=>{
                        const filterList=restuarentsList.filter((filterList)=>filterList.info.name.toLowerCase().includes(SearchRest.toLowerCase()));
                        console.log(filterList);
                        console.log(SearchRest);
                        setFilterRestuarentList(filterList);
                    }}>Search</button>
                </div>
                <button
                    onClick={()=>{
                        const filteredRest=restuarentsList.filter((rest)=> rest.info.avgRating >= 4);
                        console.log(filteredRest);
                        setRestuarentList(filteredRest);
                    }}
                >
                    top restuarents
                </button>
            </div>
            <div>
                {
                    filterRestuarentsList.map((rest)=><RestaurantCard key={rest?.info?.id} resData={rest}></RestaurantCard>)
                }
            </div>
        </div>
    );
}

export default Body;