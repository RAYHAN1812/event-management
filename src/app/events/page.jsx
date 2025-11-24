// src/app/events/page.jsx
import Link from 'next/link';
import { FaCalendarAlt, FaMapMarkerAlt, FaDollarSign, FaTicketAlt } from 'react-icons/fa';

// Mock Data (Replace with actual backend fetch)
const mockEvents = [
  { _id: '65f6a9e1d8a3b0f9c2d1e0f0', title: 'Tech Innovation Summit 2026', desc: 'A global gathering of innovators and industry leaders focusing on AI and sustainability.', date: '2026-11-05T10:00:00Z', price: 199.99, location: 'San Francisco', image: 'https://picsum.photos/seed/tech_event/600/350' },
  { _id: '65f6a9e1d8a3b0f9c2d1e0f1', title: 'Summer Music Festival', desc: 'Three days of non-stop music featuring top international artists at the coast.', date: '2026-07-20T14:00:00Z', price: 99.00, location: 'Miami Beach', image: 'https://picsum.photos/seed/music_event/600/350' },
  { _id: '65f6a9e1d8a3b0f9c2d1e0f2', title: 'Digital Marketing Workshop', desc: 'Learn the latest SEO and social media strategies from the industry best.', date: '2026-04-12T09:00:00Z', price: 0, location: 'Online/Zoom', image: 'https://picsum.photos/seed/marketing_event/600/350' },
  { _id: '65f6a9e1d8a3b0f9c2d1e0f3', title: 'Local Food & Wine Tasting', desc: 'Explore the best local produce and finest wines in the region.', date: '2026-09-18T19:00:00Z', price: 50.00, location: 'Downtown Winery', image: 'https://picsum.photos/seed/food_event/600/350' },
];

function formatDate(isoDate) {
  return new Date(isoDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

const EventCard = ({ event }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row transform hover:shadow-2xl transition duration-300">
    <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
      <img 
        src={event.image} 
        alt={event.title} 
        className="w-full h-full object-cover transition duration-300 hover:scale-105"
      />
    </div>
    <div className="md:w-2/3 p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h2>
        <p className="text-gray-600 mb-4 line-clamp-2">{event.desc}</p>
        <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-gray-700">
          <span className="flex items-center">
            <FaCalendarAlt className="mr-2 text-indigo-500" />
            {formatDate(event.date)}
          </span>
          <span className="flex items-center">
            <FaMapMarkerAlt className="mr-2 text-indigo-500" />
            {event.location}
          </span>
          <span className="flex items-center font-bold">
            <FaDollarSign className="mr-2 text-indigo-500" />
            {event.price > 0 ? `$${event.price.toFixed(2)}` : 'FREE'}
          </span>
        </div>
      </div>
      <div className="mt-4">
        <Link 
          href={`/events/${event._id}`} 
          className="inline-flex items-center bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
        >
          View Details <FaTicketAlt className="ml-2" />
        </Link>
      </div>
    </div>
  </div>
);

// This is a Server Component, no "use client" needed.
export default function EventsListPage() {
  // **TODO: Replace this mock data with an actual fetch call to your Express backend:**
  // async function fetchEvents() {
  //   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`, { cache: 'no-store' });
  //   if (!res.ok) throw new Error('Failed to fetch events');
  //   return res.json();
  // }
  // const events = await fetchEvents();
  const events = mockEvents; // Using mock data for now

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-5xl font-extrabold text-indigo-700 mb-2">Upcoming Events</h1>
      <p className="text-xl text-gray-600 mb-10">Browse the latest conferences, workshops, and gatherings.</p>
      
      <div className="space-y-8">
        {events.length > 0 ? (
          events.map((event) => (
            <EventCard key={event._id} event={event} />
          ))
        ) : (
          <div className="text-center p-12 bg-white rounded-xl shadow-md">
            <p className="text-2xl text-gray-500">No events found currently.</p>
            <Link href="/add-event" className="mt-4 inline-block text-indigo-600 font-semibold hover:text-indigo-800">
                Be the first to list an event!
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}