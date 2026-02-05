import { MapPin, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Helmet>
        <title>Contact | Drengr Clothing Co.</title>
        <meta name="description" content="Get in touch with Drengr Clothing Co. Contact us for support, inquiries, or collaborations." />
      </Helmet>

      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="font-display text-6xl md:text-8xl tracking-tight text-foreground animate-fade-up">
              GET IN
              <br />
              <span className="text-outline">TOUCH</span>
            </h1>
            <p className="mt-8 text-muted-foreground font-body text-lg max-w-xl animate-fade-up animation-delay-100">
              Have a question, feedback, or collaboration idea? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-up">
              <h2 className="font-display text-3xl tracking-wider text-foreground mb-8">
                SEND US A MESSAGE
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-body text-muted-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-secondary border border-border px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-body text-muted-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-secondary border border-border px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-body text-muted-foreground mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-secondary border border-border px-4 py-3 font-body text-foreground focus:outline-none focus:border-foreground transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select a topic</option>
                    <option value="order">Order Inquiry</option>
                    <option value="returns">Returns & Exchanges</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="press">Press & Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-body text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-secondary border border-border px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button type="submit" className="btn-primary flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="animate-fade-up animation-delay-200">
              <h2 className="font-display text-3xl tracking-wider text-foreground mb-8">
                CONTACT INFO
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary border border-border flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg tracking-wider text-foreground">Location</h3>
                    <p className="text-muted-foreground font-body mt-1">
                      DRENGR Clothing Co.<br />
                      Colombo 7, Sri Lanka
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary border border-border flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg tracking-wider text-foreground">Email</h3>
                    <p className="text-muted-foreground font-body mt-1">
                      drengrclothingco@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary border border-border flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg tracking-wider text-foreground">Phone</h3>
                    <p className="text-muted-foreground font-body mt-1">
                      (+94) 756 346 3356
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
             <div className="mt-12">
  <h3 className="font-display text-lg tracking-wider text-foreground mb-4">
    FIND US
  </h3>

  <div className="aspect-video border border-border overflow-hidden">
    <iframe
      src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE_HERE"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl tracking-tight text-foreground mb-12 text-center animate-fade-up">
            FREQUENTLY ASKED
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How long does shipping take?",
                answer: "Standard shipping takes 5-7 business days. Express shipping is available for 2-3 day delivery.",
              },
              {
                question: "What is your return policy?",
                answer: "We accept returns within 30 days of purchase. Items must be unworn with original tags attached.",
              },
              {
                question: "Do you ship internationally?",
                answer: "Yes, we ship to over 50 countries worldwide. International shipping times vary by location.",
              },
              {
                question: "How do I track my order?",
                answer: "Once your order ships, you'll receive a tracking number via email to monitor your delivery.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="border border-border p-6 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-display text-xl tracking-wider text-foreground">
                  {faq.question}
                </h3>
                <p className="mt-3 text-muted-foreground font-body leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
