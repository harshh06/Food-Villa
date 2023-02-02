import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NotFound from "./NotFound";
// import { restaurantList } from "../restaurantList";
import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar";
import Shimmer from "./Shimmer";
const Body = () => {
    //console.log(restaurantList.data.data.cards);
    const [searchText, setSearchText] = useState("");
    const [allRestaurantCards, setAllRestaurantCards] = useState([]);
    const [filteredRestaurantCards, setFilteredRestaurantCards] = useState([]);

    useEffect(() => {
        fetchRestaurants();
    }, []);

    async function fetchRestaurants() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        if (json.data.length !== 0) {
            setAllRestaurantCards(json.data.cards[2].data.data.cards);
            setFilteredRestaurantCards(json.data.cards[2].data.data.cards);
        } else {
            setAllRestaurantCards([]);
        }
    }

    return allRestaurantCards.length === 0 ? (
        <Shimmer />
    ) : (
        <div className=" my-2">
            <div>
                <SearchBar
                    searchText={searchText}
                    setSearchText={setSearchText}
                    allRestaurantCards={allRestaurantCards}
                    filteredRestaurantCards={filteredRestaurantCards}
                    setFilteredRestaurantCards={setFilteredRestaurantCards}
                />
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurantCards.length === 0 ? (
                    <NotFound />
                ) : (
                    filteredRestaurantCards.map((restaurant) => (
                        <Link
                            to={`menu/${restaurant.data.id}`}
                            key={restaurant.data.id}>
                            <RestaurantCard
                                // name={restaurant.data.name}
                                // cloudinaryImageId={restaurant.data.cloudinaryImageId}
                                // cuisines={restaurant.data.cuisines}
                                // avgRating={restaurant.data.avgRating}
                                key={restaurant.data.id}
                                {...restaurant.data}
                            />
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
};

export default Body;
