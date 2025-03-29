import heroImg from '../images/tech_hero1.jpg';

export function Welcome() {
  return (
    <section id="hero">
        {/* <!-- Hero Container --> */}
        <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
            {/* <!-- Content Container --> */}
            <div className="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
                <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
                    More than just another company
                </h1>
                <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
                  At Jaydot2, we are committed to delivering <span className='font-bold text-cyan-700'>excellence</span> in software development through cutting-edge <span className='font-bold text-cyan-700'>innovation</span> and <span className='font-bold text-cyan-700'>creativity</span>. Guided by integrity, we build high-quality products, services, and custom support solutions that empower businesses and individuals alike.
                </p>
                <div className="mx-auto lg:mx-0">
                    <a href="#" className="py-5 px-10 text-2xl font-bold text-white bg-cyan rounded-full lg:py-4 hover:opacity-70">
                        Get Started
                    </a>
                </div>
            </div>
            {/* <!-- Image --> */}
            <div className="mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2">
                <img src={heroImg} className="shadow-2xl shadow-gray-800 rounded-sm" alt="Illustration Working" />
            </div>
        </div>
    </section>
  );
}

