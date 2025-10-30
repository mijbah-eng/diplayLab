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
              <Link href="/" className="hover:text-[#105783] transition">
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
              <Link href="/" className="hover:text-[#105783] transition">
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

      {/* <div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end">
        <p className="max-w-60">
          Making every customer feel valued—no matter the size of your audience.
        </p>

        <div className="flex items-center gap-4 mt-3">
          <a
            href="https://dribbble.com/prebuiltui"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-dribbble size-5 hover:text-indigo-500"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10"></circle>

              <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>

              <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>

              <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/company/prebuiltui"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-linkedin size-5 hover:text-indigo-500"
              aria-hidden="true"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>

              <rect width="4" height="12" x="2" y="9"></rect>

              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>

          <a href="https://x.com/prebuiltui" target="_blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-twitter size-5 hover:text-indigo-500"
              aria-hidden="true"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>

          <a
            href="https://www.youtube.com/@prebuiltui"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-youtube size-6 hover:text-indigo-500"
              aria-hidden="true"
            >
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>

              <path d="m10 15 5-3-5-3z"></path>
            </svg>
          </a>
        </div>

        <p className="mt-3 text-center">
          © 2025 <a href="https://prebuiltui.com">PrebuiltUI</a>
        </p>
      </div> */}
      <p className="mt-0 text-center">
        © 2025 <Link className="hover:text-[#105783]" href="https://displaylab.net" target="_blank">Dispay Lab</Link>
      </p>
    </footer>
    </>
  );
}

export default Footer;
