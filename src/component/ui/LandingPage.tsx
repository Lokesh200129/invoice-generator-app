import { MoveRight } from "lucide-react";
import Link from "next/link";
const features = [
    {
        icon: "⚡",
        title: "Lightning Fast",
        description: "Create professional invoices in under 30 seconds with our intuitive form.",
    },
    {
        icon: "📄",
        title: "Beautiful PDFs",
        description: "Download crisp, searchable, and print-ready PDF invoices instantly.",
    },
    {
        icon: "🖨️",
        title: "Print Ready",
        description: "Perfect layout optimized for A4 printing with proper margins and alignment.",
    },
    {
        icon: "🔒",
        title: "Private & Secure",
        description: "All data stays in your browser. No account or server storage required.",
    },
    {
        icon: "💰",
        title: "Customizable",
        description: "Add logo, tax, discount, notes, and multiple line items easily.",
    },
    {
        icon: "📱",
        title: "Responsive Design",
        description: "Works flawlessly on desktop, tablet, and mobile devices.",
    },
];

const LandingPage = () => {
    return (
        <div className=" bg-[#F8FAFC]">
            {/* Hero Section */}
            <div className="w-full mx-auto px-6 pt-16 pb-20">
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1 shadow-sm mb-6">
                        <span className="text-emerald-500 text-xl">📄</span>
                        <span className="text-sm font-medium text-slate-600">Free • Simple • Professional</span>
                    </div>

                    <h1 className="text-5xl font-semibold text-slate-900 tracking-wider mb-6">
                        Create Invoices <span className="text-blue-600">Instantly</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-xl text-slate-600 leading-relaxed">
                        A beautiful, fast, and free invoice generator for freelancers, small businesses,
                        and schools. No sign-up. No ads. Just fill, download, and send.
                    </p>

                    <Link href={'/invoice-generator'} className="flex items-center justify-center gap-4 mt-10">
                        <button className="bg-blue-600 text-white px-8 py-3.5 rounded-xl font-medium hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-200" >
                            Create Invoice Now
                            <MoveRight />
                        </button>
                    </Link>

                    <p className="text-slate-500 text-sm mt-4">No credit card required • Free forever</p>
                </div>
            </div>

            {/* Features Section */}
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-slate-900 mb-3">Why Choose Our Invoice App</h2>
                    <p className="text-slate-600">Designed for simplicity and professionalism</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl p-8 hover:shadow-xl transition-shadow border border-slate-100 group"
                        >
                            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="font-semibold text-xl text-slate-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Banner */}
            <div className="bg-white border-t border-b border-slate-100 py-12">
                <div className="flex flex-col justify-center items-center px-6 text-center">
                    <h2 className="text-3xl font-semibold text-slate-900 mb-4">
                        Ready to create your first invoice?
                    </h2>
                    <p className="text-slate-600 mb-8">
                        Join thousands of users who generate invoices in seconds.
                    </p>
                    <Link href={'/invoice-generator'}>
                        <button className="bg-emerald-600 text-white px-10 py-4 rounded-2xl font-medium hover:bg-emerald-700 transition-colors text-lg shadow-lg shadow-emerald-100 flex items-center justify-center gap-2">
                            Start Creating Invoices
                            <MoveRight />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;