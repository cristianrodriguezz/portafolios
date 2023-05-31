const Home = () => {
  return (
    <div className="flex min-h-screen bg-white">
      <div className="flex flex-col justify-center flex-1 px-8 py-8 lg:flex-none lg:px-24 md:px-12">
        <div className="w-full mx-auto lg:max-w-6xl">
          <div className="max-w-xl mx-auto text-center lg:text-left">
            <div className="-mt-12">
              <p className="font-bold md:text-6xl text-4xl text-[#1e2938] tracking-tighter trackingtight">
                Subí tu repositorio para tener más visibilidad
              </p>
              <p className="mt-6 text-base text-slate-500 lg:text-2xl">
                Build, design and debug your Tailwind website visually with
                Tailscan, right within the browser.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 mt-10 lg:flex-row">
              <a
                className="w-full bg-[#4e42da] border-2 border-[#4e42da] duration-200 focus-visible:outline-[#1e2938] focus-visible:ring-[#1e2938] focus:outline-none font-semibold hover:bg-transparent hover:border-indigo-50 hover:text-[#4e42da] inline-flex items-center justify-center lg:px-12 lg:w-auto px-6 py-4 rounded-full text-center text-white tracking-wide"
                href="#"
              >
                <span>Get TailScan</span>
              </a>
              <p className="text-slate-500">
                <span className="block">Try it &nbsp; &nbsp; →</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex-1 hidden w-0 lg:block">
        <div>
          <img
            alt=""
            className="absolute inset-0 object-cover w-full h-full bg-gray-300 rounded-l-3xl"
            src="https://tailscan.com/tailscan-hero.webp"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
