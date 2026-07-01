import heroImg from '../images/tech_hero1.jpg';

export default function Hero() {
  return (
    <section id="hero">
        {/* <!-- Hero Container --> */}
        <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
            {/* <!-- Content Container --> */}
            <div className="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
                <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
                    Shopify Consulting, Theme Development & Custom App Solutions
                </h1>
                <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
                  Helping retailers launch, optimize, and scale their Shopify stores through expert consulting, custom themes, integrations, and Shopify app development.
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