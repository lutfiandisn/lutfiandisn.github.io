export default function Contact() {
  return (
    <section
      className="mt-4 border border-gray-300 bg-white p-6"
    >
      <h3 className="text-xl font-semibold">Contact</h3>
      <p className="mt-2 text-gray-700">
        Email:{" "}
        <a
          className="text-blue-600"
          href="mailto:business.lutfiandisn@gmail.com?subject=Business%20Inquiry"
        >
          business.lutfiandisn@gmail.com
        </a>
      </p>
      <p className="mt-2 text-gray-700">
        GitHub:{" "}
        <a
          className="text-blue-600"
          href="https://github.com/lutfiandisn/"
        >
          github.com/lutfiandisn/
        </a>
      </p>
      <p className="mt-2 text-gray-700">
        LinkedIn:{" "}
        <a
          className="text-blue-600"
          href="https://www.linkedin.com/in/lutfiandisn/"
        >
          linkedin.com/in/lutfiandisn
        </a>
      </p>
    </section>
  );
}
