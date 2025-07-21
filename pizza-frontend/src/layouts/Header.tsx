const Header = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-20 py-6 bg-gray-800 text-white shadow-md">
        <div className="text-2xl font-bold">PhamTraPizza</div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer">
          Create Pizza
        </button>
      </div>
    </>
  );
};

export default Header;
