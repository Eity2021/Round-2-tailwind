import icons1 from "../../image/others/icon1.png";
import icons2 from "../../image/others/icon2.png";
import icons3 from "../../image/others/icon3.png";
import icons4 from "../../image/others/icon4.png";
import logo_footer from "../../image/logo/footer_logo.png";
export default function Footer() {
  return (
    <div>
      <footer className="bg-gradient-to-b from-[#49A4F8]/5 to-[#0FD1BA4A]/5 dark:from-darkColorMode dark:to-darkColorMode pt-80">
        <div className="container mx-auto px-6 py-12">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Logo + Description */}
            <div className="lg:col-span-2">
              <div>
                <img src={logo_footer} alt="" />
              </div>
              <p className="mt-3 text-sm text-paragraph dark:text-gray-300  text-justify xl:w-[400px] w-100% leading-tight font-medium font-sans">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-sm font-bold text-footer_heading dark:text-white font-manrope mb-3">
                Solutions
              </h3>
              <ul className="space-y-2 text-sm text-paragraph dark:text-gray-300 font-medium font-sans">
                <li>
                  <a href="#">Web Tool</a>
                </li>
                <li>
                  <a href="#">Consulting</a>
                </li>
                <li>
                  <a href="#">Research</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-footer_heading dark:text-white font-manrope  mb-3">
                Company
              </h3>
              <ul className="space-y-2 text-sm text-paragraph dark:text-gray-300 font-medium font-sans">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Methodology</a>
                </li>
                <li>
                  <a href="#">Partners</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-footer_heading dark:text-white font-manrope  mb-3">
                Community
              </h3>
              <ul className="space-y-2 text-sm text-paragraph dark:text-gray-300 font-medium font-sans">
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">Open-Source Data</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-10 flex flex-col md:flex-row items-center justify-between border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              Copyright © 2025 everythinggreen. All Rights Reserved
            </p>
            <div className="flex space-x-3  ">
              <div className="w-[40px] h-[40px] bg-white dark:bg-gray-800  rounded-[50%] flex items-center justify-center ">
                <a href="#">
                  <img src={icons1} alt="icons1" />
                </a>
              </div>
              <div className="w-[40px] h-[40px] bg-white dark:bg-gray-800  rounded-[50%] flex items-center justify-center ">
                <a href="#">
                  <img src={icons2} alt="icons2" />
                </a>
              </div>
              <div className="w-[40px] h-[40px] bg-white dark:bg-gray-800  rounded-[50%] flex items-center justify-center ">
                <a href="#">
                  <img src={icons3} alt="icons3" />
                </a>
              </div>
              <div className="w-[40px] h-[40px] bg-white dark:bg-gray-800  rounded-[50%] flex items-center justify-center ">
                <a href="#">
                  <img src={icons4} alt="icons4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
