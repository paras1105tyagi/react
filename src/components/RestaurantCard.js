import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;
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
    </div>
  );
};

// higher order component

// input - restaurant card>resstaurant card promoted

export const withPromotedLabel = (RestaurantCard) =>{
  return () =>{
    return(
      <div>
        <label>Promoted</label>
        <RestaurantCard/>
      </div>
    );
  };
};

export default RestaurantCard;
