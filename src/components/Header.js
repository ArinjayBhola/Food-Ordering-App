import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Logout")

    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext)

    // Subscribing to the store using useSelector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems)

    return (
        <>
            <div className="flex justify-between bg-pink-100 shadow-lg">
                <div className="logo-container m-1">
                    <img className="w-20 rounded-md" src={LOGO_URL} alt="Error" />
                </div>
                <div className="nav-items">

                    <ul className="flex p-4 m-4">
                        <li className="px-4">Online Status:{onlineStatus ? "✅" : "🔴"}</li>

                        <li className="px-4">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="px-4">
                            <Link to="/about">About Us</Link>
                        </li>
                        <li className="px-4">
                            <Link to="/contact">Contact Us</Link>
                        </li>
                        <li className="px-4">
                            <Link to="/cart">Cart-({cartItems.length} Items)</Link>
                        </li>

                        <button className="px-4 w-14"
                            onClick={() => {
                                btnNameReact === "Logout" ? setBtnNameReact("Login") : setBtnNameReact("Logout")
                            }}
                        >
                            {btnNameReact}</button>
                        <li className="px-4">{loggedInUser}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;