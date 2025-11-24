export default function AboutPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-6">About EventPulse</h1>
      
      <p className="text-gray-700 mb-4">
        EventPulse is your ultimate platform for discovering, managing, and promoting events effortlessly. 
        Whether you're an event organizer or an attendee, our app makes it simple to create, track, and attend events of all types.
      </p>

      <p className="text-gray-700 mb-4">
        With EventPulse, you can:
      </p>

      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
        <li>Create and manage your own events with ease.</li>
        <li>Browse and discover upcoming events that match your interests.</li>
        <li>Connect with other attendees and expand your network.</li>
        <li>Promote your events to reach a wider audience.</li>
        <li>Access event details, schedules, and ticketing information all in one place.</li>
      </ul>

      <p className="text-gray-700 mb-4">
        Our mission is to empower event organizers and make attending events seamless and enjoyable for everyone. 
        Whether it’s a workshop, conference, meetup, or concert, EventPulse ensures you never miss out on what matters most.
      </p>

      <p className="text-gray-700 font-semibold">
        Join EventPulse today and take your events to the next level!
      </p>
    </div>
  );
}
