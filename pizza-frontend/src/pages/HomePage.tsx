import { useEffect, useState } from "react";
import CardPizza from "../sections/CardPizza";
import type { Pizza } from "../models/pizza.model";
import CountPizza from "../sections/CountPizza";

const HomePage = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [count, setCount] = useState(0);
  const [isCount, setIsCount] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4001/products")
      .then((res) => res.json())
      .then(({ data }) => setPizzas(data));
  }, []);

  return (
    <>
      {console.log("render template")}
      <div className="px-4 md:px-10 lg:px-20 xl:px-60 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {pizzas.map((item, index) => (
            <CardPizza
              key={index}
              id={item.id}
              productName={item.productName}
              description={item.description}
            />
          ))}
        </div>
        <button
          onClick={() => setIsCount(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3 rounded cursor-pointer text-sm"
        >
          Open Count
        </button>
        <button
          onClick={() => setIsCount(false)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1.5 px-3 rounded cursor-pointer text-sm"
        >
          Close count
        </button>

        {isCount && (
          <CountPizza count={count} setCount={(count) => setCount(count)} />
        )}
        <br />
        {count}
      </div>
    </>
  );
};

export default HomePage;
