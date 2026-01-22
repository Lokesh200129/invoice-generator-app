
import Link from 'next/link';
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: "Our Mission",
    description: "Learn how Easy Invoice started and why we are committed to helping freelancers simplify their billing process.",

};

const aboutContent = {
    hero: {
        heading: "About Easy Invoice",
        subheading: "Simplifying Your Billing, So You Can Focus on What Matters.",
        description: "At Easy Invoice, we believe that creating professional invoices should be straightforward, fast, and accessible to everyone. We've built a powerful yet incredibly simple tool designed for freelancers, small businesses, and entrepreneurs who want to spend less time on admin and more time on growth.",
        callToAction: {
            text: "Start Creating Invoices Now",
            href: "/",
        },
    },
    mission: {
        heading: "Our Mission",
        points: [
            {
                title: "Empower Small Businesses",
                description: "To provide an intuitive platform that empowers freelancers and small businesses to manage their finances effortlessly, helping them look professional and get paid on time.",
                icon: "🚀"
            },
            {
                title: "Simplicity & Efficiency",
                description: "To cut through the complexity of traditional invoicing, offering a streamlined process that saves valuable time and reduces financial stress.",
                icon: "⏱️"
            },
            {
                title: "Accessibility for All",
                description: "To ensure that high-quality invoicing solutions are available for everyone, regardless of technical skill or budget, fostering financial independence.",
                icon: "💡"
            }
        ]
    },
    values: {
        heading: "Our Core Values",
        items: [
            {
                title: "User-Centric Design",
                description: "Every feature and decision is made with our users in mind, ensuring an experience that is truly helpful and enjoyable.",
            },
            {
                title: "Transparency",
                description: "We are open about our practices and committed to building trust with our community.",
            },
            {
                title: "Innovation",
                description: "Continuously seeking new ways to improve and expand our offerings to meet the evolving needs of our users.",
            },
            {
                title: "Support",
                description: "Providing reliable and friendly support to ensure our users always have the help they need.",
            }
        ]
    },
    team: {
        heading: "Behind Easy Invoice",
        description: "Easy Invoice was born out of a simple need: a better way to invoice. Our small, dedicated team is passionate about solving real-world problems with elegant software solutions. We're constantly listening to feedback and working hard to make Easy Invoice the best tool for your business.",
        callToAction: {
            text: "Join Our Community",
            href: "#", // Link to a community forum or social media
        },
    },
    ctaBottom: {
        heading: "Ready to Simplify Your Invoicing?",
        subheading: "Join thousands of satisfied users who trust Easy Invoice for their billing needs.",
        buttonText: "Create Your First Invoice",
        buttonHref: "/",
    }
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            {/* Hero Section */}
            <section className="bg-linear-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 text-white py-20 md:py-28 px-4 text-center">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
                        {aboutContent.hero.heading}
                    </h1>
                    <p className="text-xl md:text-2xl font-light mb-6 opacity-90">
                        {aboutContent.hero.subheading}
                    </p>
                    <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-80">
                        {aboutContent.hero.description}
                    </p>
                    <Link href={aboutContent.hero.callToAction.href} className="inline-block bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-bold shadow-lg transition-all transform hover:scale-105">
                        {aboutContent.hero.callToAction.text}
                    </Link>
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="py-16 md:py-24 px-4">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white">
                        {aboutContent.mission.heading}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {aboutContent.mission.points.map((point, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                                <div className="text-5xl mb-4 text-blue-500">{point.icon}</div>
                                <h3 className="text-xl font-semibold mb-3 dark:text-white">{point.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{point.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Core Values Section */}
            <section className="bg-gray-100 dark:bg-gray-800 py-16 md:py-24 px-4">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white">
                        {aboutContent.values.heading}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {aboutContent.values.items.map((value, index) => (
                            <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">{value.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Behind Easy Invoice Section */}
            <section className="py-16 md:py-24 px-4 text-center">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
                        {aboutContent.team.heading}
                    </h2>
                    <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300">
                        {aboutContent.team.description}
                    </p>
                    <Link href={aboutContent.team.callToAction.href} className="inline-block bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-full text-lg font-bold shadow-lg transition-all transform hover:scale-105">
                        {aboutContent.team.callToAction.text}
                    </Link>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="bg-white py-16 md:py-20 px-4 text-center">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
                        {aboutContent.ctaBottom.heading}
                    </h2>
                    <p className="text-xl text-black md:text-2xl font-light mb-8 opacity-90">
                        {aboutContent.ctaBottom.subheading}
                    </p>
                    <Link href={aboutContent.ctaBottom.buttonHref} className="inline-block bg-white text-blue-700 hover:bg-gray-100 px-10 py-5 rounded-full text-xl font-bold shadow-xl transition-all transform hover:scale-105">
                        {aboutContent.ctaBottom.buttonText}
                    </Link>
                </div>
            </section>
        </div>
    );
}