import clsx from "clsx"
import Card from "./components/Card.jsx";
import {
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
  p12,
  p13,
  p14,
} from "./assets/card-images/images.js";
import Navbar from "./components/Navbar.jsx";
import Cta from "./components/Cta.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

const cardsData = [
  {
    id: 1,
    image1: p1,
    image2: p6,
    name: "Revlon",
    tag: "eCOMMERCE",
    type: "WEBSITE",
    cardSpan: 5,
  },
  {
    id: 2,
    image1: p2,
    image2: p7,
    name: "Nikon",
    tag: "eCOMMERCE",
    type: "WEBSITE",
    cardSpan: 3,
  },
  {
    id: 3,
    image1: p3,
    image2: p3,
    name: "KFC",
    tag: "FOOD AND BEVERAGE",
    type: "WEBSITE",
    cardSpan: 2,
  },
  { id: 4, image1: p4, image2: p4, cardSpan: 2 },
  {
    id: 5,
    image1: p5,
    image2: p8,
    name: "Starbucks",
    tag: "FOOD AND BEVERAGE",
    type: "APP",
    cardSpan: 3,
  },
];

export default function Portfolio() {
  return (
    <>
      <Header />
      <div className="relative bg-gradient-to-r from-[#0e0f0f] via-[#0a1731] to-[#220e0d] min-h-screen w-full py-5 ">
        <p className="text-4xl md:text-5xl text-white mx-4 mb-6 font-semibold">
          Our Portfolio
        </p>
        <Navbar />
        <div className="px-6 md:px-20 py-6">
          <p className="text-white text-3xl md:text-5xl font-bold">
            Top Selected Brand
          </p>
          <div className="w-full grid grid-cols-5 gap-3 p-4">
            {cardsData.map((card) => (
              <div key={card.id} 
              className={clsx({
                "col-span-1": card.cardSpan === 1,
                "col-span-2": card.cardSpan === 2,
                "col-span-3": card.cardSpan === 3,
                "col-span-4": card.cardSpan === 4,
                "col-span-5": card.cardSpan === 5,
              })} >
                <Card
                  image1={card.image1}
                  image2={card.image2}
                  name={card.name}
                  tag={card.tag}
                  type={card.type}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="px-6 md:px-20 py-6">
          <p className="text-white text-2xl md:text-4xl font-bold">
            Other Recommended Brands
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <Card
              image1={p9}
              image2={p9}
              name="Briyani Blues"
              tag="FOOD & BEVERAGE"
              type="WEBSITE"
            />
            <Card
              image1={p10}
              image2={p10}
              name="Mamypoko"
              tag="FOOD & BEVERAGE"
              type="WEBSITE"
            />
            <Card
              image1={p11}
              image2={p11}
              name="Whirlpool"
              tag="AUTOMOTIVE"
              type="APP"
            />
            <Card
              image1={p12}
              image2={p12}
              name="McCain Foods"
              tag="eCOMMERCE"
              type="WEBSITE"
            />
            <Card
              image1={p13}
              image2={p13}
              name="Ford India"
              tag="AUTOMOTIVE"
              type="APP"
              />
            <Card
              image1={p14}
              image2={p14}
              name="Motozite"
              tag="AUTOMOTIVE"
              type="WEBSITE"
            />

            <div className="w-full max-w-3xl bg-[#1E293B] text-white rounded-2xl p-6 mx-auto text-center col-span-2 z-1">
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
              <div className="flex justify-center mt-6">
                <button className=" px-6 py-3 bg-blue-500 hover:bg-white text-white hover:text-black text-md rounded-lg flex items-center justify-center gap-1 transition duration-200 hover:cursor-pointer ">
                  <span className="">
                    Let’s Design Tomorrow’s Innovations Today
                  </span>{" "}
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-6">
          <button className=" m-1 px-6 py-3 bg-transparent hover:bg-white hover:text-black text-white text-lg rounded-lg border border-white transition duration-200 hover:cursor-pointer z-1">
            Load 48 More Showcases →
          </button>
        </div>
        <Cta />
      <Footer />
      </div>
    </>
  );
}
