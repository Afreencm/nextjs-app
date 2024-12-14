import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <main>
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
                            <li><Link href="/aboutus">About US</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li><Link href="/support">Support</Link></li>
                            <li><Link href="/careers">Careers</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost text-xl">About Page</a>
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
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
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
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* About Us Section */}
            <section className="my-16 px-4">
                <div className="text-center">
                    <h2 className="text-3xl font-bold">About Us</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Welcome to our company! We are a dynamic and innovative team committed to delivering the best products and services to our customers.
                    </p>
                </div>

                {/* Mission and Vision */}
                <div className="flex justify-center mt-8 space-x-16">
                    <div className="text-center">
                        <h3 className="text-xl font-semibold">Our Mission</h3>
                        <p className="mt-2 text-gray-500">
                            Our mission is to provide high-quality products and services that make a positive impact on the lives of our customers. We aim to innovate and improve in every area of our business.
                        </p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-semibold">Our Vision</h3>
                        <p className="mt-2 text-gray-500">
                            To be a leader in the industry, known for our commitment to excellence and our passion for customer satisfaction. We envision a future where we continue to expand our reach and improve our offerings.
                        </p>
                    </div>
                </div>

                {/* Company History */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-semibold">Our History</h3>
                    <p className="mt-4 text-lg text-gray-600">
                        Founded in 2024, our company began with a small team and a big vision. Over the years, we’ve grown steadily, embracing new technologies and methods to offer our clients the best services. Today, we are proud to be a leading player in the industry, serving thousands of customers worldwide.
                    </p>
                </div>

                {/* Our Values */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-semibold">Our Values</h3>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="value-card">
                            <h4 className="text-xl font-semibold">Integrity</h4>
                            <p className="mt-2 text-gray-500">
                                We adhere to the highest standards of ethics and integrity in every aspect of our business.
                            </p>
                        </div>
                        <div className="value-card">
                            <h4 className="text-xl font-semibold">Innovation</h4>
                            <p className="mt-2 text-gray-500">
                                We continuously strive to innovate, improving our services and products to meet the evolving needs of our customers.
                            </p>
                        </div>
                        <div className="value-card">
                            <h4 className="text-xl font-semibold">Customer-Centric</h4>
                            <p className="mt-2 text-gray-500">
                                Our customers are at the heart of everything we do. We listen to their needs and work hard to exceed their expectations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Footer */}
            <footer className="footer footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Afreen C M Ltd</p>
                </aside>
            </footer>
        </main>
    )
}

export default page