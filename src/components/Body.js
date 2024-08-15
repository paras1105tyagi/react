import { useContext, useEffect, useState } from "react";
import RestaurantCard , { withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
// import resList from "../utils/mockData";
const Body = () => {
  // State Variable- Super powerful variable(it maintains the state of a component)
  const [listofRestaurants, setlistofRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=28.99330&lng=77.02100"
    );
    const json = await data.json();
    console.log(
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setlistofRestaurant(
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // if (listofRestaurants.length == 0) {
  //   return (
  //     <h1>
  //       <Shimmer />
  //     </h1>
  //   );
  // }

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Looks like you are offline</h1>;
  }

  const {setUserName} = useContext(UserContext);
  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            // placeholder="Search"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          {/* <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              // filter the restaurant card and update the UI
              // searchText
              console.log(searchText);
              const filteredRestaurant = listofRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setlistofRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button> */}
          <label>userName: </label>
          <input className="border-black p-2"
          value={loggedinUser} onChange={(e) => setUserName(e.target.value)}/>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              // filter logic

              const filteredList = listofRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setlistofRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.data.id}
          >
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
             )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
