import logoDark from "./logo-dark.svg";
import jaydot2Logo from '../images/jaydot2logo.jpg';

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4 section-container">
      <div className="flex flex-col items-center">
        <img src={jaydot2Logo} alt="Jaydot2" className="w-32 h-32" />
        <h1 className="text-5xl font-bold mt-4">Welcome to Jaydot<span className="text-cyan-700">2</span>!</h1>
        <p className="mt-2 text-center">
          Jaydot2 is a full-stack web development company specializing in React, TypeScript, Node.js, Spring Boot, Java, and Kotlin.
        </p>
        <p className="mt-2 text-center">
          We build web applications for small businesses, startups, and entrepreneurs.
        </p>
        <p className="mt-2 text-center">
          We also provide consulting services for web development projects.
        </p>
        <p className="mt-2 text-center">
          Contact us at <a href="mailto:info@jaydot2.com">info@jaydot2.com</a>
        </p>
        <p className="mt-2 text-center text-3xl text-cyan-700 font-bold">
          Website Update Coming Soon!
        </p>
      </div>
    </main>
  );
}

