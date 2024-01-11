const HorizontalScrollMenu = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex items-center overflow-x-auto px-4 py-2 justify-between text-white bg-orange opacity-70">
        <a href="#" className="px-3 hover:bg-orange rounded-full">Appetizers</a>
        <a href="#" className="px-3 hover:bg-orange rounded-full">Beverages</a>
        <a href="#" className="px-3 hover:bg-orange rounded-full">Liquor</a>
        <a href="#" className="px-3 hover:bg-orange rounded-full">Snack</a>
        <a href="#" className="px-3 hover:bg-orange rounded-full">Dessert</a>
        <a href="#" className="px-3 hover:bg-orange rounded-full">Breakfast</a>
        <a href="#" className="px-3 hover:bg-orange rounded-full">Lunch</a>
        <a href="#" className="px-3 hover:bg-orange rounded-full">Dinner</a>
       
      </div>
    </div>
  );
};

export default HorizontalScrollMenu;
