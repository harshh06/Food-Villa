import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/ProfileClass";
import ProfileFunctionalComponent from "./components/Profile";
import Instamart from "./components/Instamart";
import { Provider } from "react-redux";
import store from "../utils/store";
import Cart from "./components/Cart";
{
    /**
     * Header (Navabar ListItems)
     * Body
     * - Search Bare
     * - RestaurantList
     *  - RestuarantCard
     *  - Image
     *  - Name
     *  - Rating
     *  - Cuisine
     * Footer (Links Copyrights )
     */
}

const AppLayout = () => {
    return (
        <Provider store={store}>
            <Header />
            <Outlet />
            <Footer />
        </Provider>
    );
};

// Routes

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
                children: [
                    {
                        path: "profile",
                        element: <ProfileFunctionalComponent />,
                    },
                ],
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/menu/:restaurantId",
                element: <RestaurantMenu />,
            },
            {
                path: "/instamart",
                element: <Instamart />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root
root.render(<RouterProvider router={appRouter} />);
//async defer
// root.render(<AppLayout />);
