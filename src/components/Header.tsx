import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => (
  <header className="bg-stone-50" id="home">
    <div className="container mx-auto px-4 pt-6 pb-6  sm:px-6 lg:px-8 lg:pt-6">
      <nav className="flex justify-between">
        <Link className="w-[130px] md:w-[200px] flex items-center" href="/">
          <Image
            src="https://cdn-icons-png.freepik.com/512/600/600788.png"
            alt="LOGO"
            width={70}
            height={70}
            loading="eager"
          />
        </Link>
        <div className="flex items-center gap-3 max-sm:hidden">
          <Link
            href="#upcomming-ipos"
            className="text-sm text-zinc-900 transition hover:text-zinc-900/75"
          >
            Upcomming IPOs
          </Link>
          <Link
            href="#current-ipos"
            className="text-sm text-zinc-900 transition hover:text-zinc-900/75"
          >
            Current IPOs
          </Link>
          <Link
            href="#past-ipos"
            className="text-sm text-zinc-900 transition hover:text-zinc-900/75"
          >
            Past IPOs
          </Link>
          <Link
            href="#footer"
            className="text-sm text-zinc-900 transition hover:text-zinc-900/75"
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
