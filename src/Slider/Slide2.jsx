import slide2 from "../../public/Assets/image/slide02.png";

const Slide2 = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row rounded-md items-center justify-between pr-4 py-6 max-w-6xl mx-auto bg-gray-300">
        {/* Left Side Text Section */}
        <div className="pt-6 flex flex-col gap-2 items-center text-black">
         
          <h1 className="text-5xl font-bold">Mac Air Book</h1>
           <p className="text-xl p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br hidden sm:block /> Voluptate delectus non molestiae.</p>
          <div>
            <button className="cursor-pointer bg-black py-2 px-8 mt-3 rounded-full text-white hover:bg-[#d62243] hover:text-white">
              Buy Now
            </button>
          </div>
        </div>

        {/* Right Side Image Section */}
        <div className="w-[450px]">
          <img src={slide2} alt="iPhone 17 Pro Max" />
        </div>
      </div>
    </div>
  );
};

export default Slide2;
