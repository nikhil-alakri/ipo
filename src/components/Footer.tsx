const Footer = () => (
  <footer className="bg-stone-50">
    <div className="container mx-auto px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div>
          <div className="flex justify-center text-slate-600 sm:justify-start">
            IPO List
          </div>

          <p className="max-w-md mx-auto mt-6 leading-relaxed text-center text-zinc-600 sm:max-w-xs sm:mx-0 sm:text-left">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            consequuntur amet culpa cum itaque neque.
          </p>

          <ul className="flex justify-center gap-6 mt-8 md:gap-8 sm:justify-start">
            <li>
              <a
                href="/"
                rel="noopener noreferrer"
                target="_blank"
                className="text-slate-500 transition hover:text-slate-500/75"
              >
                <span className="sr-only">Facebook</span>
                FB
              </a>
            </li>

            <li>
              <a
                href="/"
                rel="noopener noreferrer"
                target="_blank"
                className="text-slate-500 transition hover:text-slate-500/75"
              >
                <span className="sr-only">Instagram</span>
                Insta
              </a>
            </li>

            <li>
              <a
                href="/"
                rel="noopener noreferrer"
                target="_blank"
                className="text-slate-500 transition hover:text-slate-500/75"
              >
                <span className="sr-only">Twitter</span>
                Twitter
              </a>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-4">
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-zinc-900">About Us</p>

            <nav className="mt-8">
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    className="text-zinc-900 transition hover:text-zinc-900/75"
                    href="/"
                  >
                    Company History
                  </a>
                </li>

                <li>
                  <a
                    className="text-zinc-900 transition hover:text-zinc-900/75"
                    href="/"
                  >
                    Meet the Team
                  </a>
                </li>

                <li>
                  <a
                    className="text-zinc-900 transition hover:text-zinc-900/75"
                    href="/"
                  >
                    Employee Handbook
                  </a>
                </li>

                <li>
                  <a
                    className="text-zinc-900 transition hover:text-zinc-900/75"
                    href="/"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-zinc-900">Our Services</p>

            <nav className="mt-8">
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    className="text-zinc-900 transition hover:text-zinc-900/75"
                    href="/"
                  >
                    Web Development
                  </a>
                </li>

                <li>
                  <a
                    className="text-zinc-900 transition hover:text-zinc-900/75"
                    href="/"
                  >
                    Web Design
                  </a>
                </li>

                <li>
                  <a
                    className="text-zinc-900 transition hover:text-zinc-900/75"
                    href="/"
                  >
                    Marketing
                  </a>
                </li>

                <li>
                  <a
                    className="text-zinc-900 transition hover:text-zinc-900/75"
                    href="/"
                  >
                    Google Ads
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-zinc-900">Helpful Links</p>

            <nav className="mt-8">
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    className="text-zinc-900 transition hover:text-zinc-900/75"
                    href="/"
                  >
                    FAQs
                  </a>
                </li>

                <li>
                  <a
                    className="text-zinc-900 transition hover:text-zinc-900/75"
                    href="/"
                  >
                    Support
                  </a>
                </li>

                <li>
                  <a
                    className="flex group justify-center sm:justify-start gap-1.5"
                    href="/"
                  >
                    <span className="text-zinc-900 transition group-hover:text-zinc-900/75">
                      Live Chat
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-zinc-900">Contact Us</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a
                  className="flex items-center justify-center sm:justify-start gap-1.5 group"
                  href="mailto:test@test.com"
                >
                  Email:
                  <span className="text-zinc-900 transition group-hover:text-zinc-900/75">
                    test@test.com
                  </span>
                </a>
              </li>

              <li>
                <a
                  className="flex items-center justify-center sm:justify-start gap-1.5 group"
                  href="tel:+1234567890"
                >
                  Call:
                  <span className="text-zinc-900 transition group-hover:text-zinc-900/75">
                    1234567890
                  </span>
                </a>
              </li>

              <li className="flex items-start justify-center gap-1.5 sm:justify-start">
                <address className="-mt-0.5 not-italic text-zinc-900">
                  India
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-6 mt-12 border-t border-gray-800">
        <div className="text-center sm:flex sm:justify-between sm:text-left">
          <p className="text-sm text-gray-400">
            <span className="block sm:inline">All rights reserved.</span>

            <a
              className="inline-block text-slate-500 underline transition hover:text-slate-500/75"
              href="/"
            >
              Terms & Conditions
            </a>

            <span>&middot;</span>

            <a
              className="inline-block text-slate-500 underline transition hover:text-slate-500/75"
              href="/"
            >
              Privacy Policy
            </a>
          </p>

          <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
            &copy; 2022 Company Name
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
