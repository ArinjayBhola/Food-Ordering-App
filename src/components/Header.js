import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Logout")

    const onlineStatus = useOnlineStatus();


    return (
        <>
            <div className="flex justify-between bg-pink-100 shadow-lg mb-2">
                <div className="logo-container m-1">
                    <img className="w-20 rounded-md" src={LOGO_URL} alt="Error" />
                </div>
                <div className="nav-items">
                    <ul className="flex p-4 m-4">
                        <li className="px-4">Online Status:{onlineStatus ? "✅" : "🔴"}</li>
                        <li className="px-4"><Link to="/">Home</Link></li>
                        <li className="px-4"><Link to="/about">About Us</Link></li>
                        <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                        <li className="px-4">Cart</li>

                        <button className="px-4 w-14"
                            onClick={() => {
                                btnNameReact === "Logout" ? setBtnNameReact("Login") : setBtnNameReact("Logout")
                            }}
                        >
                            {btnNameReact}</button>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;