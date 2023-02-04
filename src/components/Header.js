import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

// declare a variable like this also (jsx)
// const title = <h1>Food Villa</h1>;
// using it like a functional component
const Title = () => (
    <div className="">
        <a href="/">
            <img className="h-28 p-2 mx-5" src={logo} />
            {/* <h1>Food Villa</h1>; */}
        </a>
    </div>
);

// Functional Component (just written as a js function)
const Header = () => {
    // return <>{title}</>;
    // return <>{Title()}</>; // can also call fucntional component like this

    const [authenticateStatus, setAuthenticateStatus] = useState("Login");

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between  my-2 bg-blend-soft-light border border-orange-100">
            <Title />
            <div className="nav-items ">
                <ul className="flex py-10 ">
                    <li className="px-5 hover:text-orange-400">
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className="px-5 hover:text-orange-400">
                        <Link to={"/about"}>About</Link>
                    </li>
                    <li className="px-5 hover:text-orange-400">
                        <Link to={"/contact"}>Contact</Link>
                    </li>
                    <li className="px-5 hover:text-orange-400">
                        <Link to={"/instamart"}>Instamart</Link>
                    </li>
                    <li className="px-5 hover:text-orange-400">
                        <Link to={"/cart"}>Cart {cartItems.length} items</Link>
                    </li>
                </ul>
            </div>

            <button
                className="px-5  hover:text-orange-400"
                onClick={(e) =>
                    setAuthenticateStatus((authenticateStatus) =>
                        authenticateStatus === "Login" ? "Logout" : "Login"
                    )
                }>
                {authenticateStatus}
            </button>
        </div>
    );
};

export default Header;
