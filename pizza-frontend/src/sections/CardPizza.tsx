import LogoPizza from "../assets/pizza.png";
import type { Pizza } from "../models/pizza.model";

type Props = Pizza;

const CardPizza = ({ productName, description }: Props) => {
  return (
    <>
      <div className="overflow-y-auto cursor-pointer">
        <div className="w-100 rounded overflow-hidden shadow-lg bg-gray-100">
          <img src={LogoPizza} alt="pizza-image" />
          <div className="bg-[#14274E]">
            <div className="px-4 py-3">
              <div className="font-bold text-white text-lg mb-2">
                {productName}
              </div>
              <p className="text-white text-base">{description}</p>
            </div>
            <div className="px-4 pt-3 pb-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3 rounded cursor-pointer text-sm">
                Đặt Hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPizza;
