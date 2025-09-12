import React from "react";
import { FaStar, FaUserShield, FaHeart, FaGem } from "react-icons/fa";
import { MdOutlineHighQuality } from "react-icons/md";

const About = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Images */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 relative">
            <img
              src="https://i.ibb.co/HHxwnss/saree1.jpg"
              alt="Model in Saree"
              className="rounded-xl shadow-lg"
            />
            <span className="absolute top-3 left-3 bg-white text-orange-500 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow">
              ✨ Handcrafted
            </span>
          </div>
          <img
            src="https://i.ibb.co/sHJnFq6/saree2.jpg"
            alt="Bride in Jewelry"
            className="rounded-xl shadow-md"
          />
          <div className="flex items-center justify-center rounded-xl shadow-md bg-gradient-to-br from-orange-400 to-red-500 text-white flex-col py-8">
            <FaStar size={30} />
            <p className="text-2xl font-bold mt-2">15+</p>
            <span className="text-sm">Years of Excellence</span>
          </div>
        </div>

        {/* Right Side - Content */}
        <div>
          <blockquote className="text-xl italic font-medium text-gray-700 mb-6 relative">
            <span className="text-orange-500 text-3xl mr-2">❝</span>
            Every piece tells a story of tradition, passion, and uncompromising
            quality.
          </blockquote>

          <p className="text-gray-600 leading-relaxed mb-4">
            For over a decade, we have been dedicated to creating exquisite
            jewelry and ornaments that celebrate life’s most precious moments.
            Our journey began with a simple belief: that every piece of jewelry
            should be as unique and beautiful as the person who wears it.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            From traditional designs rooted in cultural heritage to contemporary
            pieces that reflect modern aesthetics, our master craftsmen pour
            their heart and soul into every creation.
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-start gap-3 p-4 border rounded-lg hover:shadow-md transition">
              <FaUserShield className="text-orange-500 mt-1" />
              <div>
                <h4 className="font-semibold">Expert Craftsmanship</h4>
                <p className="text-sm text-gray-500">
                  Master artisans with decades of experience
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 border rounded-lg hover:shadow-md transition">
              <MdOutlineHighQuality className="text-orange-500 mt-1" />
              <div>
                <h4 className="font-semibold">Quality Focus</h4>
                <p className="text-sm text-gray-500">
                  Every piece meets our strict standards
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 border rounded-lg hover:shadow-md transition">
              <FaHeart className="text-orange-500 mt-1" />
              <div>
                <h4 className="font-semibold">Customer First</h4>
                <p className="text-sm text-gray-500">
                  Your satisfaction is our priority
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 border rounded-lg hover:shadow-md transition">
              <FaGem className="text-orange-500 mt-1" />
              <div>
                <h4 className="font-semibold">Unique Designs</h4>
                <p className="text-sm text-gray-500">
                  Exclusive patterns you won’t find elsewhere
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <button className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-6 py-3 rounded-full shadow hover:scale-105 transition">
            Discover Collection →
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
