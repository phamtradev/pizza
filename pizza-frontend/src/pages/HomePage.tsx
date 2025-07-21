import LogoPizza from "../assets/pizza.png";

const HomePage = () => {
  return (
    <>
      <div className="px-60 py-20">
        <div className="grid grid-cols-3 gap-6">
          <div className="overflow-y-auto">
            <div className="w-100 rounded overflow-hidden shadow-lg bg-gray-100">
              <img src={LogoPizza} alt="pizza-image" />
              <div className="bg-[#14274E]">
                <div className="px-4 py-3">
                  <div className="font-bold text-white text-lg mb-2">
                    Pizza Thịt Băm
                  </div>
                  <p className="text-white text-base">Thịt băm, sốt cà chua</p>
                </div>
                <div className="px-4 pt-3 pb-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3 rounded cursor-pointer text-sm">
                    Đặt Hàng
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-y-auto">
            <div className="w-100 rounded overflow-hidden shadow-lg bg-gray-100">
              <img src={LogoPizza} alt="pizza-image" />
              <div className="bg-[#14274E]">
                <div className="px-4 py-3">
                  <div className="font-bold text-white text-lg mb-2">
                    Pizza Thịt Băm
                  </div>
                  <p className="text-white text-base">Thịt băm, sốt cà chua</p>
                </div>
                <div className="px-4 pt-3 pb-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3 rounded cursor-pointer text-sm">
                    Đặt Hàng
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-y-auto">
            <div className="w-100 rounded overflow-hidden shadow-lg bg-gray-100">
              <img src={LogoPizza} alt="pizza-image" />
              <div className="bg-[#14274E]">
                <div className="px-4 py-3">
                  <div className="font-bold text-white text-lg mb-2">
                    Pizza Thịt Băm
                  </div>
                  <p className="text-white text-base">Thịt băm, sốt cà chua</p>
                </div>
                <div className="px-4 pt-3 pb-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3 rounded cursor-pointer text-sm">
                    Đặt Hàng
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-y-auto">
            <div className="w-100 rounded overflow-hidden shadow-lg bg-gray-100">
              <img src={LogoPizza} alt="pizza-image" />
              <div className="bg-[#14274E]">
                <div className="px-4 py-3">
                  <div className="font-bold text-white text-lg mb-2">
                    Pizza Thịt Băm
                  </div>
                  <p className="text-white text-base">Thịt băm, sốt cà chua</p>
                </div>
                <div className="px-4 pt-3 pb-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3 rounded cursor-pointer text-sm">
                    Đặt Hàng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
