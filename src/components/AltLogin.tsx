import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router';
import Button from './ui/Button';
import Input from './ui/Input';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaApple } from 'react-icons/fa';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // let usernameInput = useRef<HTMLInputElement>(null); 

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
  //   if (usernameInput.current) {
  //     setUsername(usernameInput.current.value);
  //     setIsLoggedIn(true);
  // }
  setIsLoggedIn(true);
    // Replace with your email/password authentication logic
  };

  const handleGoogleLogin = () => {
    console.log('Logging in with Google');
    // Replace with Google login logic
  };

  const handleFacebookLogin = () => {
    console.log('Logging in with Facebook');
    // Replace with Facebook login logic
  };

  const handleAppleLogin = () => {
    console.log('Logging in with Apple');
    // Replace with Apple login logic
  };

  return (
    <section id="login" className="container flex flex-col mx-auto h-full p-6">
      <div className="min-h-full flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
          <h2 className="text-6xl font-bold text-center">Login</h2>
          {/* <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2> */}
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                {/* <img
                    alt="Jaydot2 LLC"
                    src={logoImg}
                    className="mx-auto h-10 w-auto"
                /> */}
                {isLoggedIn ? <p className="text-center text-lg">You are logged in as {username}</p>: <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>}
                </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              required
            />
            <Button className="flex w-full justify-center rounded-full bg-cyan-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600" type="submit">
              Login
            </Button>
          </form>
          <div className="my-6 text-center text-gray-500">or</div>
          <div className="space-y-3">
            <Button className="social-media-auth-button" onClick={handleGoogleLogin}>
              <FcGoogle size={20} /> Login with Google
            </Button>
            <Button className="social-media-auth-button" onClick={handleFacebookLogin}>
              <FaFacebook size={20} className="text-blue-600" /> Login with Facebook
            </Button>
            <Button className="social-media-auth-button" onClick={handleAppleLogin}>
              <FaApple size={20} /> Login with Apple
            </Button>
          </div>
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
};

export default Login;