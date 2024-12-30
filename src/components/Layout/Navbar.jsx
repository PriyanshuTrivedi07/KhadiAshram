// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserCircle, FaShoppingCart } from 'react-icons/fa';
import { Dropdown, Container } from '../index';

const Navbar = () => {
    const profileItems = [
        { href: '/login', label: 'Login/Register' },
        { href: '/orders', label: 'My Orders' },
        { href: '/logout', label: 'Logout' },
    ];

    const menItems = [
        { href: '/men/tshirts', label: 'T-Shirts' },
        { href: '/men/shirts', label: 'Shirts' },
        { href: '/men/jeans', label: 'Jeans' },
    ];

    const womenItems = [
        { href: '/women/dresses', label: 'Dresses' },
        { href: '/women/tops', label: 'Tops' },
        { href: '/women/jeans', label: 'Jeans' },
    ];

    const beautyItems = [
        { href: '/beauty/skincare', label: 'Skincare' },
        { href: '/beauty/makeup', label: 'Makeup' },
        { href: '/beauty/haircare', label: 'Haircare' },
    ];

    const kidsItems = [
        { href: '/kids/clothing', label: 'Clothing' },
        { href: '/kids/toys', label: 'Toys' },
        { href: '/kids/accessories', label: 'Accessories' },
    ];

    const homeLivingItems = [
        { href: '/home-living/decor', label: 'Home Decor' },
        { href: '/home-living/furniture', label: 'Furniture' },
        { href: '/home-living/kitchen', label: 'Kitchen' },
    ];

    return (
        <header className="bg-white shadow-md w-full z-10">
            <div className='max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8'>
                <div className="flex justify-between items-center gap-2 md:gap-4 lg:gap-12 min-h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <NavLink to="/" className="text-2xl font-bold text-gray-800">Logo</NavLink>
                    </div>

                    {/* Nav Links */}
                    <nav className="hidden md:flex space-x-4">
                        <Dropdown title="Men" items={menItems} />
                        <Dropdown title="Women" items={womenItems} />
                        <Dropdown title="Beauty" items={beautyItems} />
                        <Dropdown title="Kids" items={kidsItems} />
                        <Dropdown title="Home & Living" items={homeLivingItems} />
                    </nav>

                    {/* Search Bar */}
                    <div className="flex-grow ">
                        <input
                            type="text"
                            placeholder="Search for products, brands and more"
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>

                    {/* User Profile & Cart */}
                    <div className="flex items-center space-x-4">
                        {/* User Profile Dropdown */}
                        <Dropdown title={<FaUserCircle size={24} />} items={profileItems} />

                        {/* Cart Button */}
                        <NavLink to="/cart" className="text-gray-800">
                            <FaShoppingCart size={24} />
                        </NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
