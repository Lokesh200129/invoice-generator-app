"use client"
import { useInvoiceStore } from '../store/invoiceData';
import { invoiceData } from '../utils/data';
import Image from 'next/image';
import { currencyFormat } from '../utils/currencyFormat';
import { useEffect, useRef, useMemo } from 'react';

const todayDate = () => {
    const date = new Date().toISOString().split('T')[0]
    const todayDate = date.split('-').reverse().join('-');
    return todayDate
}

const InvoiceCard = () => {
    const invoiceRef = useRef<HTMLDivElement>(null);
    const setInvoiceRef = useInvoiceStore((state) => state.setInvoiceRef);

    useEffect(() => {
        if (invoiceRef.current) {
            setInvoiceRef(invoiceRef.current);
        }
    }, [setInvoiceRef]);

    const invoice = useInvoiceStore((state) => state.invoice)
    const { companyName, companyAddress, companyEmail, invoiceNumber, clientName, clientEmail, clientAddress, items, tax = 0, currency, notes, companyLogo, discount = 0, isSignInclude } = invoice || invoiceData;

    let { date } = invoice || invoiceData;
    date = date?.split('-').reverse().join('-')

    const calculations = useMemo(() => {
        const subTotal = items?.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0) || 0;
        const discountedPrice = (subTotal * (discount || 0) / 100);
        const calculatedTax = (subTotal * (tax || 0)) / 100;
        const total = subTotal + calculatedTax - discountedPrice;
        return {
            subTotal,
            discountedPrice,
            calculatedTax,
            total
        };
    }, [items, discount, tax]);
    const { subTotal, discountedPrice, calculatedTax, total } = calculations;
    const tableHead = ['Description', 'QTY', 'Price', 'Total']

    return (
        <div ref={invoiceRef} className='print-container p-8 w-full rounded-xl shadow-lg border border-gray-300 h-auto  font-sans capitalize sticky top-15  '>
            <div className='flex justify-between items-start mb-10 pb-4 border-b-2 border-gray-400'>
                <div >
                    <div className='w-20 h-20   rounded-lg flex items-center justify-center mb-4 text-gray-400'>
                        {
                            companyLogo ? <Image src={companyLogo} alt='logo' width={100} height={100} className='object-cover size-22 rounded ' /> : <div className="bg-blue-50 size-22 flex justify-center items-center rounded text-center text-sm font-medium text-blue-600">
                                Upload <br /> Logo
                            </div>
                        }
                    </div>
                    {/* from */}
                    <h3 className='text-xs font-bold  uppercase tracking-wider mb-2 '>Bill From</h3>
                    <h2 className='text-xl font-bold text-gray-800'>{companyName || "Company Name"}</h2>
                    <h3 className='normal-case'>{companyEmail || 'Company Email'}</h3>
                    <p className='text-sm text-gray-500 max-w-50 mt-1'>{companyAddress || '123 Business Rd City, Country'}</p>
                </div>

                <div className='text-right'>
                    <h1 className='text-4xl font-semibold text-blue-600 tracking-wide mb-2'>INVOICE</h1>
                    <p className='text-gray-600 font-medium'># INV - {invoiceNumber || "001"}</p>
                    <p className='text-gray-500 text-sm mt-1'>Date: {date || todayDate()}</p>
                </div>
            </div>

            <div className='mb-10 '>
                <h3 className='text-xs font-bold  uppercase tracking-wider mb-2 '>Bill To</h3>
                <h2 className='text-lg font-semibold text-gray-800'>{clientName || 'Client Name'}</h2>
                <h3 className='normal-case'>{clientEmail || 'Client Email'}</h3>
                <p className='text-sm text-gray-500 mt-1'>{clientAddress || 'Client Address'}</p>
            </div>

            <div className='mb-10'>
                <table className='w-full'>
                    <thead>
                        <tr className='border-b-2 border-gray-400'>
                            {
                                tableHead?.map((head, idx) => (
                                    <th key={idx} className='text-left py-3 text-sm font-semibold text-gray-600 uppercase tracking-wider'>{head}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {items && items.length > 0 ? items.map((item, idx) => (
                            <tr key={idx} className='border-b border-gray-200 '>
                                <td className='py-4 text-sm text-gray-700 font-medium text-wrap '>{item.description === "" ? "Item" : item.description}</td>
                                <td className='text-left py-4 text-sm text-gray-700'>{(item.quantity) > 0 ? item.quantity : "-"}</td>
                                <td className='text-left py-4 text-sm text-gray-700'> {item.price > 0 ? `${currency} ${currencyFormat((item.price))}` : "-"}</td>
                                <td className='text-left py-4 text-sm font-semibold text-gray-800'> {(item.quantity > 0 && item.price > 0) ? `${currency} ${currencyFormat((item.quantity * item.price))}` : "-"}</td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan={4} className='py-8 text-center text-gray-400 text-sm'>No items added</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className='flex justify-end mb-10'>
                <div className='w-64 space-y-3'>
                    <div className='flex justify-between text-sm text-gray-600'>
                        <span>Subtotal</span>
                        <span className='font-medium'>{currency} {currencyFormat(subTotal)}</span>
                    </div>
                    <div className='flex justify-between text-sm text-gray-600'>
                        <span>Discount ({(discount > 0 ? discount : 0)} %)</span>
                        <span className='font-medium'>{currency} {currencyFormat(discountedPrice)}</span>
                    </div>
                    <div className='flex justify-between text-sm text-gray-600'>
                        <span>Tax ({(tax > 0 ? tax : 0)} %)</span>
                        <span className='font-medium'>{currency} {currencyFormat(calculatedTax)}</span>
                    </div>
                    <div className='border-t-2 border-gray-400 pt-3 flex justify-between items-center'>
                        <span className='font-bold text-gray-800 text-lg'>Total</span>
                        <span className='font-bold text-blue-600 text-xl'>{currency} {currencyFormat(total)}</span>
                    </div>
                </div>
            </div>

            <div className='border-t border-gray-400 pt-6'>
                <h3 className='text-xs font-bold text-gray-400 uppercase tracking-wider mb-2'>Notes & Terms</h3>
                <p className='text-sm text-gray-500 leading-relaxed'>{notes || 'Thank you for your business!'}</p>
            </div>
            {
                isSignInclude && <div className='w-full border-gray-700 flex items-end flex-col justify-center mt-15'>
                    <div className='flex  items-center flex-col'>
                        <hr className='h-1 w-40 text-gray-500 font-bold' />
                        <span >Signature</span>
                    </div>
                </div>
            }
        </div>
    )
}

export default InvoiceCard