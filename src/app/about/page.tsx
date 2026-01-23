
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
            href: "/invoice-generator",
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
        buttonHref: "/invoice-generator",
    }
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-slate-50 text-gray-800">
            {/* Hero Section - Soft Blue/Indigo Gradient */}
            <section className="bg-linear-to-br from-blue-500 via-indigo-600 to-indigo-700 text-white py-20 md:py-28 px-4 text-center">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight drop-shadow-sm">
                        {aboutContent.hero.heading}
                    </h1>
                    <p className="text-xl md:text-2xl font-light mb-6 opacity-90">
                        {aboutContent.hero.subheading}
                    </p>
                    <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-80">
                        {aboutContent.hero.description}
                    </p>
                    <Link href={aboutContent.hero.callToAction.href} className="inline-block bg-white text-indigo-700 hover:bg-blue-50 px-8 py-4 rounded-full text-lg font-bold shadow-lg transition-all transform hover:scale-105">
                        {aboutContent.hero.callToAction.text}
                    </Link>
                </div>
            </section>

            {/* Our Mission Section - Light Blue Tint */}
            <section className="py-16 md:py-24 px-4 bg-blue-50/40">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
                        {aboutContent.mission.heading}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {aboutContent.mission.points.map((point, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-2">
                                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-100/50 text-4xl mb-6 text-blue-600">
                                    {point.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-slate-800">{point.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{point.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Core Values Section - Soft Indigo subtle background */}
            <section className="bg-white py-16 md:py-24 px-4">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
                        {aboutContent.values.heading}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {aboutContent.values.items.map((value, index) => (
                            <div key={index} className="bg-indigo-50/30 p-6 rounded-xl border border-indigo-100 hover:bg-indigo-50 transition-colors">
                                <h3 className="text-lg font-semibold mb-2 text-indigo-700">{value.title}</h3>
                                <p className="text-gray-600 text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Behind the Project Section - Neutral Soft Gray */}
            <section className="bg-slate-50 py-16 md:py-24 px-4 text-center">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                        {aboutContent.team.heading}
                    </h2>
                    <p className="text-lg md:text-xl mb-8 text-gray-600">
                        {aboutContent.team.description}
                    </p>
                    <Link href={aboutContent.team.callToAction.href} className="inline-block bg-indigo-600 text-white hover:bg-indigo-700 px-8 py-4 rounded-full text-lg font-bold shadow-lg transition-all transform hover:scale-105">
                        {aboutContent.team.callToAction.text}
                    </Link>
                </div>
            </section>

            {/* Bottom CTA - Bright White with soft shadow */}
            <section className="bg-white py-16 md:py-20 px-4 text-center border-t border-slate-100">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight text-slate-900">
                        {aboutContent.ctaBottom.heading}
                    </h2>
                    <p className="text-xl text-slate-500 md:text-2xl font-light mb-8">
                        {aboutContent.ctaBottom.subheading}
                    </p>
                    <Link href={aboutContent.ctaBottom.buttonHref} className="inline-block bg-indigo-600 text-white hover:bg-indigo-700 px-10 py-5 rounded-full text-xl font-bold shadow-xl transition-all transform hover:scale-105">
                        {aboutContent.ctaBottom.buttonText}
                    </Link>
                </div>
            </section>
        </div>
    );
}