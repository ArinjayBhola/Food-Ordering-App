import { useEffect, useState } from "react";
import { RESTAURANT_API } from "./constants";

const useRestaurantCard = () => {

    const [restaurantArray, setRestaurantArray] = useState([]);

    try {
        useEffect(() => {
            fetchData()
        }, [])

        const fetchData = async () => {
            const data = await fetch(RESTAURANT_API);
            const json = await data.json();

            // Optional Chaining
            const resListArray = (json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            const restaurantData = resListArray.map((item) => item.info);

            setRestaurantArray(restaurantData);
        }
    }
    catch (error) {
        console.error("Error fetching restaurant data:", error)
    }

    return restaurantArray;
}

export default useRestaurantCard;
