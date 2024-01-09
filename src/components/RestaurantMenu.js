import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const [showIndex, setShowIndex] = useState(0);

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId)

    const dummy = "Dummy Data";

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, avgRating, totalRatingsString } = resInfo?.cards[0]?.card?.card?.info;

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        c =>
            c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    return (
        <div className="text-center">
            <h1 className="font-bold my-4 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(",")} - {avgRating} Stars</p>
            <p className="font-bold text-lg">{totalRatingsString}</p>

            {/* Categories Accordian */}
            {categories.map(
                (category, index) => (
                    // Controlled Component
                    <RestaurantCategory
                        data={category?.card?.card}
                        key={category?.card?.card?.info?.title}
                        showItems={index === showIndex ? true : false}
                        setShowIndex={() => setShowIndex(index)}
                    />
                )
            )}
        </div>
    )
}

export default RestaurantMenu;