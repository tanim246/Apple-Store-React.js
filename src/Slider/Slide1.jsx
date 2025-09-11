import slide1 from "../../public/Assets/image/slide1.png";

const Slide1 = () => {
  return (
    <div className="slide1">
      {/* slide 1 */}
      <div className="flex  flex-col pt-3 rounded-md  items-center gap-4 max-w-6xl mx-auto">
        <div className="pt-6 flex flex-col gap-2 items-center text-white ">
          <p className="text-xl ">DON'T MISS OUT ON HUGE SAVINGS</p>
          <h1 className="text-5xl font-bold">Iphone 17 pro max </h1>
          <p className="text-xl ">20% off when buying and paying online</p>
          <div>
            <button className="cursor-pointer bg-white py-2 rounded-full text-black px-8 mt-3 hover:bg-[#d62243] hover:text-white">
              Shop Now
            </button>
          </div>
        </div>
        <div className="w-[400px]">
          <img src={slide1} alt="slide1" />
        </div>
      </div>
    </div>
  );
};

export default Slide1;
