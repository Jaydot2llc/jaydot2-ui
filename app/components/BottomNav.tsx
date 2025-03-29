import facebookImg from '../images/icon-facebook.svg';
import twitterImg from '../images/icon-twitter.svg';
import pinterestImg from '../images/icon-pinterest.svg';
import instagramImg from '../images/icon-instagram.svg';
// import githubImg from '../images/icon-github.svg';
import logoImg from '../images/jaydot2logo.jpg';
import { NavLink } from 'react-router';

export default function BottomNav() {
    return (
        <footer className="py-10 bg-cyan-900">
        {/* <!-- Footer Container --> */}
        <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
            {/* <!-- Logo --> */}
            <img src={logoImg} alt="Logo" />

            {/* <!-- Footer Menu Container --> */}
            <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
                {/* <!-- Menu 1 --> */}
                <div className="flex flex-col items-center w-full md:items-start">
                    <div className="mb-5 font-bold text-white capitalize">Features</div>
                    <div className="flex flex-col items-center space-y-3 md:items-start">
                        <NavLink to="/products" className="capitalize text-gray-400 hover:text-cyan">Products</NavLink>
                        <NavLink to="/services" className="capitalize text-gray-400 hover:text-cyan">Services</NavLink>
                        <NavLink to="/research" className="capitalize text-gray-400 hover:text-cyan">Research</NavLink>
                    </div>
                </div>
                {/* <!-- Menu 2 --> */}
                <div className="flex flex-col items-center w-full md:items-start">
                    <div className="mb-5 font-bold text-white capitalize">Resources</div>
                    <div className="flex flex-col items-center space-y-3 md:items-start">
                        <a href="https://jaydot2.wordpress.com/" className="capitalize text-gray-400 hover:text-cyan" target="_blank">Blog</a>
                        <NavLink to="/support" className="capitalize text-gray-400 hover:text-cyan">Support</NavLink>
                    </div>
                </div>
                {/* <!-- Menu 3 --> */}
                <div className="flex flex-col items-center w-full md:items-start">
                    <div className="mb-5 font-bold text-white capitalize">Company</div>
                    <div className="flex flex-col items-center space-y-3 md:items-start">
                        <NavLink to="/about" className="capitalize text-gray-400 hover:text-cyan">About</NavLink>
                        {/* <NavLink to="/faqs" className="capitalize text-gray-400 hover:text-cyan">FAQs</NavLink> */}
                        <NavLink to="/privacy-policy" className="capitalize text-gray-400 hover:text-cyan">Privacy Policy</NavLink>
                        <NavLink to="/contact" className="capitalize text-gray-400 hover:text-cyan">Contact</NavLink>
                    </div>
                </div>
            </div>

            {/* <!-- Social Media Container --> */}
            <div className="flex space-x-6">
                <a href="https://www.facebook.com/jaydot2llc/" target="_blank" rel="noopener noreferrer">
                    <img src={facebookImg} alt="Facebook" className="ficon" />
                </a>
                <a href="https://x.com/jaydot2llc" target="_blank" rel="noopener noreferrer">
                    <img src={twitterImg} alt="Twitter" className="ficon" />
                </a>
                <a href="https://www.pinterest.com/jaydotllc/" target="_blank" rel="noopener noreferrer">
                    <img src={pinterestImg} alt="Pinterest" className="ficon" />
                </a>
                <a href="https://www.instagram.com/jaydot2llc/" target="_blank" rel="noopener noreferrer">
                    <img src={instagramImg} alt="Instagram" className="ficon" />
                </a>
            </div>
        </div>
    </footer>
    );
}