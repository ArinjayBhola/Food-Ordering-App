import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { RESTAURANT_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    // Local State variable, Superpowerful variable
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    // To track the value of input box we have bind value with local state variable of react
    const [searchText, setSearchText] = useState("")

    try {
        useEffect(() => { fetchData() }, [])
        const fetchData = async () => {

            const data = await fetch(RESTAURANT_API);
            const json = await data.json();

            // Optional Chaining
            const resListArray = (json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            const restaurantArray = resListArray.map((item) => item.info);

            setListOfRestaurant(restaurantArray);
            setFilteredRestaurant(restaurantArray);
        };
    }
    catch (error) {
        console.error("Error fetching restaurant data:", error);
    };

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false)
        return (
            <h1>Please check your internet connection</h1>
        )

    // Conditional Rendering
    return listOfRestaurant.length === 0 ? <Shimmer /> :
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
                                    const filterRestaurant = listOfRestaurant.filter(res => res.name.toLowerCase().includes(searchText.toLowerCase()))
                                    setFilteredRestaurant(filterRestaurant)
                                }}
                            >Search</button>
                        </div>
                        <div className="filter-btn-container">
                            <button
                                className="filter-btn"
                                onClick={() => {
                                    const filterList = filteredRestaurant.filter(res => res.avgRating >= 4)
                                    setFilteredRestaurant(filterList);
                                }}
                            >
                                Top Rated Restaurants
                            </button>
                        </div>
                    </div>
                    <div className="res-container">
                        {filteredRestaurant.map(restaurant => (
                            <Link key={restaurant.id} to={"/restaurants/" + restaurant.id} >
                                <RestaurantCard resData={restaurant} />
                            </Link>
                        ))}
                    </div>
                </div>
            </>
        )
}

export default Body;