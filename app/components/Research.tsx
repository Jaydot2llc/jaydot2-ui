export default function Research() {
    return (
        <section id="research" className="container flex flex-col mx-auto p-6 lg:flex-row">
            <h2 className="text-6xl font-bold text-center lg:text-left lg:w-1/2">Research</h2>
            <div className="text-xl text-center text-gray-600 lg:w-1/2 lg:text-left">
                <h3 className="text-3xl font-bold">Large Language Models</h3>
                <p>Large Language Models (LLMs) are advanced artificial intelligence models designed to understand and generate human-like text. They are built using deep learning techniques, particularly transformer architectures.</p>
                
                <h4>Key Features</h4>
                <ul>
                    <li>Natural language understanding and generation</li>
                    <li>Context-aware responses</li>
                    <li>Pretrained on massive datasets</li>
                    <li>Capable of text summarization, translation, and more</li>
                </ul>
                
                <h4>Popular Models</h4>
                <ul>
                    <li>GPT (Generative Pre-trained Transformer)</li>
                    <li>BERT (Bidirectional Encoder Representations from Transformers)</li>
                    <li>T5 (Text-To-Text Transfer Transformer)</li>
                    <li>LLama (Large Language Model Meta AI)</li>
                </ul>
                
                <h4>Applications</h4>
                <p>LLMs are used in various fields including customer support, content generation, education, and software development.</p>

                <h3>Domain-Driven Design (DDD) Architecture</h3>
                <p><strong>Domain-Driven Design (DDD)</strong> is a software design approach that focuses on modeling software systems based on real-world business domains. It emphasizes collaboration between domain experts and developers to ensure the software aligns with business needs.</p>

                <h4>Key Principles of DDD</h4>
                <ul>
                    <li><strong>Domain-Centric Design:</strong> The software reflects real-world business processes.</li>
                    <li><strong>Ubiquitous Language:</strong> A common language used by both developers and domain experts.</li>
                    <li><strong>Bounded Contexts:</strong> Clearly defined boundaries that encapsulate domain logic.</li>
                    <li><strong>Entities and Value Objects:</strong> Entities have unique identities; value objects are immutable.</li>
                    <li><strong>Aggregates:</strong> Groups of related entities ensuring data integrity.</li>
                    <li><strong>Repositories:</strong> Interfaces for persisting and retrieving domain objects.</li>
                    <li><strong>Domain Events:</strong> Capture significant domain changes for event-driven architecture.</li>
                    <li><strong>Layered Architecture:</strong> Separation of domain logic, application services, and infrastructure.</li>
                </ul>

                <h4>Benefits of DDD</h4>
                <ul>
                    <li>Improves maintainability and scalability.</li>
                    <li>Enhances alignment between technical and business teams.</li>
                    <li>Reduces complexity by isolating concerns.</li>
                    <li>Supports microservices and event-driven architectures.</li>
                </ul>

                <p className="mt-4">DDD is particularly useful for complex business domains, helping to build scalable and maintainable software solutions.</p>
            </div>
        </section>
    )
}