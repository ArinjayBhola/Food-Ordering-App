import ItemList from "./ItemList"

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

    const { title, itemCards } = data

    const handleClick = () => {
        setShowIndex()
    }

    return (
        < div >
            {/* Header */}
            < div className="w-6/12 mx-auto my-5 bg-gray-100 shadow-xl p-4" >
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{title}({itemCards.length})</span>
                    <span>⬇️</span>
                </div>

                {/* Body */}
                {
                    showItems && <ItemList items={itemCards} />
                }
            </div>
        </div >
    )
}

export default RestaurantCategory;