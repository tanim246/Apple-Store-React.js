import slide2 from "../../public/Assets/image/slide02.png";
const Slide2 = () => {
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black">
      <div className="flex flex-col sm:flex-row rounded-2xl items-center justify-between px-8 py-12 max-w-6xl mx-auto text-white">
        <div className="flex flex-col gap-4 max-w-md text-center sm:text-left">
          <h1 className="text-5xl font-extrabold">
            MacBook Air M2
          </h1>
          <p className="text-lg text-gray-300">
            Experience the power of Apple silicon.
            <br className="hidden sm:block" />
            Ultra-thin, ultra-light, and unbelievably fast.
          </p>
          <div>
            <button className="cursor-pointer bg-orange-500 py-3 px-10 mt-4 rounded-full font-semibold shadow-lg hover:bg-white hover:text-black transition-all duration-300">
              Buy Now
            </button>
          </div>
        </div>
        <div className="w-[450px] mt-8 sm:mt-0">
          <img
            src={slide2}
            alt="MacBook Air M2"
            //className="drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Slide2;
