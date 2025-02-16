import logo from "../assets/nn-logo.png";

function Footer() {
  return (
    <footer className="text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-13">
          <div className="flex flex-row items-center text-left">
            <img
              src={logo}
              alt="Neuronimbus Logo"
              className="w-8 sm:w-12 h-8 sm:h-12 bg-blend-lighten"
            />
            <div className="flex flex-col items-center space-x-2">
              <h2 className="text-2xl font-bold">NEURONIMBUS</h2>
              <p className="text-sm md:text-base text-gray-400">
                Innovation. Simplicity. Quality
              </p>
            </div>
          </div>
          <div className="flex flex-row mt-6 text-left">
            <p className="text-white">Follow Along</p>
            <div className="flex space-x-4 mx-2">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-end gap-">
          <div className="mt-0 max-w-lg text-left">
            <p className="text-gray-400">
              At Neuronimbus, we specialize in turning ideas into reality with
              innovative design and seamless development. Our team is dedicated
              to creating user-centric solutions that drive success, elevate
              brands, and deliver exceptional experiences across digital
              platforms.
            </p>
          </div>
          <div className="flex flex-col  mt-10 ">
            <p className="text-white text-xl">Our Products</p>
            <div className="flex flex-col lg:flex-row sm:justify-center gap-6 mt-4 ">
              <div className="flex items-center space-x-2">
                <img src={logo} alt="Neurotal" className="w-6 h-6" />
                <span className="text-gray-300">NEUROTAL</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src={logo} alt="Neuro CRM" className="w-6 h-6" />
                <span className="text-gray-300">Neuro CRM</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src={logo} alt="The Human Cloud" className="w-6 h-6" />
                <span className="text-gray-300">The Human Cloud</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src={logo} alt="Neuro Interactive" className="w-6 h-6" />
                <span className="text-gray-300">Neuro Interactive</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src={logo} alt="Store Flow" className="w-6 h-6" />
                <span className="text-gray-300">Store Flow</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
