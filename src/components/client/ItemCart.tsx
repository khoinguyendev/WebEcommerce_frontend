const ItemCart = () => {
  return (
    <div className="col-span-12 grid grid-cols-12 border-b p-2 ">
      <div className="col-span-6 flex gap-3 ">
        <div>
          <img className="w-[120px] h-[120px] object-cover" src="https://sadesign.vn/pictures/picfullsizes/2024/11/30/ybd1732939646.jpg" alt="..." />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-gray1">Sam sung galxy</p>
          <span className="text-red hover:text-yellow_btn cursor-pointer w-fit">Xóa</span>
        </div>
      </div>
      <div className="col-span-2 flex items-center text-primary font-bold">29.000.000</div>
      <div className="col-span-2 flex items-center ">
        <button className="text-white bg-primary border border-gray-300 h-6 w-6 flex items-center justify-center text-lg">-</button>
        <input type="text" className="border font-bold border-gray-300 h-6 w-12 text-center no-spinner" />
        <button className="text-white bg-primary border border-gray-300 h-6 w-6 flex items-center justify-center text-lg">+</button>
      </div>
      <div className="col-span-2 flex items-center text-primary font-bold">29.000.000</div>
    </div>
  );
};

export default ItemCart;
