import slide03 from "../../public/Assets/image/slide03.png";

const Slide3 = () => {
  return (
    <div>
      <div className="max-w-6xl rounded-md flex flex-col items-center gap-8 mx-auto">
        <div className="mt-6 space-y-3 flex flex-col items-center">
          <h1 className="text-5xl  text-center font-bold">
            Our All Models <br />
            Iphone layout{" "}
          </h1>
          <p className="text-xl text-center ">
            Lorem ipsum dolor sit amet consectetur elit. <br />{" "}
            Voluptate delectus non molestiae.
          </p>
          <div>
            <button className="cursor-pointer border border-black py-2 px-8 mt-3 rounded-full  hover:bg-[#d62243] hover:text-white hover:bg-black">
              More Info
            </button>
          </div>
        </div>
        <div className="w-[80%] flex items-right" >
          <img src={slide03} alt=""  />
        </div>
      </div>
    </div>
  );
};

export default Slide3;
