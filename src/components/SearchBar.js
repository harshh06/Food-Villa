const SearchBar = (props) => {
    const {
        setSearchText,
        searchText,
        setFilteredRestaurantCards,
        allRestaurantCards,
        filterRestaurantCards,
    } = props;
    filterRestaurants = (e) => {
        if (searchText.length === 0) {
            setFilteredRestaurantCards(allRestaurantCards);
        } else {
            setFilteredRestaurantCards(
                allRestaurantCards.filter((restaurant) => {
                    let searchTmp = searchText.toLowerCase();
                    let nameTmp = restaurant.data.name.toLowerCase();
                    return nameTmp.includes(searchTmp);
                })
            );
        }
    };
    return (
        <div className="bg-blend-soft-light  my-2 border border-gray-50 ">
            <input
                type="text"
                className="p-2 my-2 ml-7 mr-2 rounded-md border border-orange-100 "
                placeholder="restaurant.."
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value);
                }}
            />
            <button
                className="bg-orange-600 text-white p-2 rounded-md"
                onClick={filterRestaurants}>
                Search
            </button>
        </div>
    );
};

export default SearchBar;
