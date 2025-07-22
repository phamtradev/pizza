import ButtonField from "../components/ButtonField";

const Header = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-20 py-6 bg-gray-800 text-white shadow-md">
        <div className="text-2xl font-bold">PhamTraPizza</div>
        <ButtonField>Create Pizza</ButtonField>
      </div>
    </>
  );
};

export default Header;
