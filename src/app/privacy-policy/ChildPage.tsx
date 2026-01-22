'use client';
interface PolicySection {
    id: string;
    title: string;
    content: string;
    list?: string[];
}

const policyData = {
    title: "Privacy Policy",
    lastUpdated: "January 21, 2026",
    introduction: "At Easy Invoice, we take your privacy seriously. This policy explains what information we collect, how we use it, and your rights regarding your data.",
    sections: [
        {
            id: "collection",
            title: "1. Information We Collect",
            content: "We collect information to provide a better invoicing experience. This includes:",
            list: [
                "Personal details (Name, email address, business name).",
                "Invoice data (Client names, amounts, and item descriptions).",
                "Usage data (IP address, browser type, and interaction with our tools).",
                "Cookies to keep you logged in and remember your preferences."
            ]
        },
        {
            id: "usage",
            title: "2. How We Use Your Information",
            content: "Your data is used strictly to facilitate the services we provide. We use it to:",
            list: [
                "Generate and store your invoices securely.",
                "Send you transactional emails and newsletter updates (if subscribed).",
                "Analyze platform performance to improve user experience.",
                "Prevent fraudulent activity and maintain security."
            ]
        },
        {
            id: "security",
            title: "3. Data Security",
            content: "We implement industry-standard security measures, including SSL encryption and secure database protocols. While we strive for absolute security, please remember that no method of electronic storage is 100% secure.",
        },
        {
            id: "sharing",
            title: "4. Third-Party Sharing",
            content: "We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information with our business partners for the purposes outlined above.",
        },
        {
            id: "rights",
            title: "5. Your Rights",
            content: "You have the right to access, update, or delete your account information at any time. If you wish to close your account or request data deletion, please contact our support team.",
        }
    ] as PolicySection[]
};

export default function PrivacyPolicy() {
    return (
        <div className=" bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <header className="mb-12 border-b border-gray-100  pb-10">
                    <h1 className="text-4xl font-extrabold text-gray-900  mb-4">
                        {policyData.title}
                    </h1>
                    <p className="text-gray-500">
                        Last Updated: <span className="font-medium">{policyData.lastUpdated}</span>
                    </p>
                    <p className="mt-6 text-lg text-gray-600  leading-relaxed">
                        {policyData.introduction}
                    </p>
                </header>
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Sticky Sidebar Navigation */}
                    <aside className="md:w-1/4">
                        <nav className="sticky top-20 space-y-2">
                            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">Contents</p>
                            {policyData.sections.map((section) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className="block text-sm text-gray-500 hover:text-blue-600  transition-colors py-1"
                                >
                                    {section.title.split('. ')[1]}
                                </a>
                            ))}
                        </nav>
                    </aside>

                    {/* Main Content Sections (Mapped) */}
                    <main className="md:w-3/4 space-y-12">
                        {policyData.sections.map((section) => (
                            <section key={section.id} id={section.id} className="scroll-mt-16">
                                <h2 className="text-2xl font-bold text-gray-900  mb-4">
                                    {section.title}
                                </h2>
                                <p className="text-gray-600  leading-relaxed mb-4">
                                    {section.content}
                                </p>
                                {section.list && (
                                    <ul className="grid gap-3">
                                        {section.list.map((item, index) => (
                                            <li key={index} className="flex items-start gap-3 text-gray-600 ">
                                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                                                <span className="text-sm leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </section>
                        ))}

                        {/* Contact Footer */}
                        <div className="mt-16 p-8 rounded-2xl bg-gray-50  border border-gray-100 dark:border-gray-800">
                            <h3 className="text-lg font-bold text-gray-900  mb-2">
                                Questions about our policy?
                            </h3>
                            <p className="text-gray-600  text-sm mb-4">
                                If you have any concerns regarding how we handle your data, we are happy to help.
                            </p>
                            <a
                                href="mailto:support@easyinvoice.com"
                                className="inline-block font-semibold text-blue-600 hover:text-blue-700 underline underline-offset-4"
                            >
                                support@easyinvoice.com
                            </a>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}