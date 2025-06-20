import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Route, createRoutesFromElements, RouterProvider } from "react-router";
import { createBrowserRouter } from 'react-router-dom';
import { Amplify } from "aws-amplify";
// import outputs from "../amplify_outputs.json"; // for local development
import './index.css';
import App from './App.tsx';
import Home from './components/Home.tsx';
import About from './components/About.tsx';
import Contact from './components/Contact.tsx';
import Products from './components/Products.tsx';
import Services from './components/Services.tsx';
import AltLogin from './components/AltLogin.tsx';
import Register from './components/Register.tsx';
import Research from './components/Research.tsx';
import Support from './components/Support.tsx';
import PrivacyPolicy from './components/PrivacyPolicy.tsx';
import Faqs from './components/Faqs.tsx'; 
import NotFound from './components/NotFound.tsx';


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route index element={<Home />} />
    <Route path='/home' element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='products' element={<Products />} />
    <Route path='services' element={<Services />} />
    <Route path='login' element={<AltLogin />} />
    <Route path='register' element={<Register />} />
    <Route path='research' element={<Research />} />
    <Route path='contact' element={<Contact />} />
    <Route path='support' element={<Support />} />
    <Route path='privacy-policy' element={<PrivacyPolicy />} />
    <Route path='faqs' element={<Faqs />} />
    <Route path='404' element={<NotFound />} />
  </Route>
  )
);

// Amplify.configure(outputs); development only

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
