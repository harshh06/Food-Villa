import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { cardImageURL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = (props) => {
    const { restaurantId } = useParams();
    const [restaurantData, setReastaurantData] = useState(null);
    useEffect(() => {
        fetchRestaurantMenu();
    }, []);

    async function fetchRestaurantMenu() {
        const data = await fetch(
            `https://www.swiggy.com/dapi/menu/v4/full?lat=23.1690769&lng=77.50024010000001&menuId=${restaurantId}`
        );
        const json = await data.json();
        console.log(json);
        setReastaurantData(json.data);
    }
    return restaurantData === null ? (
        <Shimmer />
    ) : (
        <div>
            <img src={cardImageURL + restaurantData?.cloudinaryImageId}></img>
            <h1>
                {restaurantData.name} - {restaurantData.area}
            </h1>
            <h5>Cuisines: {restaurantData?.cuisines?.join(", ")}</h5>
            <h5>Area: {restaurantData?.areaSlug}</h5>
            {/* {rating dilevery time costfor3} */}
            <h5>Rating: {restaurantData?.avgRating}</h5>
            <h5>Delivery Time: {restaurantData?.sla?.deliveryTime} min</h5>
            <h5>{restaurantData?.costForTwoMsg}</h5>
            <h3>Menu</h3>
            <ul>
                {Object.values(restaurantData?.menu?.items).map((dish, id) => {
                    return <li key={id}>{dish.name}</li>;
                })}
            </ul>
        </div>
    );
};

export default RestaurantMenu;
