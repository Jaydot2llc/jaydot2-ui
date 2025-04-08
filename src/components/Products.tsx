export default function Products() {
    return (
        <section id="products" className="container flex flex-col mx-auto p-6 lg:flex-row">
            <h2 className="text-6xl font-bold text-center lg:text-left lg:w-1/2">Products</h2>
            <div className="text-xl text-center text-gray-600 lg:w-1/2 lg:text-left">
                <p className="mb-6">We are currently working on a range of innovative software products that will help businesses and organizations streamline their operations, improve efficiency, and drive growth. Our products are designed to address common challenges faced by companies in various industries and provide practical solutions that deliver real value.</p>
                {/* Web Applications Container */}
                <h3>Web Products</h3>
                <p>Our web products are designed to help businesses create engaging, interactive, and user-friendly websites and web applications. Our offerings include:</p>
                <ul className="my-2">
                    <li><span className="font-bold">Website Templates</span> – Pre-built templates for creating professional, responsive websites quickly and easily.</li>
                    <li><span className="font-bold">Web Components</span> – Customizable components for adding advanced functionality to web applications.</li>
                    <li><span className="font-bold">Web Services</span> – APIs and services for integrating third-party tools and services into web applications.</li>
                </ul>
                {/* Mobile Applications Container */}
                <h3>Mobile Products</h3>
                <p>Our mobile products are designed to help businesses build high-quality, feature-rich mobile applications for iOS and Android devices. Our offerings include:</p>
                <ul className="my-2">
                    <li><span className="font-bold">Mobile Templates</span> – Pre-built templates for creating mobile apps with a modern, responsive design.</li>
                    <li><span className="font-bold">Mobile Components</span> – Customizable components for adding advanced functionality to mobile applications.</li>
                    <li><span className="font-bold">Mobile Services</span> – APIs and services for integrating mobile apps with backend systems and cloud services.</li>
                    <li><span className="font-bold">Fitness App Templates</span> – Customizable fitness applications that can be rebranded and modified to meet your clients’ needs.</li>
                    <li><span className="font-bold">Mobile Scheduling Templates</span> – A specialized app for booking and managing sports fields, ensuring a smooth scheduling process.</li>
                    <li><span className="font-bold">Mobile Restaurant & Café </span> – Empower restaurants and cafés with an intuitive mobile app for reservations, menu browsing, and customer engagement.</li>
                </ul>
                {/* Server-Side Applications Container */}
                <h3>Server-Side Products</h3>
                <p>Our server-side products are designed to help businesses build scalable, secure, and high-performance server-side applications. Our offerings include:</p>
                <ul className="my-2">
                    <li><span className="font-bold">Server Templates</span> – Pre-built templates for creating server-side applications with modern frameworks and technologies.</li>
                    <li><span className="font-bold">Server Components</span> – Customizable components for adding advanced functionality to server-side applications.</li>
                    <li><span className="font-bold">Server Services</span> – APIs and services for integrating server-side applications with databases, cloud services, and other systems.</li>
                </ul>
                <p className="py-2 lg:py-4">Stay tuned for updates on our latest product releases and announcements. We look forward to sharing our exciting new offerings with you soon!</p>
            </div>
        </section>
    );
}