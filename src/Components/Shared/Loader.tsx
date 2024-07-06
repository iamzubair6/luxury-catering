import { LuLoader2 } from "react-icons/lu";

const Loader = () => {
  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <LuLoader2 className="size-24 animate-spin" />
    </div>
  );
};

export default Loader;
