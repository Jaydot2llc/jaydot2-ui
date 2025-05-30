import {useRef, useState} from "react";
import { NavLink } from 'react-router';
// import logoImg from '../images/jaydot2logo.jpg';

export default function Login() {
    const [username, setUsername] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let usernameInput = useRef<HTMLInputElement>(null); 
    // let usernameIsInvalid: boolean = false;

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (usernameInput.current) {
            setUsername(usernameInput.current.value);
            setIsLoggedIn(true);
        }
    }
    return (
        <section id="login" className="container flex flex-col mx-auto h-full p-6">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <h2 className="text-6xl font-bold text-center">Login</h2>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                {/* <img
                    alt="Jaydot2 LLC"
                    src={logoImg}
                    className="mx-auto h-10 w-auto"
                /> */}
                {isLoggedIn ? <p className="text-center text-lg">You are logged in as {username}</p>: <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>}
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                        />
                    </div>
                    </div>

                    <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                        Password
                        </label>
                        <div className="text-sm">
                        <a href="#" className="font-semibold text-gray-900 hover:text-cyan-800">
                            Forgot password?
                        </a>
                        </div>
                    </div>
                    <div className="mt-2">
                        <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        autoComplete="current-password"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                        />
                    </div>
                    </div>

                    <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-full bg-cyan-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                    >
                        Sign in
                    </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    Not a member?{' '}
                    <NavLink to="/register" className="font-semibold text-gray-900 hover:text-cyan-800">
                    Go to registration
                    </NavLink>
                </p>
                </div>
            </div>
        </section>

    );
}