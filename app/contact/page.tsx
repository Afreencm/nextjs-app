import Link from 'next/link';
import React from 'react'

const Contact = () => {


  return (
    <main>
{/* Navbar */}
<div className="navbar bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><Link href="/home">Homepage</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/aboutus">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/support">Support</Link></li>
              <li><Link href="/careers">Careers</Link></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">Contact</a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
      <div className="flex justify-center">
        <form className="w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
             
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
             
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="textarea textarea-bordered w-full"
              required
            />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Contact Information Section */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <p className="mb-2">Email: contact@example.com</p>
        <p className="mb-2">Phone: +1 (555) 123-4567</p>
        <p className="mb-2">Address: 123 Main Street, City, Country</p>
      </div>
    </div>
       {/* Footer */}
       <footer className="footer footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Afreen C M Ltd</p>
                </aside>
            </footer>
    </main>
  );
};

export default Contact;
