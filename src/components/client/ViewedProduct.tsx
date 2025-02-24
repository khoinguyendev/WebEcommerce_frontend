import SildeProduct from "./SildeProduct";
const products = [
  {
    image: "https://sadesign.vn/pictures/picfullsizes/2024/11/30/ybd1732939646.jpg",
    name: "Danh mục 1",
  },
  {
    image: "https://sadesign.vn/pictures/picfullsizes/2024/11/30/ybd1732939646.jpg",
    name: "Danh mục 2",
  },
  {
    image: "https://sadesign.vn/pictures/picfullsizes/2024/11/30/ybd1732939646.jpg",
    name: "Danh mục 3",
  },
  {
    image: "https://sadesign.vn/pictures/picfullsizes/2024/11/30/ybd1732939646.jpg",
    name: "Danh mục 4",
  },
  {
    image: "https://sadesign.vn/pictures/picfullsizes/2024/11/30/ybd1732939646.jpg",
    name: "Danh mục 5",
  },
  {
    image: "https://sadesign.vn/pictures/picfullsizes/2024/11/30/ybd1732939646.jpg",
    name: "Danh mục 6",
  },
  {
    image: "https://sadesign.vn/pictures/picfullsizes/2024/11/30/ybd1732939646.jpg",
    name: "Danh mục 7",
  },
  {
    image: "https://sadesign.vn/pictures/picfullsizes/2024/11/30/ybd1732939646.jpg",
    name: "Danh mục 8",
  },
];
const ViewedProduct = () => {
  return (
    <div>
      <h2 className="border-b-primary border-b-4 ">
        <button className="bg-primary text-white px-5 py-2 font-bold rounded-t-lg">Sản phẩm đã xem</button>
      </h2>
      <div className="py-2">
        <div className="p-1 border border-primary rounded-lg">
          {/* {tabs.map((tab: any) => (activeTab === tab.id ? <div key={tab.id}>{tab.content}</div> : null))} */}
          <SildeProduct />
        </div>
      </div>
    </div>
  );
};

export default ViewedProduct;
