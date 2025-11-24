// src/app/events/[id]/page.jsx
import Link from 'next/link';
import { FaCalendarAlt, FaMapMarkerAlt, FaDollarSign, FaTicketAlt, FaArrowLeft } from 'react-icons/fa';

// Mock function to simulate fetching a single event by ID
async function fetchEventDetails(id) {
    // **TODO: Replace this mock logic with a real API call:**
    // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events/${id}`, { cache: 'no-store' });
    // if (res.status === 404) return null;
    // if (!res.ok) throw new Error('Failed to fetch event details');
    // return res.json();

    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay

    const mockEvents = [
        { _id: '65f6a9e1d8a3b0f9c2d1e0f0', title: 'Tech Innovation Summit 2026', desc: 'A global gathering of innovators and industry leaders focusing on AI and sustainability.', fullDescription: 'Join over 5,000 attendees for keynote speeches from top CEOs, interactive workshops on machine learning, and networking events. The summit is designed to inspire and facilitate collaboration across various tech sectors, pushing the boundaries of what\'s possible in a digital world.', date: '2026-11-05T10:00:00Z', price: 199.99, location: 'San Francisco Convention Center', image: 'https://picsum.photos/seed/tech_detail/1200/600' },
        { _id: '65f6a9e1d8a3b0f9c2d1e0f1', title: 'Summer Music Festival', desc: 'Three days of non-stop music featuring top international artists at the coast.', fullDescription: 'Experience the ultimate summer getaway! This festival includes three main stages, a silent disco area, gourmet food trucks, and camping options. Lineup includes rock, pop, and electronic acts.', date: '2026-07-20T14:00:00Z', price: 99.00, location: 'Miami Beach Arena', image: 'https://picsum.photos/seed/music_detail/1200/600' },
    ];
    
    return mockEvents.find(e => e._id === id) || null;
}

function formatDetailDate(isoDate) {
  return new Date(isoDate).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

// Server Component receiving params from the URL
export default async function EventDetailPage({ params }) {
  const event = await fetchEventDetails(params.id);

  if (!event) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Event Not Found</h1>
        <p className="text-lg text-gray-600">The event with ID: **{params.id}** does not exist or has been deleted.</p>
        <Link href="/events" className="mt-6 text-indigo-600 hover:text-indigo-800 flex items-center">
          <FaArrowLeft className="mr-2" /> Back to All Events
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Event Image */}
        <div className="relative h-96">
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-8">
             <h1 className="text-5xl font-extrabold text-white leading-tight">{event.title}</h1>
          </div>
        </div>
        
        <div className="p-8 lg:flex lg:space-x-8">
          
          {/* Main Content */}
          <div className="lg:w-3/4">
            <h2 className="text-3xl font-bold text-indigo-700 mb-4 border-b pb-2">Details</h2>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed mb-6">{event.fullDescription}</p>

            <h3 className="text-2xl font-bold text-gray-800 mb-3 mt-6">About the Organizer</h3>
            <div className="p-4 border-l-4 border-indigo-500 bg-indigo-50 rounded-lg">
                <p className="font-semibold text-gray-800">Organizer ID: {event.creator || 'N/A'}</p>
                <p className="text-sm text-gray-600">Contact information and history will be displayed here in a later feature.</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4 mt-8 lg:mt-0 lg:border-l lg:pl-8 space-y-6">
            <div className="p-5 bg-gray-50 rounded-lg shadow-inner">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Info</h3>
                <p className="flex items-center text-lg mb-3">
                    <FaCalendarAlt className="mr-3 text-indigo-600 h-5 w-5" />
                    <span className="font-semibold">{formatDetailDate(event.date)}</span>
                </p>
                <p className="flex items-center text-lg mb-3">
                    <FaMapMarkerAlt className="mr-3 text-indigo-600 h-5 w-5" />
                    <span className="font-semibold">{event.location}</span>
                </p>
                <p className="flex items-center text-lg mb-3">
                    <FaDollarSign className="mr-3 text-indigo-600 h-5 w-5" />
                    <span className="font-extrabold text-green-700">{event.price > 0 ? `$${event.price.toFixed(2)}` : 'FREE'}</span>
                </p>
                
                <a href="#" className="mt-4 w-full flex items-center justify-center bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 transition transform hover:scale-[1.01]">
                    <FaTicketAlt className="mr-2" /> Get Tickets Now
                </a>
            </div>
          </div>
        </div>
        
        {/* Back Link */}
        <div className="p-8 border-t">
            <Link href="/events" className="text-indigo-600 hover:text-indigo-800 flex items-center font-medium">
                <FaArrowLeft className="mr-2" /> Back to All Events
            </Link>
        </div>
      </div>
    </div>
  );
}