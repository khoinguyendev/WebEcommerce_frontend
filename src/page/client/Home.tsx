import Carousel from "../../components/client/Carousel";
import ContainerProduct from "../../components/client/ContainerProduct";
import ContainerProduct2 from "../../components/client/ContainerProduct2";
import News from "../../components/client/News";
import SlideCategory from "../../components/client/SlideCategory";
import TabsCategory from "../../components/client/TabsCategory";
import TodaySuggest from "../../components/client/TodaySuggest";
const slides = [
  {
    image: "https://sadesign.vn/pictures/picfullsizes/2024/11/30/ybd1732939646.jpg",
    title: "1",
    subtitle: "Set 1",
    interval: 1500,
  },
  {
    image: "https://sadesign.vn/pictures/picfullsizes/2024/11/30/ybd1732939646.jpg",
    title: "2",
    subtitle: "Set 2",
    interval: 500,
  },
  {
    image: "https://sadesign.vn/pictures/picfullsizes/2024/11/30/ybd1732939646.jpg",
    title: "3",
    subtitle: "Set3",
    interval: 1000,
  },
];
const category = [
  {
    image: "https://sadesign.vn/pictures/picfullsizes/2024/11/30/ybd1732939646.jpg",
    name: "1",
  },
  {
    image: "https://sadesign.vn/pictures/picfullsizes/2024/11/30/ybd1732939646.jpg",
    name: "2",
  },
  {
    image: "https://sadesign.vn/pictures/picfullsizes/2024/11/30/ybd1732939646.jpg",
    name: "3",
  },
];
const Home = () => {
  return (
    <div className="custom-container">
      <div className="my-2 rounded-lg overflow-hidden">
        <Carousel />
      </div>
      <div className="my-2">
        <SlideCategory />
      </div>
      <div className="my-7">
        <TabsCategory />
      </div>
      <div className="my-3">
        <ContainerProduct />
      </div>
      <div className="my-3">
        <ContainerProduct2 />
      </div>
      <div className="my-3">
        <TodaySuggest />
      </div>
      <div className="my-3">
        <News />
      </div>
    </div>
  );
};

export default Home;
