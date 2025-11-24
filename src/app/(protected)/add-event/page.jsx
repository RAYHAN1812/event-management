"use client";
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { FaPlusCircle } from 'react-icons/fa';

export default function AddEventPage() {
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
    title: '', shortDescription: '', fullDescription: '',
    date: '', price: 0, imageUrl: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-id': session?.user?.id || '',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.msg || 'Failed to add event');
      }

      const addedEvent = await response.json();
      console.log('Added Event:', addedEvent);

      alert(`Success! Event "${addedEvent.title}" added!`);

      setFormData({
        title: '', shortDescription: '', fullDescription: '',
        date: '', price: 0, imageUrl: '',
      });
    } catch (error) {
      alert(`Error adding event: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-2 flex items-center">
        <FaPlusCircle className="mr-3"/> Create New Event
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Welcome back, <strong>{session?.user?.name || 'Organizer'}</strong>! List your event details below.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-white rounded-2xl shadow-2xl border border-gray-100">
        {/* Title and Short Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Event Title</label>
            <input 
              type="text" 
              name="title" 
              value={formData.title} 
              onChange={handleChange} 
              required 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-900" 
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Short Description (Max 100 chars)</label>
            <input 
              type="text" 
              name="shortDescription" 
              value={formData.shortDescription} 
              onChange={handleChange} 
              required 
              maxLength="100"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-900" 
            />
          </div>
        </div>

        {/* Full Description */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Full Event Description</label>
          <textarea 
            name="fullDescription" 
            value={formData.fullDescription} 
            onChange={handleChange} 
            required 
            rows="6" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
          ></textarea>
        </div>

        {/* Date, Price, Image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Event Date/Time</label>
            <input 
              type="datetime-local" 
              name="date" 
              value={formData.date} 
              onChange={handleChange} 
              required 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-900" 
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Price ($)</label>
            <input 
              type="number" 
              name="price" 
              value={formData.price} 
              onChange={handleChange} 
              required 
              min="0"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-900" 
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Image URL (Optional)</label>
            <input 
              type="url" 
              name="imageUrl" 
              value={formData.imageUrl} 
              onChange={handleChange} 
              placeholder="https://..." 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-900" 
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-4 text-xl font-semibold rounded-lg transition duration-200 shadow-md flex items-center justify-center ${loading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
        >
          {loading ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
              Adding Event...
            </div>
          ) : (
            'Submit New Event'
          )}
        </button>
      </form>
    </div>
  );
}
