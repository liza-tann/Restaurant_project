const HorizontalScrollMenu = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex items-center overflow-x-auto px-4 py-2 justify-between text-black bg-light opacity-70">
        <a href="#" className="px-3 hover:bg-main rounded-full">Beverages</a>
        <a href="#" className="px-3 hover:bg-main rounded-full">Liquor</a>
        <a href="#" className="px-3 hover:bg-main rounded-full">Snack</a>
        <a href="#" className="px-3 hover:bg-main rounded-full">Dessert</a>
       
      </div>
    </div>
  );
};

export default HorizontalScrollMenu;
