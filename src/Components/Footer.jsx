import { Link } from "react-router";
import logo from "../../public/favicon.png";
const Footer = () => {
  return (
    <footer className="bg-[#FFF8E5] space-y-20 pb-12">
      <div className="mt-12 border-t border-gray-300 pt-8 text-center">
        <h4 className="font-bold text-3xl text-gray-900 mb-2">Stay Updated</h4>
        <p className="text-gray-700 text-sm mb-4">
          Subscribe to our newsletter for exclusive offers, new arrivals, and
          jewelry care tips
        </p>
        <form className="flex justify-center gap-2 flex-wrap">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md border bg-base-100 border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition"
          >
            Message
          </button>
        </form>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="logo" width="50px" />
              <div>
                <h3 className="text-orange-500 font-bold text-lg">
                  Mobify | Mobile Shop
                </h3>
                {/* <p className="text-gray-600 text-sm">
                  Premium Jewelry & Ornaments
                </p> */}
              </div>
            </div>
            <p className="text-gray-700 mb-4 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              vel minus sed dolore. Culpa assumenda eum odit perspiciatis labore
              quas.
            </p>
            <div className="flex flex-col gap-2 text-sm text-gray-700 mb-4">
              <span>- Facebook</span>
              <span> - Instagram</span>
              <span>- Twitter</span>
              <span> - Youtube</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-2 border-b-2 border-orange-500 inline-block">
              Quick Links
            </h4>
            <ul className="mt-4 flex flex-col space-y-2 text-gray-700 text-sm">
              <Link to="/home">
                Home
              </Link>
              <Link to="/shop">
                Shop
              </Link>
              <Link to="/about">
                About Us
              </Link>
              <Link to="/contact">
                Contact
              </Link>
              <Link to="#">
                Blog
              </Link>
            </ul>
          </div>

          {/* Services & Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-2 border-b-2 border-orange-500 inline-block">
                Services
              </h4>
              <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Size Guide
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-2 border-b-2 border-orange-500 inline-block">
                Contact
              </h4>
              <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                <li>310-437-2766</li>
                <li> mobifyl@gmail.com</li>
                <li> 07 No Chadnigat UP, Moulvibazar,Moulvbazar Sadar -3200</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8  border-t border-gray-300 pt-4 flex flex-col sm:flex-row justify-between text-xs text-gray-500">
          <p className="text-center">© 2024 Ornament Store. All rights reserved.</p>
          <ul className="flex gap-4 mt-2 sm:mt-0 justify-center sm:justify-end">
            <li>
              <a href="#" className="hover:text-orange-500">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
