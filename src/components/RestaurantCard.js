import { cardImageURL } from "../constants";

// const restaurantList = {
//     name: "Sagar Gaire",
//     imgURL: "w7vlvorykzdnn6xbxmt6",
//     cuisines: "North Indian, South Indian",
//     rating: "4.0 Rating",
// };
const RestaurantCard = (props) => {
    const { name, cloudinaryImageId, cuisines, avgRating } = props;
    //console.log(props);
    return (
        <div className="w-56 p-2 m-2 shadow-sm bg-blend-soft-light h-72 border border-orange-50  hover:border-orange-400 hover:shadow-lg">
            <img className="" src={`${cardImageURL}${cloudinaryImageId}`} />
            <h3 className="font-bold text-xl">{name}</h3>
            <h4 className="">{cuisines.join(", ")}</h4>
            <h5>{avgRating} Rating</h5>
        </div>
    );
};

export default RestaurantCard;
