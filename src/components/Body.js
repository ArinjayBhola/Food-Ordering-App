import RestrauntCard from "./RestrauntCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    // Local State variable, Superpowerful variable
    const [listOfRestraunt, setListOfRestraunt] = useState(resList);

    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filterList = listOfRestraunt.filter(res => res.data.avgRating >= 4)
                        setListOfRestraunt(filterList);
                    }}
                >
                    Top Rated Restraunts
                </button>
            </div>
            <div className="res-container">
                {listOfRestraunt.map(restaurant => (
                    <RestrauntCard key={restaurant.data.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
}

export default Body;