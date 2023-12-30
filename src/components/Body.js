import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {

    // Local State variable, Superpowerful variable
    const [listOfRestraunt, setListOfRestraunt] = useState([]);
    const [filteredRestraunt, setFilteredRestraunt] = useState([]);

    // To track the value of input box we have bind value with local state variable of react
    const [searchText, setSearchText] = useState("")

    try {
        useEffect(() => { fetchData() }, [])
        const fetchData = async () => {

            const url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"
            const data = await fetch(url);
            const json = await data.json();

            // Optional Chaining
            const resListArray = (json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            const restaurantArray = resListArray.map((item) => item.info);

            setListOfRestraunt(restaurantArray);
            setFilteredRestraunt(restaurantArray);
        };
    }
    catch (error) {
        console.error("Error fetching restaurant data:", error);
    };

    // Conditional Rendering
    return listOfRestraunt.length === 0 ? <Shimmer /> :
        (
            <>
                <div className="body">
                    <div className="filter">
                        <div className="search">
                            <input type="text" className="search-box" value={searchText}
                                onChange={(e) => {
                                    setSearchText(e.target.value)
                                }} />
                            <button className="search-btn"
                                onClick={() => {
                                    // Filter the restarunt cards and update the UI
                                    const filterRestraunt = listOfRestraunt.filter(res => res.name.toLowerCase().includes(searchText.toLowerCase()))
                                    setFilteredRestraunt(filterRestraunt)
                                }}
                            >Search</button>
                        </div>
                        <button
                            className="filter-btn"
                            onClick={() => {
                                const filterList = filteredRestraunt.filter(res => res.avgRating >= 4)
                                setFilteredRestraunt(filterList);
                            }}
                        >
                            Top Rated Restraunts
                        </button>
                    </div>
                    <div className="res-container">
                        {filteredRestraunt.map(restaurant => (
                            <RestrauntCard key={restaurant.id} resData={restaurant} />
                        ))}
                    </div>
                </div>
            </>
        )
}

export default Body;