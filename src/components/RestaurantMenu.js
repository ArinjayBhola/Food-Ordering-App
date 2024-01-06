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
        <div className="menu">
            <div className="menu-header">
                <h2 className="h2">{name}</h2>
                <h3>{avgRating}</h3>
            </div>
            <div className="menu-body">
                <ul>
                    {itemCards.map((item) => (
                        <div className="menu-items" key={item.card.info.id} >
                            <div className="item-info">
                                <h3>{item.card.info.name}</h3>
                                <span> ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
                                <p>{item.card.info.description}</p>
                            </div>
                            <img className="menu-img" src={CDN_URL + item.card.info.imageId} alt="Error" />
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;