export default function Footer() {
  return (
    <>
      <hr className="border border-gray-100" />
      <div
        className="flex items-center justify-between text-slate-300 py-6 md:space-x-10"
        id="contacts"
      >
        <span>
          <p className="flex justify-start font-thin">
            © Coded by Sera and hosted on GitHub. All rights reserved.
          </p>
        </span>
        <span className="flex justify-end text-3xl">
          <a
            href="https://github.com/Sera-iso/coffee-to-go"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github px-6"></i>
          </a>
          <a
            href="mailto:someone@yoursite.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-envelope px-6"></i>
          </a>
        </span>
      </div>
    </>
  );
}
