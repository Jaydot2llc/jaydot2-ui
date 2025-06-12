export default function Services() {
    return (
        <section id="services" className="container flex flex-col mx-auto p-6 lg:flex-row">
            <h2 className="text-6xl font-bold text-center lg:text-left lg:w-1/2">Services</h2>
            <div className="text-xl text-center text-gray-600 lg:w-1/2 lg:text-left">
                <p className="mb-6">We provide expert technical and business consulting services in specialized areas to help organizations achieve their digital transformation goals. Our core services include mobile and web application development, content management system (CMS) customization, software-as-a-service (SaaS) implementation, and other advanced technical solutions.</p>
                {/* DevOps and Cloud Computing Container */}
                <h3>DevOps and Cloud Computing</h3>
                <p>We provide cloud-native application development and cloud management services using public and private cloud platforms. Our expertise includes:</p>
                <ul className="my-2">
                    <li><span className="font-bold">Public Cloud Solutions</span> – Development and deployment on <span className="font-bold">AWS, Microsoft Azure, and Google Cloud Platform</span>.</li>
                    <li><span className="font-bold">Private Cloud Solutions</span> – Experience with platforms like <span className="font-bold">Cloud Foundry</span> and custom private cloud implementations.</li>
                    <li><span className="font-bold">Salesforce & Force.com Development</span> – Building cloud applications leveraging the Salesforce ecosystem.</li>
                    <li><span className="font-bold">Cloud Infrastructure & DevOps</span> – Custom cloud management, automation, and CI/CD pipeline implementations.</li>
                </ul>
                {/* Mobile Development Container */}
                <h3>Mobile Development</h3>
                <p>Our mobile development services cover the full range of platforms and devices, including:</p>
                <ul className="my-2">
                    <li><span className="font-bold">iOS Development</span> – Native and cross-platform development for iPhone and iPad.</li>
                    <li><span className="font-bold">Android Development</span> – Native and cross-platform development for Android phones and tablets.</li>
                    <li><span className="font-bold">Cross-Platform Development</span> – Development using frameworks like <span className="font-bold">React Native</span> to build apps for both iOS and Android.</li>
                </ul>
                {/* Web Development Container */}
                <h3>Web Development</h3>
                <p>
                    We offer a full range of web development services, including:
                </p>
                <ul className="my-2">
                    <li><span className="font-bold">Frontend Development</span> – Building responsive, interactive, and accessible web interfaces using modern technologies like <span className="font-bold">React</span> and <span className="font-bold">Angular</span>.</li>
                    <li><span className="font-bold">Backend Development</span> – Developing scalable, secure, and high-performance server-side applications using frameworks like <span className="font-bold">Node.js</span> and <span className="font-bold">Spring Boot</span>.</li>
                    <li><span className="font-bold">Full-Stack Development</span> – Combining frontend and backend technologies to create end-to-end web solutions.</li>
                </ul>
                {/* Content Management Container */}
                <h3>Content Management</h3>
                <p>We offer tailored content management solutions designed to meet the unique needs of businesses and organizations.</p>
                <ul className="my-2">
                    <li><span className="font-bold">Small Businesses & Nonprofits</span> – For clients with straightforward requirements, we provide PHP-based CMS solutions using platforms like <span className="font-bold">Drupal</span> and <span className="font-bold">WordPress</span> to ensure ease of use and flexibility.</li>
                    <li><span className="font-bold">Enterprises & Large Organizations</span>For complex transaction management, high security, and enterprise-grade functionality, we implement Java-based CMS solutions using platforms like <span className="font-bold">Magnolia</span> and <span className="font-bold">OpenCMS</span>.</li>
                </ul>
                {/* Shopify Consulting Services */}
                <h3>Shopify Customization and Support</h3>
                <p>We provide online e-commerce customization services on the Shopify platform.  Whether you're starting your first store or scaling a multi-channel empire, our Shopify consulting services are tailored to unlock your brand’s full potential. We help you turn clicks into customers—and customers into loyal fans.  Our offerings include the following:</p>
                <ul>
                    <li><span className="font-bold">Shopify Store Setup & Customization</span> – From theme selection to pixel-perfect customizations, we make your Shopify store look and feel like you.</li>
                    <li><span className="font-bold">Shopify Development</span> – Need advanced features, custom apps, or third-party integrations? We've got the code and the creativity to bring it to life.</li>
                    <li><span className="font-bold">Migration to Shopify</span> – Say goodbye to clunky platforms. We handle seamless migrations from WooCommerce, Magento, BigCommerce, and more.</li>
                    <li><span className="font-bold">Conversion Optimization & Strategy</span> – We analyze, test, and fine-tune every element of your store—from checkout flow to product pages—to boost engagement and sales.</li>
                    <li><span className="font-bold">Shopify Analytics & Growth Consulting</span> – Make data-driven decisions. We’ll set up the right analytics tools and help you interpret what’s working—and what’s not.</li>
                </ul>
                {/* Enterprise Application Development Container */}
                <h3>Enterprise Application Development</h3>
                <p>
                    Our enterprise application development services include:
                </p>
                <ul className="my-2">
                    <li><span className="font-bold">Custom Software Development</span> – Building tailored software solutions to meet specific business needs.</li>
                    <li><span className="font-bold">Legacy System Modernization</span> – Updating and migrating legacy applications to modern platforms.</li>
                    <li><span className="font-bold">ERP & CRM Integration</span> – Integrating enterprise resource planning (ERP) and customer relationship management (CRM) systems to streamline business processes.</li>
                </ul>
            </div>
        </section>
    );
}