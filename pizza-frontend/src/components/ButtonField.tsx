import type { ReactNode } from "react";
import IconSpinner from "../icons/IconSpinner";

type Props = {
  loading?: boolean;
  children?: ReactNode;
};

const ButtonField = ({ loading, children }: Props) => {
  return (
    <>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer">
        {!loading ? (
          children
        ) : (
          <div className="flex items-center gap-0.5 text-white">
            <IconSpinner width="32px" height="32px" />
            {children}
          </div>
        )}
      </button>
    </>
  );
};

export default ButtonField;
