import logo from "../assets/nn-logo.png";

export default function Header() {
  return (
    <section className="bg-gradient-to-r from-[#091734] via-[#0d0e0d] to-gray-900 py-20 px-6 text-center">
      <div className="mx-auto max-w-4xl ">
        <div className="absolute top-6 left-10">
          <img src={logo} alt="Neuronimbus Logo" className="w-12 h-12 mix-blend-lighten" />
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
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg text-lg transition duration-200 hover:bg-white hover:text-black hover:cursor-pointer hover:animate-pulse ">
            <a href="#portfolio" >
            View our portfolio <span className="ml-2 ">↗</span>
            </a>
          </button>
        </div>
        <div className="relative flex">
          <div className="absolute inset-0">
            <div className="absolute -top-30 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#d96919] opacity-20 blur-3xl rounded-full z-2"></div>
          </div>
          <div className="bg-gray-800 mt-12 p-6 rounded-lg max-w-6xl mx-auto shadow-lg shadow-current border border-white/10 backdrop-blur-50 z-10">
            <p className="text-gray-300 text-lg">
              Tailored Solutions for Industry-Specific Challenges
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-4 ">
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
                  className="bg-gray-700 text-gray-200 py-2 px-3 rounded-full text-sm hover:cursor-pointer hover:bg-gray-400 hover:text-black transition duration-200 "
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
