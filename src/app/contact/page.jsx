import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-6">Contact Us</h1>

      <p className="text-gray-700 mb-6">
        We’d love to hear from you! Whether you have questions, feedback, or partnership inquiries, reach out to us using any of the methods below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Email */}
        <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md border border-gray-100">
          <FaEnvelope className="text-indigo-600 text-2xl" />
          <div>
            <h3 className="font-semibold text-gray-800">Email</h3>
            <p className="text-gray-600">raihangazi2014@gmail.com</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md border border-gray-100">
          <FaPhone className="text-indigo-600 text-2xl" />
          <div>
            <h3 className="font-semibold text-gray-800">Phone</h3>
            <p className="text-gray-600">+880 16XXXXXXX</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md border border-gray-100">
          <FaMapMarkerAlt className="text-indigo-600 text-2xl" />
          <div>
            <h3 className="font-semibold text-gray-800">Location</h3>
            <p className="text-gray-600">Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col p-4 bg-white rounded-xl shadow-md border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/MDRAIHAN181299/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition">Facebook</a>
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition">LinkedIn</a>
            <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition">X / Twitter</a>
          </div>
        </div>
      </div>

      <p className="text-gray-500 text-sm mt-8">
        We will respond to your inquiries as quickly as possible.
      </p>
    </div>
  );
}
