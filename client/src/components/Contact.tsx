import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace with your actual form submission logic
      // This is just an example using fetch
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">Contact Us</h2>
          <p className="text-gray-100 max-w-xl mx-auto">
            Have questions about our college fest? Reach out to us using the information below or fill out the form, and we'll get back to you soon!
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12">
  <div className="w-full md:w-1/3 rounded-lg shadow-md p-6">
    
    <div className="mb-8">
      {/* First contact with name */}
      <div className="mb-4">
        <p className="text-gray-100 font-medium">Tushar Saxena</p>
        <div className="flex items-center mt-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <p className="text-gray-100">(+91) 63500 42092</p>
        </div>
      </div>
      
      {/* Second contact with name */}
      <div>
        <p className="text-gray-100 font-medium">Aviral Srivastava</p>
        <div className="flex items-center mt-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <p className="text-gray-100">(+91) 79053 02110</p>
        </div>
      </div>
    </div>
    
    <div className="mb-8">
      <h4 className="text-lg font-medium text-gray-100 mb-2">Email</h4>
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <p className="text-gray-100">ignite.techfest@iilm.edu</p>
      </div>
    </div>
    
    <div className="mb-4">
      <h4 className="text-lg font-medium text-gray-100 mb-2">Location</h4>
      <div className="flex items-start">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <p className="text-gray-100">
          IILM University,<br />
          Plot 16, Knowledge Park II<br />
          Greater Noida, 201310
            
                </p>
              </div>
            </div>
            
            {/* Map image below location */}
            <div className="mt-4 rounded-lg overflow-hidden shadow-md h-40 w-full max-w-xs">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7017.715220187036!2d77.50867849230023!3d28.474264514196615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc0f385b3748d%3A0xe1f71f916d2d3296!2sIILM%20University%2C%20Greater%20Noida!5e0!3m2!1sen!2sin!4v1708150260932!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen={false}
    loading="lazy"
  ></iframe>
</div>


          </div>
          
          <div className="w-full sm:w-6/4 md:w-1/2  rounded-lg shadow-md p-6 mx-auto">
  <h3 className="text-2xl font-semibold text-indigo-500 mb-6">Send a Message</h3>
  
  <form onSubmit={handleSubmit}>
    <div className="mb-4">
      <label htmlFor="name" className="block text-gray-100 font-medium mb-2">Your Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        required
      />
    </div>
    
    <div className="mb-4">
      <label htmlFor="email" className="block text-gray-100 font-medium mb-2">Email Address</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        required
      />
    </div>
    
    <div className="mb-4">
      <label htmlFor="phone" className="block text-gray-100 font-medium mb-2">Phone Number</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
    
    <div className="mb-6">
      <label htmlFor="message" className="block text-gray-100 font-medium mb-2">Your Message</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows={5}
        className="w-full px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
        required
      ></textarea>
    </div>
    
    <button
      type="submit"
      disabled={isSubmitting}
      className={`w-full py-3 px-6 text-white font-medium rounded-md shadow-md transition duration-300 ${
        isSubmitting ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50'
      }`}
    >
      {isSubmitting ? 'Sending...' : 'Send Message'}
    </button>
    
    {submitStatus === 'success' && (
      <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
        Thank you! Your message has been sent successfully. We'll get back to you soon.
      </div>
    )}
    
    {submitStatus === 'error' && (
      <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
        There was an error sending your message. Please try again later or contact us directly.
      </div>
    )}
  </form>
</div>

        </div>
      </div>
    </section>
  );
};

export default Contact;