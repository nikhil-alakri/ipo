import Image from "next/image";
import React from "react";

const Header = () => (
  <header className="bg-stone-50">
    <div className="container mx-auto px-4 pt-6 pb-6  sm:px-6 lg:px-8 lg:pt-6">
      <nav className="flex justify-between">
        <div className="w-[130px] md:w-[200px] flex items-center">
          <Image
            src="https://cdn-icons-png.freepik.com/512/600/600788.png"
            alt="LOGO"
            width={90}
            height={90}
          />
        </div>
        <div className="flex items-center gap-3 max-sm:hidden">
          <a
            href="#"
            className="text-sm text-zinc-900 transition hover:text-zinc-900/75"
          >
            Home
          </a>
          <a
            href="#"
            className="text-sm text-zinc-900 transition hover:text-zinc-900/75"
          >
            About
          </a>
          <a
            href="#"
            className="text-sm text-zinc-900 transition hover:text-zinc-900/75"
          >
            Services
          </a>
          <a
            href="#"
            className="text-sm text-zinc-900 transition hover:text-zinc-900/75"
          >
            Contact
          </a>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
