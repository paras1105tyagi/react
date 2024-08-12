import ItemList from "./ItemList";

const RestaurantCategory = (data) => {

console.log(data);

    return (
<div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 flex justify-between">
    <div>
    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
    <span>🔽</span>
    </div>
    {/* header */}
   
    {/* accodian body */}

    <ItemList items={data.itemCards}/>
</div>
    );
}


export default RestaurantCategory;