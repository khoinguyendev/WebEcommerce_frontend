import SwiperWrapper from "./SwiperWrapper";

const category = [
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
  {
    image: "https://sadesign.vn/pictures/picfullsizes/2024/11/30/ybd1732939646.jpg",
    name: "Danh mục 9",
  },
  {
    image: "https://sadesign.vn/pictures/picfullsizes/2024/11/30/ybd1732939646.jpg",
    name: "Danh mục 10",
  },
  {
    image: "https://sadesign.vn/pictures/picfullsizes/2024/11/30/ybd1732939646.jpg",
    name: "Danh mục 11",
  },
];

const SlideCategory = () => {
  return (
    <SwiperWrapper slidesPerView={10} spaceBetween={20} loop={false}>
      {category.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <img className="h-[100px] w-[100px] object-cover rounded-full" src={item.image} alt={item.name} />
          <p className="text-center mt-2">{item.name}</p>
        </div>
      ))}
    </SwiperWrapper>
  );
};

export default SlideCategory;
