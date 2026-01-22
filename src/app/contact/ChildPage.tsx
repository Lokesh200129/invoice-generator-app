'use client';
import { useState } from 'react';
import { toast } from 'react-toastify';

const formFields = [
    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe' },
    { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
    { id: 'subject', label: 'Subject', type: 'text', placeholder: 'How can we help?' },
];
export default function ContactPage() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        toast.success(`Thank you, ${formData.name}! Your message has been sent.`);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitting(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    return (
        < section className=" bg-white py-20 px-4" >
            <div className="mx-auto max-w-5xl">
                {/* 50/50 Grid Parent */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
                                Get in Touch
                            </h1>
                            <p className="text-lg text-gray-600">
                                Have questions about Easy Invoice? Our team is here to help you simplify your billing process.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { title: 'Email Us', value: 'support@easyinvoice.com', icon: '📧' },
                                { title: 'Office', value: 'Noida, Uttar Pradesh, India', icon: '📍' }
                            ].map((info) => (
                                <div key={info.title} className="flex gap-4 p-4 bg-white  rounded-xl shadow-sm">
                                    <span className="text-2xl ">{info.icon}</span>
                                    <div>
                                        <h4 className="font-bold text-gray-900 ">{info.title}</h4>
                                        <p className="text-gray-500      text-sm">{info.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 ">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {formFields.map((field) => (
                                <div key={field.id}>
                                    <label htmlFor={field.id} className="block text-sm font-medium text-gray-700  mb-1">
                                        {field.label}
                                    </label>
                                    <input
                                        required
                                        type={field.type}
                                        id={field.id}
                                        value={(formData as any)[field.id]}
                                        onChange={handleChange}
                                        placeholder={field.placeholder}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50  border border-gray-200  focus:ring-2 focus:ring-blue-500 outline-none transition-all "
                                    />
                                </div>
                            ))}

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us more about your inquiry..."
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50  border border-gray-200  focus:ring-2 focus:ring-blue-500 outline-none transition-all  resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-bold rounded-lg transition-all transform hover:scale-[1.01] active:scale-95 shadow-lg shadow-blue-500/20"
                            >
                                {isSubmitting ? 'Sending Message...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    );
}