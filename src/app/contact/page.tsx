"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(''); // State for error messages

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // Reset error state on new submission

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send the form data
      });

      const result = await res.json();
      setLoading(false);

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Handle if the error is an object with multiple fields
        if (result.error && typeof result.error === 'object') {
          setError('An error occurred while sending the message.');
        } else {
          setError(result.error || 'Failed to send the message. Please try again.');
        }
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setLoading(false);
      setError('An unexpected error occurred. Please try again later.');
    }
  };

  return (

    <div>
      <div className='pt-8 max-w-fit ml-10 '>
        <Link href="/" passHref className='hover:scale-105 transition-transform duration-300'>
          <div className="flex items-center space-x-2">
            {/* SVG (Back Arrow Icon) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"
              />
            </svg>

            {/* Back Text */}
            <div className="text-white font-mono text-xl">
              /. back .\
            </div>
          </div>
        </Link>
      </div>
      <div className="container mx-auto p-8 animate-slideUp">

        <section className="text-center pt-8">
          <h1 className="text-5xl font-bold font-mono animate-slideUp flex items-center justify-center">
            {/* SVG Icon */}
            <svg className="w-[34px] h-[34px] mr-1 mt-1 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm3 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z" clip-rule="evenodd" />
            </svg>


            {/* Text */}
            contact me

            <svg className="w-[34px] h-[34px] ml-1 mt-1 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm3 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z" clip-rule="evenodd" />
            </svg>
          </h1>

        </section>
        <form onSubmit={handleSubmit} className="mt-2 space-y-4 bg-white bg-opacity-10 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className='font-mono space-y-6'>
            <div className=''>
              <label className="block text-lg">name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border p-2 w-full text-black"
                required
              />
            </div>
            <div>
              <label className="block text-lg">email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border p-2 w-full text-black"
                required
              />
            </div>
            <div>
              <label className="block text-lg">subject:</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="border p-2 w-full text-black"
                required
              />
            </div>
            <div>
              <label className="block text-lg">message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="border p-2 w-full h-32 text-black"
                required
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {success && <p className="text-green-500 mt-4">Your message has been sent successfully!</p>}
            {/* Handle object error */}
            {error && typeof error === 'string' && <p className="text-red-500 mt-4">{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}
