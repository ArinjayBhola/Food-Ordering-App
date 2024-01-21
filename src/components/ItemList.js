import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { NONVEG_LOGO } from "../utils/constants";
import { VEG_LOGO } from "../utils/constants";

const ItemList = ({ items }) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // Dispatch an action
        dispatch(addItem(item));
    }

    const handleRemoveItem = () => {
        dispatch(removeItem())
    }

    return (
        <div>
            {items.map(
                item => (
                    <div key={item.card.info.id} className="relative p-2 m-2 border-solid border-black border-b-2 flex justify-between">
                        <div className="w-9/12 text-left">

                            <div>
                                {
                                    item.card.info.isVeg ?
                                        <img src={VEG_LOGO} className="w-5" /> :
                                        <img src={NONVEG_LOGO} className="w-5" />
                                }
                            </div>

                            <div className="py-2">
                                <span>{item.card.info.name}</span>
                                <span> - ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
                            </div>
                            <p className="text-xs">{item.card.info.description}</p>
                        </div>
                        <div className="relative">
                            {
                                item.card.info.imageId ?
                                    (<div>
                                        <div className="left-6 top-20 flex">
                                            <button
                                                className="p-2 mr-1 mb-1 h-8 flex items-center bg-gray-300 shadow-lg rounded-lg cursor-pointer"
                                                onClick={() => handleAddItem(item)}
                                            >Add</button>
                                            <button
                                                className="p-2 h-8 flex items-center bg-gray-300 shadow-lg rounded-lg cursor-pointer"
                                                onClick={handleRemoveItem}
                                            >Remove</button>
                                        </div>
                                        <img className="w-28 rounded-lg" src={CDN_URL + item.card.info.imageId} alt="Error" />
                                    </div>) :
                                    <div>
                                        <div className="left-6 top-20 flex">
                                            <button
                                                className="p-2 mr-1 mb-1 h-8 flex items-center bg-gray-300 shadow-lg rounded-lg cursor-pointer"
                                                onClick={() => handleAddItem(item)}
                                            >Add</button>
                                            <button
                                                className="p-2 h-8 flex items-center bg-gray-300 shadow-lg rounded-lg cursor-pointer"
                                                onClick={handleRemoveItem}
                                            >Remove</button>
                                        </div>
                                        <h1 className="mt-6 mr-10">Error</h1>
                                    </div>
                            }
                        </div>
                    </div>
                )
            )}
        </div >
    );
};

export default ItemList;
