import ItemProductSlide from "./ItemProductSlide";
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
const ContainerProduct2 = () => {
  return (
    <div>
      <h2 className="border-b-primary border-b-4 ">
        <button className="bg-primary text-white px-5 py-2 font-bold rounded-t-lg">Đồ công nghệ</button>
      </h2>
      <div className="grid grid-cols-12 py-2">
        <div className="hidden col-span-4 lg:block">
          <a className="block" href="#" title="Săn sale thả ga">
            <img
              className="lazyload loaded"
              width={280}
              height={310}
              src="//bizweb.dktcdn.net/100/429/689/themes/869367/assets/banner_1.jpg?1705909623213"
              data-src="//bizweb.dktcdn.net/100/429/689/themes/869367/assets/banner_1.jpg?1705909623213"
              alt="Săn sale thả ga"
              data-was-processed="true"
            />
          </a>
        </div>

        {products.map((item, index) => (
          <div className="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2">
            <ItemProductSlide key={index} product={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContainerProduct2;
