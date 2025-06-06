import { useEffect, useState } from "react";
import ItemProductSlide from "./ItemProductSlide";
import axios from "axios";
import { SERVER_HOST } from "../../config/Url";
import { IProduct } from "../../types/Product";
import SnipperLoading from "../admin/SnipperLoading";

const ContainerProduct = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const responseProduct = await axios.get(`${SERVER_HOST}/products?status=ACTIVE&categoryId=24`);
        setProducts(responseProduct.data.data.content);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h2 className="border-b-primary border-b-4 ">
        <button className="bg-primary text-white px-5 py-2 font-bold rounded-t-lg">Đồ công nghệ</button>
      </h2>
      <div className="grid grid-cols-12">
        {isLoading ? (
          <SnipperLoading />
        ) : (
          <>
            <div className="hidden py-2 gap-4 flex-col md:flex sm:col-span-3 sm:order-1">
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
            <div className="col-span-12 md:col-span-9 md:order-2 flex flex-wrap">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1">
                {products.map((item, index) => (
                  <ItemProductSlide key={index} product={item} />
                ))}
                {products.map((item, index) => (
                  <ItemProductSlide key={index} product={item} />
                ))}
                {products.map((item, index) => (
                  <ItemProductSlide key={index} product={item} />
                ))}
                {products.map((item, index) => (
                  <ItemProductSlide key={index} product={item} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContainerProduct;
