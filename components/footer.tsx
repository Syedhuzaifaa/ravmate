"use client"

import { useEffect, useState } from "react"

export default function GlobalLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Page hydration complete hone ke baad loader band
    setLoading(false)
  }, [])

  if (!loading) return null

  return (
    <footer className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* CONTENT */}
        <div>
          <img src="/Transparent-031.png" className="footerlogo" alt="" />
          <p className="footertext">Stay updated with RevMate news</p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-12 items-center gap-6 my-10">

          <div className="col-span-12 lg:col-span-5">
            <button className="schedule-btn">
              <span className="schedule-text">
                Schedule Your Free Sales Health Check
              </span>
              <span className="schedule-icon">
                <svg className="arrowsvg" width="45" height="45" viewBox="0 0 45 45">
                  <rect width="44.8262" height="44.8262" rx="22.4131" fill="" fillOpacity="0.3" />
                  <path
                    d="M13.0323 30.9636L30.9628 13.0331M30.9628 13.0331V30.2464M30.9628 13.0331H13.7495"
                    stroke="#F3FFFD"
                    strokeWidth="2.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div className="col-span-12 lg:col-span-2 flex justify-start">
            <div className="linkedin-box">in</div>
          </div>

          <div className="col-span-12 lg:col-span-5 flex justify-end">
            <nav className="nav-pill">
              <a className="nav-link">Home</a>
              <a className="nav-link active">About</a>
              <a className="nav-link">How we help</a>
              <a className="nav-link">Book a Call</a>
            </nav>
          </div>
        </div>

        <div className="grid grid-cols-12 items-center text-sm text-white/80">
          <div className="col-span-12 md:col-span-6 mb-4 md:mb-0">
            © 2025 RevMate. All Rights Reserved
          </div>
          <div className="col-span-12 md:col-span-6 flex md:justify-end gap-6">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Use</a>
          </div>
        </div>
      </div>

      {/* GLOBAL LOADER */}
      <div
        id="global-loader"
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999
        }}
      >
        <div className="spinner"></div>
      </div>
    </footer>
  )
}
