import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageCircle,
  Calendar,
  Globe
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  budget: string;
  timeline: string;
}

const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const offices = [
    {
      city: "San Francisco",
      address: "123 Tech Street, CA 94105",
      phone: "+1 (555) 123-4567",
      email: "sf@SelicaTech.com",
      hours: "Mon-Fri: 9AM-6PM PST",
    },
    {
      city: "New York",
      address: "456 Innovation Ave, NY 10001",
      phone: "+1 (555) 987-6543",
      email: "ny@SelicaTech.com",
      hours: "Mon-Fri: 9AM-6PM EST",
    },
    {
      city: "London",
      address: "789 Digital Lane, EC1A 1BB",
      phone: "+44 20 1234 5678",
      email: "london@SelicaTech.com",
      hours: "Mon-Fri: 9AM-5PM GMT",
    },
  ];

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Message sent successfully! We'll get back to you soon.");
      reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - SelicaTech | Get in Touch</title>
        <meta
          name="description"
          content="Contact SelicaTech for your IT needs. Get free consultation, discuss your project, or visit our offices worldwide. We're here to help transform your business."
        />
        <link rel="canonical" href="https://SelicaTech.com/contact" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Ready to transform your business? Let's discuss your project and
              explore how our innovative solutions can help you achieve your
              goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section ref={ref} className="section-padding bg-white dark:bg-dark-900">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="card p-8"
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        {...register("name", { required: "Name is required" })}
                        type="text"
                        id="name"
                        className="input"
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Invalid email address",
                          },
                        })}
                        type="email"
                        id="email"
                        className="input"
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        id="phone"
                        className="input"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Company
                      </label>
                      <input
                        {...register("company")}
                        type="text"
                        id="company"
                        className="input"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Subject *
                    </label>
                    <select
                      {...register("subject", {
                        required: "Subject is required",
                      })}
                      id="subject"
                      className="select"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="project">New Project</option>
                      <option value="consultation">Free Consultation</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="careers">Careers</option>
                    </select>
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Project Budget
                      </label>
                      <select
                        {...register("budget")}
                        id="budget"
                        className="select"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-10k">Under $10,000</option>
                        <option value="10k-50k">$10,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-500k">$100,000 - $500,000</option>
                        <option value="over-500k">Over $500,000</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="timeline"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Timeline
                      </label>
                      <select
                        {...register("timeline")}
                        id="timeline"
                        className="select"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-3-months">1-3 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="6-12-months">6-12 months</option>
                        <option value="over-12-months">Over 12 months</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      {...register("message", {
                        required: "Message is required",
                      })}
                      id="message"
                      rows={6}
                      className="textarea"
                      placeholder="Tell us about your project, requirements, or any questions you have..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner w-5 h-5 mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="card p-6"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone
                      className="text-primary-600 mr-3 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        Call Us
                      </p>
                      <a
                        href="tel:+15551234567"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-600"
                      >
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Mail
                      className="text-primary-600 mr-3 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        Email Us
                      </p>
                      <a
                        href="mailto:hello@SelicaTech.com"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-600"
                      >
                        hello@SelicaTech.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <MessageCircle
                      className="text-primary-600 mr-3 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        Live Chat
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Available 24/7
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Calendar
                      className="text-primary-600 mr-3 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        Schedule Meeting
                      </p>
                      <button className="text-primary-600 hover:text-primary-700">
                        Book a call
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="card p-6"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Response Time
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      General Inquiries
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      24 hours
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Project Quotes
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      48 hours
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Technical Support
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      4 hours
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Emergency
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      1 hour
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Global Offices
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Visit us at any of our locations worldwide or connect with us
              remotely.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {office.city}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin
                      className="text-primary-600 mr-2 mt-0.5 flex-shrink-0"
                      size={16}
                    />
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      {office.address}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Phone
                      className="text-primary-600 mr-2 flex-shrink-0"
                      size={16}
                    />
                    <a
                      href={`tel:${office.phone}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 text-sm"
                    >
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail
                      className="text-primary-600 mr-2 flex-shrink-0"
                      size={16}
                    />
                    <a
                      href={`mailto:${office.email}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 text-sm"
                    >
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Clock
                      className="text-primary-600 mr-2 flex-shrink-0"
                      size={16}
                    />
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      {office.hours}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              Find Us on the Map
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Visit our headquarters or any of our global offices.
            </p>
          </motion.div>

          <div className="bg-gray-200 dark:bg-dark-700 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <Globe className="text-gray-400 mx-auto mb-4" size={48} />
              <p className="text-gray-500 dark:text-gray-400">
                Interactive map integration would be implemented here
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;