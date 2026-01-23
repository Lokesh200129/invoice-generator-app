'use client';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'react-toastify';

const footerLinks = [
    {
        title: 'Quick Links',
        items: [
            { name: 'Invoice Generator', href: '/' },
            { name: 'About Us', href: '/about' }
        ]
    },
    {
        title: 'Legal',
        items: [
            { name: 'Privacy Policy', href: '/privacy-policy' },
            { name: 'Contact', href: '/contact' }
        ]
    }
];

export default function Footer() {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        toast.success('Thanks for subscribing!');
        setEmail("")
        setTimeout(() => setIsSubmitting(false), 5000)
    };
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-gray-900 text-white  border-t border-gray-800 mt-12 ">
            <div className="container mx-auto px-8 pt-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <div>
                            <Link href="/" className="text-3xl font-bold text-blue-500 mb-4 block">
                                Easy Invoice
                            </Link>
                            <p className="text-gray-400 text-base max-w-md">
                                Create professional invoices quickly and easily.
                                Join thousands of freelancers and small businesses
                                simplifying their billing today.
                            </p>
                        </div>

                        <div className="pt-4">
                            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
                                Subscribe to our Newsletter
                            </h4>
                            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                />
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="px-8 py-3 bg-blue-500 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-colors cursor-pointer"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* RIGHT SIDE: Navigation Links (Half Width) */}
                    <div className="grid grid-cols-2 gap-8">
                        {footerLinks.map((section) => (
                            <div key={section.title} >
                                <h3 className="text-lg font-bold mb-6 flex flex-col ">{section.title}</h3>
                                <ul className="space-y-4 flex flex-col   ">
                                    {section.items.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="text-white hover:text-blue-500 transition-colors text-sm"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className=" py-4 mt-8 border-t border-gray-800 flex justify-center items-center">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} Easy Invoice. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}