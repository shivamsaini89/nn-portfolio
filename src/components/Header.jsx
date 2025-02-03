import logo from "../assets/nn-logo.png";

export default function Header() {
  return (
    <section className="bg-gradient-to-r from-[#091734] via-[#0d0e0d] to-gray-900 py-20 px-6 text-center">
      <div className="mx-auto max-w-4xl ">
        <div className="absolute top-6 left-10">
          <img src={logo} alt="Neuronimbus Logo" className="w-12 h-12" />
        </div>
        <h1 className="text-white text-6xl leading-tight">
          Crafting Experiences, <br /> Building Futures
        </h1>
        <p className="text-gray-400 mt-4 text-lg">
          From concept to creation, we turn visions into reality. Dive into our
          portfolio and witness the art of crafting timeless digital
          experiences.
        </p>
        <div className="mt-6 relative z-10">
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg text-lg transition duration-200 hover:bg-white hover:text-black">
            View our portfolio <span className="ml-2">↗</span>
          </button>
        </div>
        <div className="relative flex">
          <div className="absolute inset-0">
            <div className="absolute -top-30 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#d96919] opacity-20 blur-3xl rounded-full"></div>
          </div>
          <div className="bg-gray-800 mt-12 p-6 rounded-lg max-w-6xl mx-auto z-10">
            <p className="text-gray-300 text-lg">
              Tailored Solutions for Industry-Specific Challenges
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2 mt-4 place-items-center">
              {[
                "eCommerce 10+",
                "QSR 2+",
                "Automotive 4+",
                "Finance 4+",
                "Retail 4+",
                "Food & Beverage 6+",
                "Medical & Healthcare 3+",
                "Consumer Durable 6+",
              ].map((category, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-gray-200 py-2 px-2 rounded-full text-sm"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
