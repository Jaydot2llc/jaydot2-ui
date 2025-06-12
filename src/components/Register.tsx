import { useState } from 'react';
import { NavLink } from 'react-router';

export default function Register() {
    const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);

    const mimimumPasswordLength = 8;

    function handleRegister(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log("Register");
        const formDataObject = new FormData(event.target as HTMLFormElement);
        const formData = Object.fromEntries(formDataObject.entries());

        if(formData.password !== formData.confirm) {
            setPasswordsMatch(false);
            return;
        }

        setPasswordsMatch(true);

        (event.target as HTMLFormElement).reset();
    }

    return (
        <section id="register" className="container flex flex-col mx-auto h-full p-6" onSubmit={handleRegister}>
            <h2 className="text-6xl font-bold text-center">Register</h2>
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign up for a new account</h2>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="" className="space-y-6">
                <div>
                        <label htmlFor="firstName" className="block text-sm/6 font-medium text-gray-900">
                            First Name
                        </label>
                        <div className="mt-2">
                            <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            required
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="lastName" className="block text-sm/6 font-medium text-gray-900">
                            Last Name
                        </label>
                        <div className="mt-2">
                            <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            required
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

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
                        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                            Password
                        </label>
                        <div className="mt-2">
                            <input
                            id="password"
                            name="password"
                            type="password"
                            minLength={mimimumPasswordLength}
                            required
                            autoComplete="current-password"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                            />
                        </div>

                                           </div>

                    <div>
                        <label htmlFor="confirmn" className="block text-sm/6 font-medium text-gray-900">
                            Confirm Password
                        </label>
                        <div className="mt-2">
                            <input
                            id="confirm"
                            name="confirm"
                            type="password"
                            required
                            autoComplete=""
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                            />
                        </div>
                        {!passwordsMatch && <p className="text-red-500 text-sm mt-1">Passwords do not match</p>}
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-full bg-cyan-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                        >
                            Sign up
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    Already a member?{' '}
                    <NavLink to="/login" className="font-semibold text-gray-900 hover:text-cyan-800">
                        Go to login
                    </NavLink>
                </p>
            </div>
        </section>
    );
}