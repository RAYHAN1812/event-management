// src/app/layout.jsx
import './globals.css';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import Providers from './Providers'; // client component wrapper

export const metadata = {
  title: 'EventPulse - Event Management App',
  description: 'Manage and promote your events easily.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased bg-gray-50">
        {/* Wrap everything that needs auth/session in Providers (client component) */}
        <Providers>
          <Navbar />
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
