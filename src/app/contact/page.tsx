"use client";
import { useState } from 'react';

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
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg">Name</label>
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
          <label className="block text-lg">Email</label>
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
          <label className="block text-lg">Subject</label>
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
          <label className="block text-lg">Message</label>
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
      </form>
    </div>
  );
}
