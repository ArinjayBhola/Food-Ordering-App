import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
    return (
        <div>
            {items.map(
                item => (
                    <div key={item.card.info.id} className="relative p-2 m-2 border-gray-200 border-b-2 flex justify-between">
                        <div className="w-9/12 text-left">
                            <div className="py-2">
                                <span>{item.card.info.name}</span>
                                <span> - ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
                            </div>
                            <p className="text-xs">{item.card.info.description}</p>
                        </div>
                        <div className="relative">
                            <div className="absolute bottom-0 left-6 top-20 ">
                                <button className="p-2 m-auto h-8 flex items-center bg-gray-100 bg-opacity-50 shadow-lg rounded-lg cursor-pointer">Add +</button>
                            </div>
                            <img className="w-28 rounded-lg" src={CDN_URL + item.card.info.imageId} alt="Error" />
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default ItemList;