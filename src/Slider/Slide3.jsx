import slide03 from "../../public/Assets/image/slide03.png";

const Slide3 = () => {
  return (
    <div className="slide3">
      <div className="max-w-6xl rounded-2xl flex flex-col items-center gap-8 mx-auto py-12">
        <div className="mt-6 space-y-3 flex flex-col items-center">
          <h1 className="text-5xl text-center font-bold text-gray-900">
            Our All Models <br />
            iPhone Layout
          </h1>
          <p className="text-xl text-center text-gray-600">
            Lorem ipsum dolor sit amet consectetur elit. <br />
            Voluptate delectus non molestiae.
          </p>
          <div>
            <button className="cursor-pointer border border-black py-2 px-8 mt-3 rounded-full hover:bg-[#d62243] hover:text-white transition-all duration-300">
              More Info
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-[80%] flex justify-center">
          <img
            src={slide03}
            alt="iPhone Models"
            className="drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Slide3;
