import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../utils/cartSlice";
import { cardImageURL } from "../constants";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="p-2 m-2">
            <h1 className="text-3xl font-bold"> Cart Items</h1>
            <button className="bg-red-300 p-2 m-2" onClick={handleClearCart}>
                Clear Cart
            </button>
            <div>
                {cartItems.map((item) => {
                    const name = item.name;
                    const price = item.price / 100;
                    const img = item.cloudinaryImageId;
                    return (
                        <div className="flex p-2 m-2">
                            <img
                                className="h-20"
                                src={`${cardImageURL}${img}`}
                            />
                            <h1 className="px-2">Name : {name}</h1>
                            <h1 className="px-2">Price: {price}</h1>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Cart;
