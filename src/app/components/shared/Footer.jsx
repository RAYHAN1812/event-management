import Link from 'next/link';
import { FaCalendarAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
          
          {/* Brand/Logo Section */}
          <div>
            <Link href="/" className="flex items-center text-2xl font-bold text-indigo-400 mb-4">
              <FaCalendarAlt className="mr-2" /> EventPulse
            </Link>
            <p className="text-sm text-gray-400">Your number one platform for discovering and managing events.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="../../events" className="hover:text-indigo-400 transition">Browse Events</Link></li>
              <li><Link href="/add-event" className="hover:text-indigo-400 transition">Add Event</Link></li>
              <li><Link href="/login" className="hover:text-indigo-400 transition">Login / Register</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/#features" className="hover:text-indigo-400 transition">Our Features</Link></li>
              <li><Link href="/#contact" className="hover:text-indigo-400 transition">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-indigo-400 transition">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/MDRAIHAN181299/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition">
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-400">raihangazi2014@gmail.com</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} EventPulse. All rights reserved by MD Raihan.
        </div>
      </div>
    </footer>
  );
}
