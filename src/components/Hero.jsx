export default function Hero() {
  return (
    <section
      className="flex flex-col sm:flex-row items-center sm:items-start gap-6 py-8 border border-gray-300 bg-white px-6"
    >
      <img
        src="/profile.png"
        alt="Profile"
        className="w-28 h-28 rounded-full object-cover shadow-lg border-4 border-blue-200"
      />
      <div>
        <h1 className="text-3xl font-bold">Lutfiandi Satriawan Nugraha</h1>
        <p className="text-gray-600 mt-1">
          SCADA & Automation Engineer • Flutter Developer • Backend Developer
        </p>
        <p className="mt-3 text-sm text-gray-700 max-w-xl">
          Engineering industrial automation systems and building cross-platform
          apps & APIs.
        </p>
        <p className="text-sm text-gray-700 max-w-xl">
          Based in West Java, Indonesia.
        </p>
        <div className="mt-4 flex gap-3">
          <a
            href="mailto:business.lutfiandisn@gmail.com?subject=Business%20Inquiry"
            className="px-8 py-2 bg-blue-600 text-white border rounded hover:bg-blue-800 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
