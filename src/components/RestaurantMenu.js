import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId)

    if (resInfo === null) return <Shimmer />;

    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const { name, avgRating } = resInfo?.cards[0]?.card?.card?.info;

    return (
        <div className="menu bg-gray-100 p-6">
            <div className="menu-header mb-4 ml-10">
                <h2 className="text-3xl font-bold">{name}</h2>
                <h3 className="text-lg text-gray-600">Average Rating: {avgRating}</h3>
            </div>
            <div className="menu-body">
                <ul>
                    {itemCards.map((item) => (
                        <div className="menu-items flex border-b border-gray-300 pb-4 mb-4 ml-10" key={item.card.info.id}>
                            <img className="menu-img w-32 h-32 object-cover rounded-md" src={CDN_URL + item.card.info.imageId} alt="Error" />
                            <div className="item-info ml-4">
                                <h3 className="text-xl font-bold">{item.card.info.name}</h3>
                                <span className="text-gray-600">₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
                                <p className="text-gray-700">{item.card.info.description}</p>
                            </div>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;