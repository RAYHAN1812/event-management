import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      title: "Create Events",
      description: "Easily create and manage your events with our intuitive tools.",
      icon: "https://images.unsplash.com/photo-1564866657313-df2958ee78b3?auto=format&fit=crop&w=64&q=80",
    },
    {
      title: "Explore Events",
      description: "Discover upcoming events in your area or online.",
      icon: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=64&q=80",
    },
    {
      title: "Connect People",
      description: "Engage with participants and build your community.",
      icon: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=64&q=80",
    },
    {
      title: "Analytics",
      description: "Track event performance and gain valuable insights.",
      icon: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=64&q=80",
    },
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503424886302-0f9b3ffb0b3d?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center lg:text-left max-w-3xl px-6">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 animate-fadeInDown">
            Welcome to EventPulse
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 animate-fadeInUp">
            Manage your events efficiently, explore exciting upcoming events, and
            stay updated with everything happening around you.
          </p>
          <Link
            href="/events"
            className="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 animate-fadeInUp"
          >
            Explore Events
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg hover:shadow-2xl p-8 text-center transition transform hover:-translate-y-2 hover:scale-105"
          >
            <div className="mb-6 flex justify-center">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={64}
                height={64}
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 text-center bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-lg mx-6 md:mx-12 lg:mx-24 my-12 text-white shadow-lg">
        <h2 className="text-3xl font-bold mb-4 animate-fadeInDown">
          Ready to get started?
        </h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto animate-fadeInUp">
          Join thousands of users managing their events seamlessly with EventPulse.
        </p>
        <Link
          href="/register"
          className="inline-block px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 animate-fadeInUp"
        >
          Sign Up Now
        </Link>
      </section>
    </div>
  );
}
