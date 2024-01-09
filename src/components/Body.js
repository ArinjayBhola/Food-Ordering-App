import RestaurantCard, { higerOrderComponent } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import { RESTAURANT_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {

    // Local State variable, Superpowerful variable
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    // To track the value of input box we have bind value with local state variable of react
    const [searchText, setSearchText] = useState("")

    const { loggedInUser, setUserName } = useContext(UserContext)

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

    // Higer Order Component
    const IsOpen = higerOrderComponent(RestaurantCard);

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
                    <div className="filter mb-5">
                        <div className="search p-4 flex justify-center">
                            <input type="text" className="p-2  border border-solid border-black w-96 h-8 rounded-lg" value={searchText}
                                onChange={(e) => {
                                    setSearchText(e.target.value)
                                }} />
                            <button className="px-4s bg-gray-200 ml-2 rounded-lg w-24 h-8 hover:bg-gray-300"
                                onClick={() => {
                                    // Filter the restarunt cards and update the UI
                                    const filterRestaurant = listOfRestaurant.filter(res => res.name.toLowerCase().includes(searchText.toLowerCase()))
                                    setFilteredRestaurant(filterRestaurant)
                                }}
                            >Search</button>
                        </div>
                        <div className="filter-btn-container flex justify-center">
                            <button
                                className="px-4 pb-1 bg-gray-200 mb-2 rounded-lg hover:bg-gray-300"
                                onClick={() => {
                                    const filterList = filteredRestaurant.filter(res => res.avgRating >= 4)
                                    setFilteredRestaurant(filterList);
                                }}
                            >
                                Top Rated Restaurants
                            </button>
                        </div>
                        <div className="filter-btn-container flex justify-center">
                            <input
                                className="border border-black"
                                onChange={(e) => { setUserName(e.target.value) }}
                                value={loggedInUser} />
                        </div>
                    </div>
                    <div className="res-container break-words flex flex-wrap justify-center">
                        {filteredRestaurant.map(restaurant => (
                            <Link key={restaurant.id} to={"/restaurants/" + restaurant.id}>
                                {restaurant.isOpen ? (<IsOpen resData={restaurant} />) :
                                    (<RestaurantCard resData={restaurant} />)}
                            </Link>
                        ))}
                    </div>
                </div>
            </>
        )
}

export default Body;