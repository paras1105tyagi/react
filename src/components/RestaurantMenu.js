import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () =>{
//    const [resInfo, setresInfo] = useState(null);

   const {resId} = useParams();
   const resInfo = useRestaurantMenu(resId);
//     useEffect(() => {
//       fetchMenu();
//     },[]);
// const fetchMenu = async () => {
//     const data = await fetch(
//         MENU_API
//     );
//   const json = await data.json();
//   console.log(json);
//   setresInfo(json.data);
// };
   if(resInfo === null) <Shimmer/>;
   
//    const {name,cuisines,costForTwoMessage } = resInfo?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants[0]?.info;

    return (
        <div className="menu">
            <h1>{resInfo?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants[0]?.info?.name}</h1>
            <h2>{resInfo?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants[0]?.info?.cuisines}</h2>
            {/* <p>{cuisines.join(",")} - {costForTwoMessage}</p> */}
            <h2>Menu</h2>
            <ul>

                {/* {itemCards.map((item) =>( <li key={item.card.info.data}>{item.card.info.name} - {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>))} */}
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
                <li>Biryani</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    );
};

export default RestaurantMenu;