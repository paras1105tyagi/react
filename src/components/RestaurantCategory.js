import ItemList from "./ItemList";

// const RestaurantCategory = (data) => {
// const [showItems, setShowItems]= useState(false);
// console.log(data);
// const handleClick=()=>{
// console.log("Clicked");
// setShowItems(!showItems);
// }

const RestaurantCategory=({data,showItems}) =>{
    return (
    <div>
<div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 flex justify-between">
   
        <div className ="flex justify-between cursor-pointer" onClick={handleClick}>
    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
    <span>🔽</span>
   
    </div>
   
    {/* header */}
   
    {/* accodian body */}
    {showItems && <ItemList items={data.itemCards}/>}
    </div>
</div>
    );


};



export default RestaurantCategory;