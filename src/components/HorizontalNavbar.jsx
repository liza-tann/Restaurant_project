const HorizontalScrollMenu = () => {
  return (
    <div className="overflow-hidden">
      <div className=" text-14 font-400 flex items-center overflow-x-auto px-4 py-2 justify-between text-black bg-light opacity-80">
        <a href="#" className="px-3 hover:bg-main rounded-full">Drink</a>
        <a href="#" className="px-3 hover:bg-main rounded-full">Alcohol</a>
        <a href="#" className="px-3 hover:bg-main rounded-full">Snack</a>
        <a href="#" className="px-3 hover:bg-main rounded-full">Dessert</a>
       
      </div>
    </div>
  );
};

export default HorizontalScrollMenu;
