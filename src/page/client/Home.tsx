import { useEffect } from "react";
import Carousel from "../../components/client/Carousel";
import ContainerProduct from "../../components/client/ContainerProduct";
import ContainerProduct2 from "../../components/client/ContainerProduct2";
import News from "../../components/client/News";
import SlideCategory from "../../components/client/SlideCategory";
import TabsCategory from "../../components/client/TabsCategory";
import TodaySuggest from "../../components/client/TodaySuggest";

const Home = () => {
  return (
    <div className="custom-container">
      <div className="my-2 rounded-lg overflow-hidden min-h-[400px]">
        <Carousel />
      </div>
      <div className="my-2">
        <SlideCategory />
      </div>
      <div className="my-7 min-h-[430px]">
        <TabsCategory />
      </div>
      <div className="my-3 min-h-[750px]">
        <ContainerProduct />
      </div>
      {/* <div className="my-3">
        <ContainerProduct2 />
      </div> */}
      <div className="my-3 min-h-[445px]">
        <TodaySuggest />
      </div>
      <div className="my-3">
        <News />
      </div>
    </div>
  );
};

export default Home;
