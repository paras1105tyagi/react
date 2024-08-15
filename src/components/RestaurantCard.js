import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/userContext";
const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;
  const {loggedInUser} = useContext(UserContext);
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg  bg-gray-100 hover:bg-gray-200" >
      <img
        className="rounded-lg"
        alt="Burger"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h3>{cuisines.join(",")}</h3>
      <h3>{avgRating}</h3>
      <h4>{loggedInUser}</h4>
    </div>
  );
};

// higher order component

// input - restaurant card>resstaurant card promoted

export const withPromotedLabel = (RestaurantCard) =>{
  return (props) =>{
    return(
      <div>
        <label className="absolute bg-blck text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard{...props}/>
      </div>
    );
  };
};

export default RestaurantCard;
