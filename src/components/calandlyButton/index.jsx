"use client"

import Script from "next/script";


function CalandlyButton() {

  return (
    <>
      {/* Calendly CSS */}
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />

      {/* Calendly Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />

      {/* Calendly Button */}
      <button
        onClick={() =>
          window.Calendly.initPopupWidget({
            url: "https://calendly.com/displaylab/30min",
          })
        }
        className="px-4 py-2 bg-transparent text-white border-2 border-white rounded-full cursor-pointer"
      >
        Schedule time with Display Lab
      </button>
    </>
  );
}

export default CalandlyButton;
