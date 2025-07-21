import { useState } from "react";
import CardPizza from "../sections/CardPizza";
import type { Pizza } from "../models/pizza.model";

const HomePage = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([
    { id: 1, title: "Pizza thit bam", description: "Thit bam, sot ca chua" },
    { id: 2, title: "Pizza hai san", description: "Hai san, sot ca chua" },
    { id: 3, title: "Pizza pho mai", description: "Pho mai, sot ca chua" },
  ]);

  return (
    <>
      <div className="px-60 py-20">
        <div className="grid grid-cols-3 gap-6 mt-10">
          {pizzas.map((item) => (
            <CardPizza
              id={item.id}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
