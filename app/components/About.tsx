export default function About() {
    return (
        <section id="about" className="container flex flex-col mx-auto p-6 lg:flex-row">
            <h2 className="text-6xl font-bold text-center lg:text-left lg:w-1/2">About</h2>
            <div className="text-xl text-center text-gray-600 lg:w-1/2 lg:text-left">
                <p className="mb-6">Jaydot2 was originally founded as Jaydot2, LLC, in 2006 as a web development consulting firm.  Since then we have branched into other areas including mobile development, cloud development, software products, and business services.</p>
                <h3>Our Mission</h3>
                <p>Our mission is to provide expert technical and business consulting services in specialized areas to help organizations achieve their digital transformation goals. We are committed to delivering high-quality solutions that drive innovation, improve efficiency, and create value for our clients.</p>
                <h3>Our Approach</h3>
                <p>We take a collaborative approach to working with our clients, combining our technical expertise with their domain knowledge to develop customized solutions that address their unique challenges. Our team of experienced professionals is dedicated to delivering exceptional service and support throughout the project lifecycle.</p>
                <h3>Our Values</h3>
                <p>At Jaydot2, we are guided by a set of core values that define who we are and how we operate:</p>
                <ul className="my-2">
                    <li><span className="font-bold">Integrity</span> – We conduct business with honesty, transparency, and respect for our clients, partners, and employees.</li>
                    <li><span className="font-bold">Innovation</span> – We embrace new ideas, technologies, and methodologies to drive continuous improvement and deliver cutting-edge solutions.</li>
                    <li><span className="font-bold">Quality</span> – We are committed to excellence in everything we do, from project planning and execution to customer service and support.</li>
                    <li><span className="font-bold">Collaboration</span> – We work closely with our clients to understand their needs, goals, and challenges, and develop solutions that meet their requirements.</li>
                    <li><span className="font-bold">Community</span> – We are dedicated to giving back to the community through volunteer work, charitable donations, and other initiatives that support social responsibility.</li>
                </ul>
            </div>
        </section>
    );
}