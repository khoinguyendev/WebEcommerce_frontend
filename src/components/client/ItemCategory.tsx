import { Link } from "react-router-dom";
import { ICategory } from "../../types/Category";
import { SERVER_HOST } from "../../config/Url";

const ItemCategory = ({ item }: { item: ICategory }) => {
  return (
    <Link to={""} key={item.id} className="flex flex-col items-center p-3 group">
      <img className="h-[80px] w-[80px] object-cover rounded-full transition-transform duration-500 group-hover:rotate-45" src={`${SERVER_HOST}/uploads/${item.image}`} alt={item.name} />
      <p className="text-center mt-2 text-gray1 text-[15px]">{item.name}</p>
    </Link>
  );
};

export default ItemCategory;
