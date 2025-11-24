"use client";
import Link from 'next/link';
import { FaTicketAlt, FaShieldAlt, FaChartLine, FaUsers, FaCalendarAlt } from 'react-icons/fa';

// Mock Data for Landing Page (IDs corrected to strings)
const mockEvents = [
  { _id: '65f6a9e1d8a3b0f9c2d1e0f0', title: 'Tech Innovation Summit 2026', desc: 'A global gathering of innovators and industry leaders in San Francisco.', price: '$199', image: 'https://picsum.photos/seed/tech/400/250' },
  { _id: '65f6a9e1d8a3b0f9c2d1e0f1', title: 'Summer Music Festival', desc: 'Three days of non-stop music featuring top international artists.', price: '$99', image: 'https://picsum.photos/seed/music/400/250' },
  { _id: '65f6a9e1d8a3b0f9c2d1e0f2', title: 'Digital Marketing Workshop', desc: 'Learn the latest SEO and social media strategies from the best.', price: 'Free', image: 'https://picsum.photos/seed/marketing/400/250' },
  { _id: '65f6a9e1d8a3b0f9c2d1e0f3', title: 'Local Food & Wine Tasting', desc: 'Explore the best local produce and finest wines in the region.', price: '$50', image: 'https://picsum.photos/seed/food/400/250' },
  { _id: '65f6a9e1d8a3b0f9c2d1e0f4', title: 'Startup Pitch Competition', desc: 'Watch new ventures compete for seed funding and mentorship.', price: '$20', image: 'https://picsum.photos/seed/startup/400/250' },
  { _id: '65f6a9e1d8a3b0f9c2d1e0f5', title: 'Community Volunteer Day', desc: 'Join us to clean up the local park and help the neighborhood.', price: 'Free', image: 'https://picsum.photos/seed/community/400/250' },
];

const features = [
  { icon: FaShieldAlt, title: 'Secure Ticketing', desc: 'Reliable payment processing and ticket verification for peace of mind.' },
  { icon: FaChartLine, title: 'Event Analytics', desc: 'Track attendance, sales, and user interest with detailed reports.' },
  { icon: FaUsers, title: 'Community Focus', desc: 'Connect with organizers and attendees before and after events.' },
  { icon: FaCalendarAlt, title: 'Global Coverage', desc: 'Find and list events happening all over the world, seamlessly.' },
];

const EventCard = ({ event }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition duration-300 group">
    <div className="h-48 overflow-hidden">
      <img src={event.image || 'https://picsum.photos/seed/default/400/250'} alt={event.title} className="w-full h-full object-cover group-hover:opacity-90 transition duration-300" />
    </div>
    <div className="p-5">
      <h3 className="text-xl font-bold text-gray-900 truncate">{event.title}</h3>
      <p className="text-sm text-gray-500 line-clamp-2 mt-1 h-10">{event.desc}</p>
      <div className="flex justify-between items-center mt-3 pt-3 border-t">
        <span className="text-lg font-extrabold text-indigo-600">{event.price}</span>
        <Link href={`/events/${event._id}`} className="text-sm font-semibold text-white bg-indigo-600 px-3 py-1 rounded-full hover:bg-indigo-700 transition">
          Details
        </Link>
      </div>
    </div>
  </div>
);

const FeatureCard = ({ feature }) => (
  <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition duration-300 text-center">
    <feature.icon className="h-10 w-10 text-indigo-600 mx-auto mb-4" />
    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
    <p className="text-gray-600">{feature.desc}</p>
  </div>
);

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero Section */}
      <section className="bg-indigo-50 py-24 md:py-36 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Discover & Create <span className="text-indigo-600">Unforgettable Events</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Find the best conferences, concerts, and workshops near you. Simplified event management for everyone.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <Link href="/events" className="px-8 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition shadow-lg transform hover:scale-105">
              Browse All Events
            </Link>
            <Link href="/add-event" className="px-8 py-3 text-lg font-semibold text-indigo-600 bg-white border-2 border-indigo-600 rounded-full hover:bg-indigo-50 transition transform hover:scale-105">
              List Your Event
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Featured Events Section (Relevant Section 1) */}
      <section className="py-16 md:py-24" id="featured">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Featured Events</h2>
          <p className="text-center text-lg text-gray-600 mb-12">Don't miss out on what's trending and popular right now.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CORRECTED: Using event._id for key and passing the event object */}
            {mockEvents.slice(0, 3).map(event => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/events" className="text-lg font-semibold text-indigo-600 hover:text-indigo-700 transition flex items-center justify-center">
              View All Events <FaTicketAlt className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Features Section (Relevant Section 2) */}
      <section className="bg-gray-100 py-16 md:py-24" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Why Choose EventPulse?</h2>
          <p className="text-center text-lg text-gray-600 mb-12">The platform built for seamless event discovery and management.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>
      
      {/* 4. Banner/CTA Section (Relevant Section 3) */}
      <section className="py-20 bg-indigo-600" id="cta">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to host your own event?</h2>
          <p className="text-xl text-indigo-200 mb-8">Reach thousands of potential attendees today. It takes less than 5 minutes to list.</p>
          <Link href="/add-event" className="px-10 py-4 text-xl font-bold text-indigo-600 bg-white rounded-full hover:bg-gray-100 transition shadow-xl transform hover:scale-105">
            Start Organizing Now
          </Link>
        </div>
      </section>
      
      {/* 5. Testimonials Section (Relevant Section 4 - Simple Placeholder) */}
      <section className="py-16 md:py-24" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <blockquote className="p-6 bg-white shadow-xl rounded-xl border-l-4 border-indigo-500">
              <p className="italic text-gray-700">"EventPulse made finding local tech meetups so easy. The UI is clean and fast!"</p>
              <footer className="mt-4 font-semibold text-indigo-600">— Sarah K., Developer</footer>
            </blockquote>
            <blockquote className="p-6 bg-white shadow-xl rounded-xl border-l-4 border-indigo-500">
              <p className="italic text-gray-700">"Listing my conference took minutes. The built-in analytics are a game changer."</p>
              <footer className="mt-4 font-semibold text-indigo-600">— David L., Organizer</footer>
            </blockquote>
            <blockquote className="p-6 bg-white shadow-xl rounded-xl border-l-4 border-indigo-500">
              <p className="italic text-gray-700">"Highly recommend for seamless registration and discovery of community events."</p>
              <footer className="mt-4 font-semibold text-indigo-600">— Mike B., Attendee</footer>
            </blockquote>
          </div>
        </div>
      </section>
      
      {/* 6. Contact Section (Simple Footer Contact Link Placeholder) */}
      <section id="contact" className="py-12 bg-gray-50 border-t">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Need Assistance?</h2>
          <p className="mt-3 text-lg text-gray-600">Reach out to our support team for any questions or partnerships.</p>
          <Link href="mailto:support@eventpulse.com" className="mt-5 inline-block px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition">
            Contact Support
          </Link>
        </div>
      </section>
    </div>
  );
}