import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();

    try {
        useEffect(() => {
            fetchMenu()
        }, []);

        const fetchMenu = async () => {
            const data = await fetch(MENU_API + resId);
            const json = await data.json();

            setResInfo(json.data);
        }
    }
    catch (error) {
        console.error("Error fetching restaurant data:", error);
    };

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
                    {console.log(resInfo)}
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;