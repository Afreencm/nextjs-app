import Link from 'next/link'
import React from 'react'

const page = () => {
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
          <a className="btn btn-ghost text-xl">Careers</a>
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

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Join Our Team</h2>
          <p className="mt-4 text-lg text-gray-600">
            We're always looking for talented and passionate people to join our team. If you're ready to make an impact, we want to hear from you!
          </p>
        </div>

        {/* Job Listings */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center">Current Openings</h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Job 1 */}
            <div className="card bg-base-100 shadow-lg p-6 rounded-lg">
              <h4 className="text-xl font-semibold">Front-End Developer</h4>
              <p className="mt-2 text-gray-500">We are looking for a skilled Front-End Developer to create engaging and user-friendly web applications.</p>
              <ul className="mt-4 space-y-2">
                <li><strong>Location:</strong> Remote</li>
                <li><strong>Experience:</strong> 2+ years in web development</li>
                <li><strong>Skills:</strong> React, HTML, CSS, JavaScript</li>
              </ul>
              <Link href="/apply">
                <button className="btn btn-primary mt-4">Apply Now</button>
              </Link>
            </div>

            {/* Job 2 */}
            <div className="card bg-base-100 shadow-lg p-6 rounded-lg">
              <h4 className="text-xl font-semibold">UI/UX Designer</h4>
              <p className="mt-2 text-gray-500">We are seeking a creative UI/UX Designer to design intuitive and visually appealing interfaces for our web apps.</p>
              <ul className="mt-4 space-y-2">
                <li><strong>Location:</strong> On-site (New York)</li>
                <li><strong>Experience:</strong> 3+ years in UI/UX design</li>
                <li><strong>Skills:</strong> Figma, Adobe XD, Sketch</li>
              </ul>
              <Link href="/apply">
                <button className="btn btn-primary mt-4">Apply Now</button>
              </Link>
            </div>

            {/* Job 3 */}
            <div className="card bg-base-100 shadow-lg p-6 rounded-lg">
              <h4 className="text-xl font-semibold">Marketing Specialist</h4>
              <p className="mt-2 text-gray-500">We need a results-driven Marketing Specialist to help us develop strategies that drive brand awareness and customer engagement.</p>
              <ul className="mt-4 space-y-2">
                <li><strong>Location:</strong> Hybrid</li>
                <li><strong>Experience:</strong> 2+ years in marketing</li>
                <li><strong>Skills:</strong> SEO, Content Strategy, Google Analytics</li>
              </ul>
              <Link href="/apply">
                <button className="btn btn-primary mt-4">Apply Now</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Company Culture */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold">Our Culture</h3>
          <p className="mt-4 text-lg text-gray-600">
            At [Your Company], we believe in creating an inclusive, supportive, and innovative work environment. We value collaboration, creativity, and a growth mindset. Our team is passionate about making a difference and we encourage continuous learning and personal development.
          </p>
        </div>

        {/* How to Apply */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold">How to Apply</h3>
          <p className="mt-4 text-lg text-gray-600">
            Interested in one of our open positions? Click "Apply Now" on any of the listings above and submit your resume and portfolio. We look forward to reviewing your application!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All rights reserved by AFreen C M Ltd</p>
        </aside>
      </footer>
    </main>
  )
}

export default page;
