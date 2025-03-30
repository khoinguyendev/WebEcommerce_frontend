import { useEffect, useState } from "react";
import { IBanner } from "../../types/Banner";
import SwiperWrapper from "./SwiperWrapper";
import { SERVER_HOST } from "../../config/Url";
import axios from "axios";
import { Link } from "react-router-dom";

const BanerItem = ({ banner }: { banner: IBanner }) => {
  return (
    <Link to={`${banner.link}`}>
      <img className="h-[400px] object-cover w-full" src={`${SERVER_HOST}/uploads/${banner.image}`} alt={banner.link} />
    </Link>
  );
};
const Carousel = () => {
  const [banner, setBanner] = useState<IBanner[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${SERVER_HOST}/banners?position=HEADER`);
        setBanner(response.data.data.content);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  if (isLoading) return <div>Loading...</div>;
  return (
    <SwiperWrapper slidesPerView={1} spaceBetween={0} navigation={false}>
      {banner.map((banner) => (
        <BanerItem key={banner.id} banner={banner} />
      ))}
    </SwiperWrapper>
  );
};

export default Carousel;
