import logoSrc from "../assets/newlogo.png";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 bg-opacity-50 fixed w-full z-20 top-0 start-0 border-b border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="url of ignite"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logoSrc} className="h-12" alt="Ignite Logo" />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="bg-white text-black border border-gray-300 mt-0 px-5 py-2 text-base font-medium rounded-full min-w-[100px] shadow-md hover:bg-gray-200 transition-all duration-300"
            onClick={() => window.open("https://forms.gle/bbFkMbajhYQTvH7q9", "_blank")}
          >
            Register Now
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href=""
                className="block py-2 px-3 text-white rounded-sm md:hover:text-blue-700 md:p-0 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 rounded-sm md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 rounded-sm md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 rounded-sm md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
              >
                Contact
              </a>
            </li>
            <li>
  <a
    href="https://drive.google.com/file/d/1cFpm3Cb66gpdoDzEI398XLRBjmokqoeH/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="block py-2 px-3 rounded-sm md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
  >
    Brochure
  </a>
</li>

          </ul>
        </div>
        <a
  href="https://www.instagram.com/ignite_iilm?igsh=cTZsb3ZsaXF0dHk5"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white hover:text-gray-400 transition-colors duration-300"
>
  <i className="fab fa-instagram text-3xl"></i> {/* FontAwesome Instagram icon */}
</a>

      </div>
    </nav>
  );
};

export default Navbar;
