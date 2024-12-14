import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="navbar bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li><Link href="/home">Homepage</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/aboutus">About US</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/support">Support</Link></li>
              <li><Link href="/careers">Careers</Link></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">Support</a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 bg-base-100">
        <h2 className="text-3xl font-bold mb-6">Support Center</h2>
        <p className="mb-6 text-lg">
          We are here to assist you! Whether you have a question about our services, need help with an order, or require any other type of assistance, our team is available to support you.
        </p>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Frequently Asked Questions</h3>
          <ul className="list-disc list-inside">
            <li className="mb-2">How can I track my order?</li>
            <li className="mb-2">What payment methods do you accept?</li>
            <li className="mb-2">How do I return an item?</li>
          </ul>

          <h3 className="text-2xl font-semibold">Contact Us</h3>
          <p>If you can't find an answer to your question, feel free to reach out to us through the contact form below.</p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg">Message</label>
              <textarea
                id="message"
                name="message"
                className="textarea textarea-bordered w-full"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default page
