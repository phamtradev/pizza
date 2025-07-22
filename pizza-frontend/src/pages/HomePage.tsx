import { useEffect, useState } from "react";
import CardPizza from "../sections/CardPizza";
import type { Pizza } from "../models/pizza.model";
import ButtonField from "../components/ButtonField";

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
        <div className="mt-2">
          <ButtonField>Show more</ButtonField>
        </div>
      </div>
    </>
  );
};

export default HomePage;
