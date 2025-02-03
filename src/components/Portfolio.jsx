import Card from "./Card";
import {
  p1,
  p2,
  p3,
  p4,
  p5,
  p9,
  p10,
  p11,
  p12,
  p13,
  p14,
} from "../assets/card-images/images.js";

const App = () => {
  return (
    <div
      className="relative bg-gradient-to-r from-[#0e0f0f] via-[#0a1731] to-[#220e0d] min-h-screen w-full"
      id="portfolio"
    >
      <p className="text-4xl md:text-5xl text-white mx-4 mb-6 font-semibold">
        Our Portfolio
      </p>

      <nav className="sticky top-0 bg-gradient-to-r from-[#0e0f0f] via-[#0a1731] to-[#220e0d] text-gray-400 text-sm md:text-base p-3 flex flex-wrap justify-between items-center z-10">
        <div className="flex flex-wrap gap-3">
          {[
            "All",
            "Website",
            "Application",
            "Development",
            "Social",
            "Branding",
            "Dashboard",
          ].map((item, index) => (
            <a key={index} href="#" className="hover:text-blue-500 transition">
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center space-x-3">
          <select className="border border-blue-300 rounded px-3 py-2 text-sm bg-transparent text-white">
            <option value="automotive">Automotive 2+</option>
          </select>
          <select className="border border-gray-300 rounded px-3 py-2 text-sm bg-transparent text-white">
            <option value="Sort By">Sort By</option>
          </select>
        </div>
      </nav>

      <div className="px-6 md:px-20 py-6">
        <p className="text-white text-3xl md:text-5xl font-bold">
          Top Selected Brand
        </p>
        <div className="w-full grid grid-cols-5 gap-3 p-4">
          <div className="col-span-5">
            <Card image={p1} name="Revlon" tag="eCOMMERCE" type="WEBSITE" />
          </div>
          <div className="col-span-3">
            <Card image={p2} name="Nikon" tag="eCOMMERCE" type="WEBSITE" />
          </div>
          <div className="col-span-2">
            <Card
              image={p3}
              name="KFC"
              tag="FOOD AND BEVERAGE"
              type="WEBSITE"
            />
          </div>
          <div className="col-span-2">
            <Card image={p4} />
          </div>
          <div className="col-span-3">
            <Card
              image={p5}
              name="Starbucks"
              tag="FOOD AND BEVERAGE"
              type="APP"
            />
          </div>
        </div>
      </div>

      <div className="px-6 md:px-20 py-6">
        <p className="text-white text-2xl md:text-4xl font-bold">
          Other Recommended Brands
        </p>
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-4 mt-6">
          <Card
            image={p9}
            name="Briyani Blues"
            tag="FOOD & BEVERAGE"
            type="WEBSITE"
          />
          <Card
            image={p10}
            name="Mamypoko"
            tag="FOOD & BEVERAGE"
            type="WEBSITE"
          />
          <Card image={p11} name="Whirlpool" tag="AUTOMOTIVE" type="APP" />
          <Card
            image={p12}
            name="McCain Foods"
            tag="eCOMMERCE"
            type="WEBSITE"
          />
          <Card image={p13} name="Ford India" tag="AUTOMOTIVE" type="APP" />
          <Card image={p14} name="Motozite" tag="AUTOMOTIVE" type="WEBSITE" />

          <div className="w-full max-w-3xl bg-[#1E293B] text-white rounded-2xl p-6 mx-auto text-center col-span-2">
            <h2 className="text-xl md:text-3xl font-semibold">
              Leading the Way in Tech Innovation for Over 20 Years
            </h2>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center">
              {[
                "/clutch-1.png",
                "/clutch-2.png",
                "/clutch-3.png",
                "/award-4.png",
              ].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Clutch ${index + 1}`}
                  className="w-24 md:w-36 h-16 rounded-lg bg-gray-700 p-2"
                />
              ))}
            </div>
            <button className="mt-6 px-4 py-2 bg-blue-500 hover:bg-white text-white hover:text-black text-lg rounded-lg flex items-center justify-center gap-2 transition">
              Let’s Design Tomorrow’s Innovations Today <span>→</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button className="px-6 py-3 bg-transparent hover:bg-white hover:text-black text-white text-lg rounded-lg border border-white transition">
          Load 48 More Showcases →
        </button>
      </div>
    </div>
  );
};

export default App;
