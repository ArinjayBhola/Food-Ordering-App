import { CDN_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RestaurantCard = (props) => {
    const { resData } = props  //object destructuring

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData; //object destructuring

    return (
        <>
            <div className="res-card m-3 p-3 w-56 rounded-lg bg-gray-100 hover:bg-gray-300 transition-all h-[430]">
                <img
                    className="res-logo rounded-lg h-64"
                    src={CDN_URL + cloudinaryImageId}
                    alt="Error"
                />
                <h2 className="font-bold py-2 text-xl overflow-hidden whitespace-nowrap text-ellipsis">{name}</h2>
                <h4 className="overflow-hidden whitespace-nowrap text-ellipsis">{cuisines.join(", ")}</h4>
                <h4><FontAwesomeIcon icon={faStar} className="mr-1" />{avgRating}</h4>
                <h4>{costForTwo}</h4>
                <h4>{sla.deliveryTime} minutes</h4>
            </div>
        </>
    );
};

// Higer Order Component
export const higerOrderComponent = (RestaurantCard) => {
    return (props) => {
        return (
            <div className="p-0 m-0">
                <RestaurantCard {...props} />
            </div>
        )
    };
};

export default RestaurantCard;