import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {

    const [showIndex, setShowIndex] = useState(0);

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId)

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, avgRating, totalRatingsString, cloudinaryImageId, areaName } = resInfo?.cards[0]?.card?.card?.info;

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        c =>
            c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );


    return (
        <div className="text-center bg-gray-300 border ">
            <div className="h-96 flex justify-center items-center bg-gray-300 border-solid border-black border-b-2 mx-10">
                <div className="ml-10">
                    <img src={CDN_URL + cloudinaryImageId} className="h-72 rounded-xl" />
                </div>
                <div className="m-5">
                    <h1 className="font-bold my-4 text-4xl">{name}</h1>
                    <div className="font-bold text-lg">
                        <p>{cuisines.join(", ")} | {areaName}</p>
                        <div className="w-20 shadow-lg border border-black m-auto">
                            <p className="border border-b-black">{avgRating}</p>
                            <p className="border border-t-black"> {totalRatingsString}</p>
                        </div>
                    </div>
                </div>
            </div>

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