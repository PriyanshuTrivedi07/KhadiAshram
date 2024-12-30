// src/components/Footer.jsx
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white text-gray-800  py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* Customer Service */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Customer Service</h2>
                    <ul>
                        <li className="mb-2"><a href="/help" className="hover:text-gray-400">Help Center</a></li>
                        <li className="mb-2"><a href="/returns" className="hover:text-gray-400">Returns</a></li>
                        <li className="mb-2"><a href="/shipping" className="hover:text-gray-400">Shipping</a></li>
                        <li className="mb-2"><a href="/track-order" className="hover:text-gray-400">Track Order</a></li>
                    </ul>
                </div>

                {/* Company Information */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Company</h2>
                    <ul>
                        <li className="mb-2"><a href="/about" className="hover:text-gray-400">About Us</a></li>
                        <li className="mb-2"><a href="/careers" className="hover:text-gray-400">Careers</a></li>
                        <li className="mb-2"><a href="/press" className="hover:text-gray-400">Press</a></li>
                        <li className="mb-2"><a href="/affiliate" className="hover:text-gray-400">Affiliate</a></li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                    <ul>
                        <li className="mb-2"><a href="/gift-cards" className="hover:text-gray-400">Gift Cards</a></li>
                        <li className="mb-2"><a href="/coupons" className="hover:text-gray-400">Coupons</a></li>
                        <li className="mb-2"><a href="/find-store" className="hover:text-gray-400">Find a Store</a></li>
                        <li className="mb-2"><a href="/size-guide" className="hover:text-gray-400">Size Guide</a></li>
                    </ul>
                </div>

                {/* Follow Us */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Follow Us</h2>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" className="hover:text-gray-400"><FaFacebook size={24} /></a>
                        <a href="https://twitter.com" className="hover:text-gray-400"><FaTwitter size={24} /></a>
                        <a href="https://instagram.com" className="hover:text-gray-400"><FaInstagram size={24} /></a>
                        <a href="https://linkedin.com" className="hover:text-gray-400"><FaLinkedin size={24} /></a>
                    </div>
                </div>

            </div>

            <div className="mt-8 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
