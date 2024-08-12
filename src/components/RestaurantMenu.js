import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
RestaurantCategory
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

// console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.Regular?.cards);

// const categories = resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card.card?.["@type"]== "url");

    return (
        <div className="text-center">
            <h1 className ="font-bold my-4 text-2xl">{resInfo?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants[0]?.info?.name}</h1>
            <h2>{resInfo?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants[0]?.info?.cuisines}</h2>
            {/* <p>{cuisines.join(",")} - {costForTwoMessage}</p> */}
            <h2 className="text-lg">Menu</h2>
            <ul >

                {/* {itemCards.map((item) =>( <li key={item.card.info.data}>{item.card.info.name} - {item.card.info.price/100 || item.card.info.defaultPrice/100}
                </li>))} */}
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
                <li>Biryani</li>
                <li>Diet Coke</li>
            </ul>


            {/* categories accodian */}
            {categories.map((category)=><RestaurantCategory data ={category?.card?.card}/>)}
        </div>
    );
};

export default RestaurantMenu;