import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import UserContext from "../utils/UserContext.js"

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Logout")

    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);
    console.log(loggedInUser);
    const navigate = useNavigate();

    // Subscribing to the store using useSelector
    const cartItems = useSelector((store) => store.cart.items);

    const handleLogOut = () => {
        navigate("/");
    }

    return (
        <>
            <div className="flex justify-between bg-gray-500 shadow-lg text-white text-lg">
                <div className="logo-container m-1 flex items-center">
                    <img className="w-20 rounded-md mb-1 opacity-80" src={LOGO_URL} alt="Error" />
                    <h1 className="text-2xl ml-5">{loggedInUser}</h1>
                </div>
                <div className="nav-items">

                    <ul className="flex p-4 m-4">
                        <li className="mx-3">
                            <Link to="/browse">Home</Link>
                        </li>
                        <li className="mx-3">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="mx-3">
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li className="mx-3 flex">
                            <Link to="/cart">
                                <FontAwesomeIcon icon={faShoppingCart} className="text-gray-100" />
                                {cartItems.length > 0 && (
                                    <span className="ml-1 text-sm">{cartItems.length}</span>
                                )}
                            </Link>
                        </li>

                        <form>
                            <button className="mx-3 w-14"
                                onClick={() => {
                                    btnNameReact === "Logout" ? setBtnNameReact("Login") : setBtnNameReact("Logout");
                                    handleLogOut();
                                }}
                            >
                                {btnNameReact}
                            </button>
                        </form>

                        <li className="mx-2">{onlineStatus ? "✅" : "🔴"}</li>
                    </ul>
                </div>
            </div >
        </>
    )
}

export default Header;