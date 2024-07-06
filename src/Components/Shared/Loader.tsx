import loading from "@Utils/Loading.json";
import Lottie from "lottie-react";

const Loader = () => {
  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <Lottie animationData={loading} style={{ height: 400, width: 400 }} />
    </div>
  );
};

export default Loader;
