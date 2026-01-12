"use client"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="">
             <img src="/Transparent-03.webp" width={208} height={32} alt="" />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 nav-Cus">
            <Link href="/page3" className="text-slate-300 hover:text-white transition">
             Home
            </Link>
            <Link href="/" className="text-slate-300 hover:text-white transition">
             About
            </Link>
            <Link href="/page2" className="text-slate-300 hover:text-white transition">
              How we help
            </Link>
             <Link href="/page2" className="text-slate-300 hover:text-white transition">
             Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-slate-800">
            <Link href="/" className="block py-2 text-slate-300 hover:text-white">
              Page 1
            </Link>
            <Link href="/page2" className="block py-2 text-slate-300 hover:text-white">
              Page 2
            </Link>
            <Link href="/page3" className="block py-2 text-slate-300 hover:text-white">
              Page 3
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
