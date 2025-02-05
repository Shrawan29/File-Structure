import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="relative bg-black/80 backdrop-blur-xl border-t border-white/10 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-black/20 to-fuchsia-900/20 opacity-80" />
                <div className="absolute inset-0 backdrop-blur-xl bg-black/20" />
                {/* Animated border with more pronounced pulse */}
                <div className="absolute top-0 left-0 right-0 h-[0.5px]">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/70 to-transparent animate-pulse " />
                </div>
            </div>

            <div className="relative mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 z-10">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="relative group flex items-center">
                            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/40 to-fuchsia-600/40 rounded-xl opacity-0 blur-md group-hover:opacity-100 transition-all duration-700" />
                            <span className="relative text-xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                                LOGO
                            </span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Resources</h2>
                            <ul className="text-gray-300">
                                <li className="mb-4">
                                    <Link to="/" className="relative group">
                                        <span className="relative z-10 group-hover:text-white transition-colors duration-300">Home</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-fuchsia-600/0 group-hover:from-purple-600/20 group-hover:to-fuchsia-600/20 opacity-0 group-hover:opacity-100 rounded-lg transition-all duration-300" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="relative group">
                                        <span className="relative z-10 group-hover:text-white transition-colors duration-300">About</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-fuchsia-600/0 group-hover:from-purple-600/20 group-hover:to-fuchsia-600/20 opacity-0 group-hover:opacity-100 rounded-lg transition-all duration-300" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Follow us</h2>
                            <ul className="text-gray-300">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com"
                                        className="relative group flex items-center"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span className="relative z-10 group-hover:text-white transition-colors duration-300">GitHub</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-fuchsia-600/0 group-hover:from-purple-600/20 group-hover:to-fuchsia-600/20 opacity-0 group-hover:opacity-100 rounded-lg transition-all duration-300" />
                                    </a>
                                </li>
                                <li>
                                    <Link to="/discord" className="relative group">
                                        <span className="relative z-10 group-hover:text-white transition-colors duration-300">Discord</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-fuchsia-600/0 group-hover:from-purple-600/20 group-hover:to-fuchsia-600/20 opacity-0 group-hover:opacity-100 rounded-lg transition-all duration-300" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Legal</h2>
                            <ul className="text-gray-300">
                                <li className="mb-4">
                                    <Link to="/privacy-policy" className="relative group">
                                        <span className="relative z-10 group-hover:text-white transition-colors duration-300">Privacy Policy</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-fuchsia-600/0 group-hover:from-purple-600/20 group-hover:to-fuchsia-600/20 opacity-0 group-hover:opacity-100 rounded-lg transition-all duration-300" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/terms" className="relative group">
                                        <span className="relative z-10 group-hover:text-white transition-colors duration-300">Terms &amp; Conditions</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-fuchsia-600/0 group-hover:from-purple-600/20 group-hover:to-fuchsia-600/20 opacity-0 group-hover:opacity-100 rounded-lg transition-all duration-300" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-800 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-300 sm:text-center">
                        © {new Date().getFullYear()} Your Company Name. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        {[
                            { 
                                svg: (
                                    <path
                                        fillRule="evenodd"
                                        d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                        clipRule="evenodd"
                                    />
                                ),
                                viewBox: "0 0 8 19",
                                label: "Facebook page"
                            },
                            { 
                                svg: (
                                    <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                                ),
                                viewBox: "0 0 21 16",
                                label: "Discord community"
                            },
                            { 
                                svg: (
                                    <path
                                        fillRule="evenodd"
                                        d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                        clipRule="evenodd"
                                    />
                                ),
                                viewBox: "0 0 20 17",
                                label: "Twitter page"
                            }
                        ].map((social, index) => (
                            <Link 
                                key={index} 
                                to="#" 
                                className="relative group p-1 rounded-full transition-all duration-300"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-fuchsia-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                <svg
                                    className="w-4 h-4 relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox={social.viewBox}
                                >
                                    {social.svg}
                                </svg>
                                <span className="sr-only">{social.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}