type Props = {
  placeholder?: string;
  value?: string;
  width?: string;
  height?: string;
  onChange?: (value: string) => void;
};

const TextField = ({ width = "100%", onChange, ...props }: Props) => {
  return (
    <>
      <input
        {...props}
        className="w-full px-4 py-3 bg-[#f5f5f5] border-none outline-none text-[#14274E] rounded"
        style={{ width }}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </>
  );
};

export default TextField;
