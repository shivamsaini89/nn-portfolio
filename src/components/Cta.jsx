import { useState } from "react";

function Cta() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());
    console.log(formObject);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className=" flex flex-col items-center justify-center bg-gradient-to-r from-[#0e0f0f] via-[#0a1731] to-[#220e0d] h-screen py-16 text-center ">
        <div className="absolute inset-0">
          <div className="absolute top-30 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500 opacity-10 blur-3xl rounded-full"></div>
        </div>
        <h2 className="text-3xl text-white mb-10">
          Want to Create a Unique Product <br /> Tailored to Your Needs?
        </h2>
        <button
          className="transition duration-200 bg-blue-500 hover:bg-white text-white hover:text-black text-2xl px-6 py-3 rounded-lg shadow-lg z-1 hover:cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          Start building your product →
        </button>
      </div>
      <div className="w-full h-[1px] bg-gray-500"></div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50 z-10 overflow-hidden">
          <div className="relative z-20">
            <button
              className="fixed right-10 md:right-50 px-4 py-2 mt-3 rounded-full text-white border border-white hover:border-black hover:text-black hover:cursor-pointer"
              onClick={() => setIsModalOpen(false)}
            >
              X
            </button>

            <div className="flex justify-evenly items-center bg-[#252b39] p-6 md:p-0 rounded-lg shadow-sm shadow-gray-600 text-white w-[90vw] md:w-[75vw] h-[60vh] md:h-[70vh] border border-white/10 backdrop-blur-50 overflow-auto">
              <div className="w-82 md:w-[30vw] h-52 md:h-64">
                <p className="text-2xl md:text-4xl mb-5">
                  We help you connect with your audience, boosting profitability
                </p>
                <p className="text-sm md:text-md">
                  Maximize your product&apos;s potential by connecting with the
                  right audience. We craft strategies that boost engagement,
                  drive sales, and ensure profitability
                </p>
              </div>

              <div>
                <form
                  className="flex flex-col justify-center m-10 p-2 w-80 h-80"
                  onSubmit={handleSubmit}
                >
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name*"
                    className="border border-white rounded-sm mb-3 p-1"
                  />
                  <select
                    name="services"
                    className="border border-white rounded-sm mb-3 p-1"
                  >
                    <option value="Select Services">Select Services</option>
                  </select>
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email Address*"
                    className="border border-white rounded-sm mb-3 p-1"
                  />
                  <span className="border border-white rounded-sm mb-3 p-1">
                    <select name="countrycode" id="" className="mr-0.5 p-1">
                      <option value="+91">+91</option>
                    </select>
                    <input
                      name="mobile"
                      type="text"
                      maxLength="10"
                      pattern="[0-9]{10}"
                      placeholder="Mobile Number"
                      className="decoration-none  focus:outline-none p-1"
                    />
                  </span>
                  <textarea
                    name="note"
                    placeholder="Add a note"
                    className="border border-white rounded-sm mb-3 h-20 p-1"
                  ></textarea>
                  <button className="bg-blue-500 hover:bg-white hover:text-black transition duration-200 text-white py-2 px-4 rounded-lg text-lg hover:cursor-pointer">
                    Submit Details
                    <span className="ml-2">↗</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cta;
