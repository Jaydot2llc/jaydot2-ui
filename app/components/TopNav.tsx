import { useRef, useState } from 'react';
import logoImg from '../images/jaydot2logo.jpg';
import { NavLink } from 'react-router';



export default function TopNav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const modal = useRef<HTMLDialogElement | null>(null);

    const toggleHamburgerMenu = () => {
        const menuBtn = document.getElementById('menu-btn');
        const menu = document.getElementById('menu');
        if (menuOpen) {
            menuBtn?.classList.remove('open');
            menu?.classList.add('hidden');
        } else {
            menuBtn?.classList.add('open');
            menu?.classList.remove('hidden');
        }
        setMenuOpen(!menuOpen);
    }

    const handleOpenComingSoonModal = () => {
        console.log('Opening Coming Soon Modal');
        // modal.current?.open();
    }

    return (
        <>
            <nav className="relative container mx-auto p-6">
                {/* <!-- Flex Container for All Items --> */}
                <div className="flex justify-between items-center">
                    {/* <!-- Flex Container for the Logo and the Left Menu --> */}
                    <div className="flex items-center space-x-20">
                        {/* <!-- Logo Container --> */}
                        <div className="logo-container">
                            <NavLink to="/">
                                <img src={logoImg} alt="Jaydot2 Logo" />
                            </NavLink>
                        </div>
                        {/* <!-- Left Menu --> */}
                        <div className="hidden space-x-8 font-bold lg:flex">
                            <NavLink to="/about" className="text-grayishViolet hover:text-cyan-800">About</NavLink>
                            <NavLink to="/products" className="text-grayishViolet hover:text-cyan-800">Products</NavLink>
                            <NavLink to="/services" className="text-grayishViolet hover:text-cyan-800">Services</NavLink>
                        </div>
                    </div>

                    {/* <!-- Flex Container for the Right Buttons Menu --> */}
                    <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
                        <NavLink className="hover:text-cyan-800" to="/login">Login</NavLink>
                        <NavLink to="/register" className="px-8 py-3 font-bold text-white bg-cyan-700 rounded-full hover:opacity-70">
                            Register
                        </NavLink>
                    </div>
                    {/* <!-- Hamburger Menu --> */}
                    <button id="menu-btn" type="button" className="z-40 block hamburger lg:hidden focus:outline-none" onClick={toggleHamburgerMenu}>
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                    </button>
                </div>
                {/* <!-- Mobile Menu --> */}
                <div id="menu" className="absolute hidden p-6 rounded-lg bg-cyan-700 left-6 right-6 top-20 z-100">
                    <div className="flex flex-col items-center justify-center space-y-6 w-full font-bold text-white rounded-sm">
                        <NavLink to="/about" onClick={toggleHamburgerMenu} className="w-full text-center">About</NavLink>
                        <NavLink to="/products" onClick={toggleHamburgerMenu} className="w-full text-center">Products</NavLink>
                        <NavLink to="/services" onClick={toggleHamburgerMenu} className="w-full text-center">Services</NavLink>
                        <NavLink to="/login" onClick={toggleHamburgerMenu} className="w-full pt-6 border-t border-gray-400 text-center">Login</NavLink>
                        <NavLink to="/register" onClick={toggleHamburgerMenu} className="w-full text-center py-3 rounded-full bg-blue-900">Register</NavLink>
                    </div>
                </div>
            </nav>
        </>
    );
}