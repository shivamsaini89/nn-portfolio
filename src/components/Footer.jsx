import logo from "../assets/nn-logo.png";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0e0f0f] via-[#0b152b] to-[#220e0d] text-white p-8">
      <div className="container mx-auto grid grid-cols-2 gap-2">
        <div className="grid grid-cols-1">
          <div className="flex flex-row items-center text-left">
            <img src={logo} alt="Neuronimbus Logo" className="w-12 h-12" />
            <div className="flex flex-col items-center space-x-2">
              <h2 className="text-2xl font-bold">NEURONIMBUS</h2>
              <p className="text-gray-400">Innovation. Simplicity. Quality</p>
            </div>
          </div>
          <div className="flex flex-row mt-6 text-left">
            <p className="text-white">Follow Along</p>
            <div className="flex space-x-4 mx-2">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook">fa</i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram">ig</i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-youtube">yt</i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin">li</i>
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div className="mt-0 max-w-lg text-left">
            <p className="text-gray-400">
              At Neuronimbus, we specialize in turning ideas into reality with
              innovative design and seamless development. Our team is dedicated
              to creating user-centric solutions that drive success, elevate
              brands, and deliver exceptional experiences across digital
              platforms.
            </p>
          </div>
          <div className="mt-10 ">
            <p className="text-white text-lg">Our Products</p>
            <div className="flex flex-row justify-center gap-6 scale-75 md:scale-100 mt-4">
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
