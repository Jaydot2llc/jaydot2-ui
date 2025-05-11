export default function Contact() {
    return (
        <section id="contact" className="container flex flex-col mx-auto p-6 lg:flex-row">
            <h2 className="text-6xl font-bold text-center lg:text-left lg:w-1/2">Contact</h2>
            <div className="lg:w-1/2 max-w-3xl mx-auto p-6 space-y-6 text-center md:text-left">
                <p>We’d love to hear from you! Whether you have questions about our services, need technical support, or want to explore a partnership, our team is here to help.</p>
                <span className="font-bold">Email:</span>  <a href="mailto:support@jaydot2.com" className="text-blue-600">support@jaydot2.com</a> 
                <p className="mt-4">Or simply fill out our contact form, and we’ll get back to you as soon as possible. Let’s build something amazing together!</p>
                <form action="#" method="POST" className="space-y-6">
                    <div className="flex flex-col space-y-4 md:space-x-4 md:space-y-0">
                        <label htmlFor="name" className="block text-sm/6 font-bold text-gray-900">
                            Name
                        </label>
                        <div className="mt-2">
                            <input type="text" name="name" placeholder="Name" className="p-2 border border-gray-300 rounded-md w-full" />
                        </div>
                        <label htmlFor="email" className="block text-sm/6 font-bold text-gray-900">
                            Email Address
                        </label>
                        <div className="mt-2">
                            <input type="email" name="email" placeholder="Email" className="p-2 border border-gray-300 rounded-md w-full" />
                        </div>
                        <label htmlFor="message" className="block text-sm/6 font-bold text-gray-900">
                            Message
                        </label>
                        <div className="mt-2">
                            <textarea name="message" placeholder="Message" className="p-2 border border-gray-300 rounded-md w-full"></textarea>
                        </div>
                    </div>
                    <button type="submit" className="jaydot2-button">Send</button>
                </form>
            </div>
        </section>
    )
}