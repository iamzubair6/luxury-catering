import liveMenu from "@assets/menu/menu6.jpg";
const LiveMenu = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
      <img
        src={liveMenu}
        alt="menu"
        className="h-[500px] w-full md:w-[80%] object-cover"
      />
      <div className="bg-custom-beige text-black md:pt-32 w-full">
        <h1 className="text-5xl font-semibold font-fjalla mb-6">LIVE BBQ</h1>
        <p className="mb-4">Available year round</p>
        <p className="mb-8">
          We will bring a team of BBQ specialists plus BBQ machines to host the
          most amazing outdoor/rooftop party, at your home or office.
        </p>
        <button className="bg-black text-white p-[24px] rounded-md hover:bg-red-400">
          +880 1XNN-NNNNNN
        </button>
      </div>
    </div>
  );
};

export default LiveMenu;
