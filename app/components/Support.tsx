import { Mail } from "lucide-react";

export default function Support() {
    return (
        <section id="support" className="container flex flex-col mx-auto p-6 lg:flex-row">
            <h2 className="text-6xl font-bold text-center lg:text-left lg:w-1/2">Support</h2>
            <div className="lg:w-1/2 max-w-3xl mx-auto p-6 space-y-6">
                <h1 className="text-3xl font-bold text-center">Support Services</h1>
                
                <div>
                    <p className="text-lg">
                        We provide comprehensive online support for our products and services, ensuring that our customers receive the assistance they need.
                    </p>
                    <p className="text-lg">
                        For clients using our custom software solutions, we offer tailored support contracts designed to meet specific business needs.
                    </p>
                    <p className="text-lg font-semibold">Please contact us to learn more about our support options.</p>
                </div>
                
                <div>
                    <h3>Mobile App Support</h3>
                    <p className="text-lg">
                        We offer online support for users of our Jaydot2 mobile app and our new subsidiary, YouFocused. Our support team is available to assist with any inquiries or technical issues you may encounter.
                    </p>
                </div>
                
                <div>
                    <h3>Client Support</h3>
                    <p className="text-lg">
                        Our clients benefit from custom support solutions tailored to their unique requirements. Additionally, we provide online support for all our standard products and services to ensure seamless user experiences.
                    </p>
                </div>
                
                <div className="text-center">
                    <a href="mailto:info@jaydot2.com">
                        <button className="jaydot2-button">
                            <Mail className="mr-2" /> 
                            Contact Us
                        </button>
                    </a>
                </div>
                </div>
        </section>
    )
}