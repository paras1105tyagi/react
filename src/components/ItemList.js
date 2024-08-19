import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList = ({items}) =>{
  
   const dispatch = useDispatch();

const handleAddItem = (item) =>{
     // Dispatch an action
     dispatch(addItem(item));
}
  
return (
 <div>
   
        {/* {items.map(item =>(div key = {item.card.info.id} className ="p-2 m-2  border-gray-200  border-b-2 text-left"></div>
        
        <img src={CDN_URL + item.card.imageID} 

        className="w-14"/>
        <div>
        <div className="py-2"><span>{item.card.info.name}</span>
        <span>- RS. {item.card.info.price/100}</span></div>
        
        <div>
        <p className ="text-xs">{item.card.info.description}
        </p>
        </div>
        <div className="absolute">
             <button className="p-2 mx-16 rounded-lg bg-white shadow-lg m-auto" onClick = {()=> handleAddItem(item)}>Add+</button>
        </div>
         </div>
        ))}
    */}
 </div>
);
}

export default ItemList;