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
                    <a className="btn btn-ghost text-xl">Services</a>
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
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold text-center mb-6">Our Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Service Card 1 */}
                    <div className="card bg-base-100 shadow-xl">

                        <div className="card-body">
                            <h2 className="card-title">Service 1</h2>
                            <p>Short description of service 1.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                    {/* Service Card 2 */}
                    <div className="card bg-base-100 shadow-xl">

                        <div className="card-body">
                            <h2 className="card-title">Service 2</h2>
                            <p>Short description of service 2.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                    {/* Service Card 3 */}
                    <div className="card bg-base-100 shadow-xl">

                        <div className="card-body">
                            <h2 className="card-title">Service 3</h2>
                            <p>Short description of service 3.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default page