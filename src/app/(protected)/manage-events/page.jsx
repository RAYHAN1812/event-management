"use client";
import { useState, useEffect } from "react";
import { FaTrash, FaCalendarCheck } from "react-icons/fa";
import { useSession } from "next-auth/react";

export default function ManageEventsPage() {
  const { data: session, status } = useSession();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`);
      const data = await res.json();
      const userEvents = data.filter(event => event.creator === session?.user?.id);
      setEvents(userEvents);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status === "authenticated") fetchEvents();
  }, [status]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this event?")) return;

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events/${id}`, {
        method: "DELETE",
        headers: { "x-user-id": session?.user?.id }
      });
      if (!res.ok) throw new Error("Failed to delete event");
      setEvents(prev => prev.filter(event => event._id !== id));
    } catch (err) {
      console.error(err);
      alert("Error deleting event");
    }
  };

  if (status === "loading" || loading) return <p className="text-center mt-10 text-gray-700">Loading events...</p>;
  if (status === "unauthenticated") return <p className="text-center mt-10 text-gray-700">Please log in to view your events.</p>;

  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-6 flex items-center">
        <FaCalendarCheck className="mr-3" /> Manage My Events
      </h1>

      <div className="overflow-x-auto bg-white shadow-xl rounded-2xl">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-indigo-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Title</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Price</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {events.map(event => (
              <tr key={event._id} className="hover:bg-indigo-50 transition-colors duration-200">
                <td className="px-6 py-4 text-gray-900">{event.title}</td>
                <td className="px-6 py-4 text-gray-900">{new Date(event.date).toLocaleDateString()}</td>
                <td className="px-6 py-4 text-gray-900">{event.price === 0 ? 'Free' : `$${event.price}`}</td>
                <td className="px-6 py-4 text-gray-900">{event.status || 'Active'}</td>
                <td className="px-6 py-4">
                  <button 
                    onClick={() => handleDelete(event._id)} 
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg transition-colors duration-200 flex items-center gap-1"
                  >
                    <FaTrash /> Delete
                  </button>
                </td>
              </tr>
            ))}
            {events.length === 0 && (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-500">No events found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
