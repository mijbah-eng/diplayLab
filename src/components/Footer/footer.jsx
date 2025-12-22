"use client"
import Link from "next/link";

function Footer() {
  return (
    <>
    <div className="space-large"></div>


    <footer className="flex flex-col flex-wrap items-center lg:justify-between overflow-hidden gap-10 md:gap-20 py-10 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-500 bg-black">
      <div className="flex flex-wrap items-start gap-10 md:gap-[60px] xl:gap-[140px] justify-center">
        <div>
          <p className="text-slate-100 font-semibold">PRODUCT</p>

          <ul className="mt-2 space-y-2">
            <li>
              <Link href="/" className="hover:text-[#105783] transition">
                Overview
              </Link>
            </li>

            <li>
              <Link href="/" className="hover:text-[#105783] transition">
                CMS Systems
              </Link>
            </li>

            <li>
              <Link href="/" className="hover:text-[#105783] transition">
                Products
              </Link>
            </li>

            <li>
              <Link href="/" className="hover:text-[#105783] transition">
                Services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-slate-100 font-semibold">COMPANY</p>

          <ul className="mt-2 space-y-2">
            <li>
              <Link href="/about" className="hover:text-[#105783] transition">
                About
              </Link>
            </li>

            <li>
              <Link href="/" className="hover:text-[#105783] transition">
                Rental
              </Link>
            </li>

            <li>
              <Link href="/" className="hover:text-[#105783] transition">
                Advertising
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-[#105783] transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-slate-100 font-semibold">SUPPORT</p>

          <ul className="mt-2 space-y-2">
            <li>
              <a href="/" className="hover:text-[#105783] transition">
                FAQ
              </a>
            </li>

            <li>
              <a href="/" className="hover:text-[#105783] transition">
                Support Center
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-[#105783] transition">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-slate-100 font-semibold">
            Subscribe to our newslatter
          </p>
          <form className="flex flex-col items-center text-sm text-slate-100">
            <div className="flex items-center mt-2 mb-4 h-10 pl-3  rounded-lg focus-within:ring-2 focus-within:ring-[#105783] transition-all overflow-hidden">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 3.438h-15a.937.937 0 0 0-.937.937V15a1.563 1.563 0 0 0 1.562 1.563h13.75A1.563 1.563 0 0 0 18.438 15V4.375a.94.94 0 0 0-.938-.937m-2.41 1.874L10 9.979 4.91 5.313zM3.438 14.688v-8.18l5.928 5.434a.937.937 0 0 0 1.268 0l5.929-5.435v8.182z"
                  fill="#475569"
                />
              </svg>

              <input
                type="email"
                className="h-full px-2 w-full outline-none bg-transparent"
                placeholder="Enter your email address"
                required
              />
              
            </div>
            <button type="submit" className="flex items-center justify-center gap-1 mt-0 bg-[#105783] hover:bg-[#094970] text-white py-2.5 w-full rounded-lg transition cursor-pointer">

                    Submit Form
                </button>
          </form>
        </div>
      </div>
      <p className="mt-0 text-center">
        © 2025 <Link className="hover:text-[#105783]" href="https://displaylab.net" target="_blank">Dispay Lab</Link>
      </p>
    </footer>
    </>
  );
}

export default Footer;
